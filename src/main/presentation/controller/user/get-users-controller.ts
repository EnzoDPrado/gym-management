import { GetUsers } from '../../../domain/usecases';
import { Controller } from '../controller';
import { HttpRequest, HttpResponse } from '../../../domain/models';
import { caught, serverError } from '../../../../util/http-response';

export class GetUsersController implements Controller {
  constructor(private readonly getUsers: GetUsers) {}
  async handler(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const users = await this.getUsers.get();

      return caught({ users });
    } catch (error) {
      return serverError(error);
    }
  }
}
