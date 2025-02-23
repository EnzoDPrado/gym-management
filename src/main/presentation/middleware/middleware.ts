import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface Middleware {
  handler(req: Middleware.AdaptedRequest, res: Response, next: NextFunction): Middleware.Result;
}

export namespace Middleware {
  export interface AdaptedRequest extends Request {
    user?: JwtPayload; 
  }

  export type Result = Promise<void>;
}
