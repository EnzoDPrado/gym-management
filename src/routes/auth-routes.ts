import { Router } from 'express';
import { loginControllerFactory } from '../main/factories/controller/auth/login-controller-factory';
import { createUserControllerFactory } from '../main/factories/controller';
import { loginUserSchema, registerUserSchema } from '../main/validation';
import { validationMiddleware } from '../main/presentation/middleware';

const router = Router();

router.post(
  '/login',
  validationMiddleware(loginUserSchema),
  async (req, res) =>
  await loginControllerFactory().handler({req, res}));


router.post(
  '/register',
  validationMiddleware(registerUserSchema),
  async (req, res) => 
  await createUserControllerFactory().handler({ req, res })
);


export default router;
