import { Router } from 'express';
import {
  deleteUserByIdControllerFactory,
  getUsersControllerFactory,
} from '../main/factories/controller';
import { deleteUserSchema } from '../main/validation/user';
import { authMiddleware, validationMiddleware } from '../main/presentation/middleware';
import { routerAdapter } from '../main/presentation/adapter';

const router = Router();

router.get(
  '/all',
  authMiddleware,
  routerAdapter(getUsersControllerFactory())
);

router.delete(
  '', 
  authMiddleware,
  validationMiddleware(deleteUserSchema),
  routerAdapter(deleteUserByIdControllerFactory())
);

export default router;
