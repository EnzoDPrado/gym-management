import { Router } from 'express';
import {
  deleteUserByIdControllerFactory,
  getUsersControllerFactory,
} from '../main/factories/controller';
import { deleteUserSchema } from '../main/validation/user';
import { authMiddleware, validationMiddleware } from '../main/presentation/middleware';

const router = Router();

router.get(
  '/all',
  authMiddleware,
  async (req, res) => 
  await getUsersControllerFactory().handler(req, res)
);

router.delete(
  '', 
  authMiddleware,
  validationMiddleware(deleteUserSchema),
  async (req, res) => 
  await deleteUserByIdControllerFactory().handler(req, res)
);

export default router;
