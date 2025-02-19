import { Request, Response } from 'express';
import { CreateUser } from '../../../domain/usecases';
import dotenv from 'dotenv';
import { GetUsersRepository } from '../../../data/protocols/user/get-users-repository';

export class UserController {
  constructor(private readonly createUser: CreateUser,
    private readonly getUsersRepository: GetUsersRepository
  ) {}

  async create(req: Request, res: Response) {
    const { name, age, planId } = req.body;

    const userId = await this.createUser.create({ name, age, planId });

    res.status(201).json({ userId });
  }

  async getAll(req: Request, res: Response){

    const users = await this.getUsersRepository.getAll();

    res.status(201).json({ users });
  }

  async getUserAdmin(_req: Request, res: Response) {
    
    dotenv.config();
    const lastName = process.env.ADMIN_LAST_NAME 
    const name = process.env.ADMIN_NAME 

    const adminName = `${name} ${lastName}`

    res.status(201).json({ adminName });
  }
}
