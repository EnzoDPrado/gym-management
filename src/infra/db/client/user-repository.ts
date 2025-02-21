import { Knex } from 'knex';
import { CreateUserRepository } from '../../../data/protocols';
import { GetUsersRepository } from '../../../data/protocols/user/get-users-repository';
import { Repository } from '../repository';

export class UserRepository
  extends Repository
  implements CreateUserRepository, GetUsersRepository
{
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
