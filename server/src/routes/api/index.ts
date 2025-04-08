import express from "express";
import { commentRouter } from './comment-routes.js';  // No need to add .ts, TypeScript handles it automatically

const router = express.Router();

router.use('/api/comment', commentRouter);

export default router;
