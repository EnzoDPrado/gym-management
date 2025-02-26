import { CreateUser } from '../../../domain/usecases';
import { CreateUserRepository } from '../../protocols';
import bcrypt from 'bcryptjs';


export class DbCreateUser implements CreateUser {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async create(params: CreateUser.Params): CreateUser.Result {
    const cryptographyPassword = await bcrypt.hash(params.password, 10);

    const paramsToCreateUser = {
      name: params.name,
      age: params.age,
      planId: params.planId,
      email: params.email,
      password: cryptographyPassword
    }

    const clientId = await this.createUserRepository.create(paramsToCreateUser);

    return clientId;
  }
}
