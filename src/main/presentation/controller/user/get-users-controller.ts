import { Request, Response } from 'express';
import { GetUsers } from '../../../domain/usecases';
import { Controller } from '../controller';

export class GetUsersController implements Controller {
  constructor(private readonly getUsers: GetUsers) {}

  async handler(_request: Request, response: Response): Controller.result {
    try {
      const users = await this.getUsers.get();

      response.status(200).json({ users });
    } catch (error) {
      response.status(500).json(error);
    }
  }
}
