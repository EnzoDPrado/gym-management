import { Request, Response } from 'express';
import { CreateUser } from '../../../domain/usecases';
import { Controller } from '../controller';

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser) {}

  async handler(request: Request, response: Response): Controller.result {
    try {
      const { name, age, plan_id, email, password } = request.body;

      const {user_id} = await this.createUser.create({
        name,
        age,
        email,
        password,
        planId: plan_id,
      });

      response.status(201).json({ user_id });
    } catch (error) {
      response.status(500).json(error);
    }
  }
}
