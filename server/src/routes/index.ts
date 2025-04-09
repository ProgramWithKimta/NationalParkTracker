import { Router } from 'express';
import { commentRouter } from './api/comment-routes.js'; 
import apiRoutes from './api/index.js';
const router = Router();

router.use('/api', apiRoutes);
router.use('/comment', commentRouter);

export default router;
