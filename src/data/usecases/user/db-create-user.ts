import { CreateUser } from '../../../domain/usecases';
import { CreateUserRepository } from '../../protocols';

export class DbCreateUser implements CreateUser {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async create(params: CreateUser.Params): CreateUser.Result {
    const clientId = await this.createUserRepository.create(params);

    return clientId;
  }
}
