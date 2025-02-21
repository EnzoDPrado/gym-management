import knex, { Knex } from 'knex';
import { knexConfig } from './kenx-config';

export class KnexServer {
  private static server: Knex | null = null;

  private constructor() {}

  public static getServer(): Knex {
    if (!KnexServer.server) {
      const server = knex(knexConfig);
      KnexServer.server = server;

      console.log('--- knex instance initialized ---');
    }

    return KnexServer.server;
  }
}
