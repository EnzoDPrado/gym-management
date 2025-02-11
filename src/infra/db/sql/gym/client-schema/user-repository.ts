import { CreateUserRepository } from '../../../../../data/protocols';

export class UserRepository implements CreateUserRepository {
  async create(
    _params: CreateUserRepository.Params
  ): CreateUserRepository.Result {
    console.log('user created');

    return { userId: 1 };
  }
}
