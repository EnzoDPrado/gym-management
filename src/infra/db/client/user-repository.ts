import {
  CreateUserRepository,
  DeleteUserByIdRepository,
  GetUserByMailRepository,
  GetUsersRepository,
} from '../../../main/data/protocols';
import { Repository } from '../repository';

export class UserRepository
  extends Repository
  implements 
  CreateUserRepository,
  GetUsersRepository,
  DeleteUserByIdRepository,
  GetUserByMailRepository
{
  async getByMail({email}: GetUserByMailRepository.Params): GetUserByMailRepository.Result {
    const record = await this.knex('client.tb_user').select('*').where('email', email)

    return record[0];
  }
  async deleteById({
    userId,
  }: DeleteUserByIdRepository.Params): DeleteUserByIdRepository.Result {
    await this.knex('client.tb_user').delete().where('user_id', userId);
  }

  async getAll(): GetUsersRepository.Result {
    const record = await this.knex('client.tb_user').select('*');

    return record;
  }

  async create({
    age,
    planId,
    name,
    email,
    password
  }: CreateUserRepository.Params): CreateUserRepository.Result {
    const record = await this.knex('client.tb_user')
      .insert({ age, name, plan_id: planId, email, password })
      .returning('user_id')

    return record[0];
  }
}
