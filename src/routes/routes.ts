import { Router } from 'express';
import userRoutes from './user-routes';
import documentationRoutes from './documentation-routes';
import authRoutes from './auth-routes';

const router = Router();

router.use('/user', userRoutes);

router.use('/documentation', documentationRoutes);

router.use('/authentication', authRoutes);

export default router;
