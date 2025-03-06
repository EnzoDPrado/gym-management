import { createLogger, format, transports } from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch'; 
import { Client } from '@elastic/elasticsearch';
import { ENV } from './environment';

const { OBSERVABILITY } = ENV

const esClient = new Client({ 
  node: OBSERVABILITY.ELASTIC_HOST, 
  auth: { username: OBSERVABILITY.ELASTIC_USER, password: OBSERVABILITY.ELASTIC_PASSWORD } 
});

const esTransport = new ElasticsearchTransport({
  level: 'info',
  client: esClient
});

export const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.Console(),
    esTransport
  ],
});
