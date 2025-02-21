import { Knex } from 'knex';
import { knexServerFactory } from '../config/knex/knex-server-factory';

export class Repository {
  protected readonly knex: Knex = knexServerFactory();

  constructor() {}
}
