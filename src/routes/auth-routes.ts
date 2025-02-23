import { Router } from 'express';
import { loginControllerFactory } from '../main/factories/controller/auth/login-controller-factory';

const router = Router();

router.post('/login',async (req, res) => await loginControllerFactory().handler({req, res}));

export default router;
