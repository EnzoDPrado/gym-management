import { GetUsers } from '../../../domain/usecases';
import { GetUsersRepository } from '../../protocols/user/get-users-repository';

export class DbGetUsers implements GetUsers {
  constructor(private readonly getUsersRepository: GetUsersRepository) {}

  async get(): GetUsers.Result {
    const users = await this.getUsersRepository.getAll();

    return users;
  }
}
