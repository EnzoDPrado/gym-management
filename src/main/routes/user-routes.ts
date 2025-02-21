import { Router } from 'express';
import { createUserControllerFactory } from '../factories/controller/user/create-user-controller-factory';
import { getUsersControllerFactory } from '../factories/controller/user/get-users-controller-factory';

const router = Router();

router.post('', async (req, res) => {
  await createUserControllerFactory().handler({ req, res });
});

router.get('/all', async (req, res) => {
  await getUsersControllerFactory().handler({ req, res });
});

export default router;
