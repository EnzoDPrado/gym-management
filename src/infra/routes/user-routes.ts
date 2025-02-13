import { Router } from 'express';
import { UserRepository } from '../db/sql/gym';
import { UserController } from '../controller';

const router = Router();
const userRepository = new UserRepository();
const userController = new UserController(userRepository);

router.post('/user', (req, res) => userController.create(req, res));

router.get('/user/admin', (req, res) => userController.getUserAdmin(req, res));


export default router;
