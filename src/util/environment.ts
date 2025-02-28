import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  DATABASE: {
    HOST: process.env.DB_HOST || '',
    USER: process.env.DB_USER || '',
    PORT: Number(process.env.DB_PORT) || 0,
    DATABASE: process.env.DB_DATABASE || '',
    PASSWORD: process.env.DB_PASSWORD || '',
  },

  SERVER: {
    PORT: process.env.PORT || 3001,
    BASE_URL: process.env.BASE_URL || '',
  },

  JWT: {
    SECRET: process.env.JWT_SECRET || '',
  },

  OBSERVABILITY: {
    APM_URL: process.env.ELASTIC_APM_URL || '',
    APM_TOKEN: process.env.ELASTIC_APM_SECRET_TOKEN || '',
    APM_ENVIRONMENT: process.env.ELASTIC_APM_ENVIRONMENT || '',
  },
};
