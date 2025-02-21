import { GetUsers } from '../../domain/usecases';
import { Controller } from '../controller';

export class GetUsersController implements Controller {
  constructor(private readonly getUsers: GetUsers) {}

  async handler({ req, res }: Controller.params): Controller.result {
    try {
      const users = await this.getUsers.get();

      res.status(201).json({ users });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
