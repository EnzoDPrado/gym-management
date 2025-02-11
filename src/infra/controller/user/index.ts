import { Request, Response } from 'express';
import { CreateUser } from '../../../domain/usecases';

export class UserController {
  constructor(private readonly createUser: CreateUser) {}

  async create(req: Request, res: Response) {
    const { name, age, planId } = req.body;

    const userId = await this.createUser.create({ name, age, planId });

    res.status(201).json({ userId });
  }
}
