

import { Router } from 'express';
import { createComment, getCommentsByPost } from '../controllers/Commentcontrollers';

const router = Router();

router.post('/comments', createComment);
router.get('/posts/:postId/comments', getCommentsByPost);

export default router;
