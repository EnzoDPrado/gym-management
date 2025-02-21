import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { CreateUser, GetUsers } from '../../domain/usecases';

export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly getUsers: GetUsers
  ) {}

  async create(req: Request, res: Response) {
    try {
      const { name, age, plan_id } = req.body;

      const userId = await this.createUser.create({
        name,
        age,
        planId: plan_id,
      });

      res.status(201).json({ userId });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(_req: Request, res: Response) {
    try {
      const users = await this.getUsers.get();

      res.status(201).json({ users });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
