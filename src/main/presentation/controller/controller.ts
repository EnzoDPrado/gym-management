import { Request, Response } from 'express';

export interface Controller {
  handler(request:Request, response: Response): Controller.result;
}

export namespace Controller {
  export type result = Promise<void>;
}
