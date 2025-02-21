import { Router } from 'express';
import { makeUserController } from '../../factories/controller';

const router = Router();
const userController = makeUserController();

router.post('', (req, res) => userController.create(req, res));

router.get('/all', (req, res) => userController.getAll(req, res));

export default router;
