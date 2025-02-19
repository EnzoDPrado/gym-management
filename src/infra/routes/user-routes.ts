import { Router } from 'express';
import { UserRepository } from '../db/sql/gym';
import { UserController } from '../controller';
import { makeUserController } from '../../factories/controller';

const router = Router();
const userController = makeUserController()

router.post('/user', (req, res) => userController.create(req, res));

router.get('/users', (req, res) => userController.getAll(req, res));

router.get('/user/admin', (req, res) => userController.getUserAdmin(req, res));


export default router;
