import express from 'express';
import cors from 'cors';
import allRoutes from './routes';
import { ENV } from '../../../util/environment';

const { SERVER } = ENV;

export class ExpressServer {
  private static server: express.Application | null = null;

  private constructor() {}

  public static getServer(): express.Application {
    if (!ExpressServer.server) {
      const app = express();
      app.use(cors());
      app.use(express.json());
      app.use(SERVER.BASE_URL, allRoutes);
      ExpressServer.server = app;

      console.log('--- express server initialized ---');
    }

    return ExpressServer.server;
  }
}
