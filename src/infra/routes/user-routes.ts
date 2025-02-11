import { Router } from 'express';
import { UserRepository } from '../db/sql/gym';
import { UserController } from '../controller';

const router = Router();
const userRepository = new UserRepository();
const userController = new UserController(userRepository);

router.post('/users', (req, res) => userController.create(req, res));

export default router;
