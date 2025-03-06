import { CreateUser } from '../../../domain/usecases';
import { Controller } from '../controller';
import { HttpRequest, HttpResponse } from '../../../domain/models';
import { created, serverError } from '../../../../util/http-response';

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser) {}
  async handler(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, age, plan_id, email, password } = httpRequest.body;

      const {user_id} = await this.createUser.create({
        name,
        age,
        email,
        password,
        planId: plan_id,
      });

      return created({ user_id })
    } catch (error) {
      return serverError(error);
    }
  }
}
