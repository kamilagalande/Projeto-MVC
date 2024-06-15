import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (req: Request, res: Response): Promise<void> => {
  const { title, content, authorId } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author: { connect: { id: authorId } }
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getPosts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getPostById = async (req: Request, res: Response): Promise<void> => {
  const { postId } = req.params;

  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(postId) },
      include: { comments: true },
    });
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
