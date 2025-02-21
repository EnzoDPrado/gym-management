import { Knex } from 'knex';
import { ENV } from '../../util/environment';

const { DATABASE } = ENV;

export const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    database: DATABASE.DATABASE,
    host: DATABASE.HOST,
    port: DATABASE.PORT,
    user: DATABASE.USER,
    password: DATABASE.PASSWORD,
    ssl: { rejectUnauthorized: false },
  },
};
