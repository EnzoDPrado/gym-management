import { KnexServer } from './knex-server';

export const knexServerFactory = () => KnexServer.getServer();
