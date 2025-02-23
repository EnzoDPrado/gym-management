import { Router } from 'express';
import userRoutes from './user-routes';
import documentationRoutes from './documentation-routes';

const router = Router();

router.use('/user', userRoutes);

router.use('/documentation', documentationRoutes);


export default router;
