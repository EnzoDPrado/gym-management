import { Router } from 'express';
import { getUsersControllerFactory } from '../main/factories/controller/user/get-users-controller-factory';
import { createUserControllerFactory } from '../main/factories/controller/user/create-user-controller-factory';

const router = Router();

router.post('', async (req, res) => {
  await createUserControllerFactory().handler({ req, res });
});

router.get('/all', async (req, res) => {
  await getUsersControllerFactory().handler({ req, res });
});

export default router;
