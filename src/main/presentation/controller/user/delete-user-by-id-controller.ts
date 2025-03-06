import { Request, Response } from 'express';
import { DeleteUserById } from '../../../domain/usecases';
import { Controller } from '../controller';
import { HttpRequest, HttpResponse } from '../../../domain/models';
import { created, serverError } from '../../../../util/http-response';

export class DeleteUserByIdController implements Controller {
  constructor(private readonly deleteUserById: DeleteUserById) {}
  async handler(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userId = httpRequest.body.user_id;

      await this.deleteUserById.delete({ userId });

      return created({ status: 'Usuário deletado com sucesso!' });
    } catch (error) {
      return serverError({ error });
    }
  }
}
