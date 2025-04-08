import express from 'express';
import type { Request, Response} from 'express';
import { Comment } from '../../models/index.js';


const router = express.Router();

// GET /comment - Get all comments
router.get('/', async (_req: Request, res: Response) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /comment/:id - Get comment by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /comment - Create new comment
router.post('/', async (req: Request, res: Response) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export { router as commentRouter };
