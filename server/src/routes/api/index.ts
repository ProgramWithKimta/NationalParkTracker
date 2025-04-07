import express from "express";
import { commentRouter } from './comment-routes.js';

const router = express.Router();

router.use('/comment', commentRouter);

export default router;
