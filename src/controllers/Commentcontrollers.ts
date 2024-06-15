import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createComment = async (req: Request, res: Response): Promise<void> => {
  const { content, userId, postId } = req.body;

  try {
    const newComment = await prisma.comment.create({
      data: {
        content,
        userId: Number(userId),
        postId: Number(postId),
      },
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getCommentsByPost = async (req: Request, res: Response): Promise<void> => {
  const { postId } = req.params;

  try {
    const comments = await prisma.comment.findMany({
      where: { postId: Number(postId) },
      include: { user: true },
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
