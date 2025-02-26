import { Router } from 'express';
import { loginUserSchema, registerUserSchema } from '../main/validation';
import { validationMiddleware } from '../main/presentation/middleware';
import { createUserControllerFactory, loginControllerFactory } from '../main/factories/controller';

const router = Router();

router.post(
  '/login',
  validationMiddleware(loginUserSchema),
  async (req, res) =>
  await loginControllerFactory().handler(req, res)
);


router.post(
  '/register',
  validationMiddleware(registerUserSchema),
  async (req, res) => 
  await createUserControllerFactory().handler(req, res)
);


export default router;
