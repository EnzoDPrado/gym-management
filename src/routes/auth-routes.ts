import { Router } from 'express';
import { loginUserSchema, registerUserSchema } from '../main/validation';
import { validationMiddleware } from '../main/presentation/middleware';
import { createUserControllerFactory, loginControllerFactory } from '../main/factories/controller';
import { routerAdapter } from '../main/presentation/adapter';

const router = Router();

router.post(
  '/login',
  validationMiddleware(loginUserSchema),
  routerAdapter(loginControllerFactory())
);


router.post(
  '/register',
  validationMiddleware(registerUserSchema),
  routerAdapter(createUserControllerFactory())
);


export default router;
