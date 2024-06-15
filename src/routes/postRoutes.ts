
import { Router } from 'express';
import { createPost, getPosts, getPostById } from '../controllers/postcontroller';

const router = Router();

router.post('/posts', createPost);
router.get('/posts', getPosts);
router.get('/posts/:postId', getPostById);

export default router;

