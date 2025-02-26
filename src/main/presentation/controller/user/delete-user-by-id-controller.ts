import { Request, Response } from 'express';
import { DeleteUserById } from '../../../domain/usecases';
import { Controller } from '../controller';

export class DeleteUserByIdController implements Controller {
  constructor(private readonly deleteUserById: DeleteUserById) {}

  async handler(request: Request, response: Response): Controller.result {
    try {
      const userId = request.body.user_id;

      await this.deleteUserById.delete({ userId });

      response.status(200).json({ status: 'Usuário deletado com sucesso!' });
    } catch (error) {
      response.status(500).json({ error });
    }
  }
}
