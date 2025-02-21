import { Router } from 'express';
import {
  createUserControllerFactory,
  deleteUserByIdControllerFactory,
  getUsersControllerFactory,
} from '../main/factories/controller';

const router = Router();

router.post('', async (req, res) => {
  await createUserControllerFactory().handler({ req, res });
});

router.get('/all', async (req, res) => {
  await getUsersControllerFactory().handler({ req, res });
});

router.delete('', async (req, res) => {
  await deleteUserByIdControllerFactory().handler({ req, res });
});

export default router;
