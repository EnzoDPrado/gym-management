import { Router } from 'express';
import {
  deleteUserByIdControllerFactory,
  getUsersControllerFactory,
} from '../main/factories/controller';
import { deleteUserSchema } from '../main/validation/user';
import {
  apmMiddleware,
  authMiddleware,
  validationMiddleware,
} from '../main/presentation/middleware';

const router = Router();

router.get(
  '/all',
  authMiddleware,
  apmMiddleware,
  async (req, res) => await getUsersControllerFactory().handler(req, res)
);

router.delete(
  '',
  authMiddleware,
  apmMiddleware,
  validationMiddleware(deleteUserSchema),
  async (req, res) => await deleteUserByIdControllerFactory().handler(req, res)
);

export default router;
