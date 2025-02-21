import {
  CreateUserRepository,
  DeleteUserByIdRepository,
  GetUsersRepository,
} from '../../../main/data/protocols';
import { Repository } from '../repository';

export class UserRepository
  extends Repository
  implements CreateUserRepository, GetUsersRepository, DeleteUserByIdRepository
{
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
  }: CreateUserRepository.Params): CreateUserRepository.Result {
    const record = (await this.knex('client.tb_user')
      .insert({ age, name, plan_id: planId })
      .returning('user_id')) as any;

    return record;
  }
}
