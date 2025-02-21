import { Request, Response } from 'express';

export interface Controller {
  handler(params: Controller.params): Controller.result;
}

export namespace Controller {
  export type params = { req: Request; res: Response };

  export type result = Promise<void>;
}
