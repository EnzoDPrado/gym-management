import { Knex } from 'knex';
import { CreateUserRepository } from '../../../../../data/protocols';
import { GetUsersRepository } from '../../../../../data/protocols/user/get-users-repository';
import db from '../../../knex/database-instance';

export class UserRepository implements CreateUserRepository, GetUsersRepository {
  private db: Knex;

  constructor() {
    this.db = db; 
  }

  getAll(): GetUsersRepository.Result {
    return this.db("client.tb_user").select("*");    
  }
  async create(
    _params: CreateUserRepository.Params
  ): CreateUserRepository.Result {
    console.log('user created');

    return { userId: 1 };
  }
}
