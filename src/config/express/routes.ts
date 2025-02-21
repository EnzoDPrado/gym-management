import { Router } from 'express';
import userRoutes from '../../infra/routes/user-routes';

const router = Router();

router.use('/user', userRoutes);

export default router;
