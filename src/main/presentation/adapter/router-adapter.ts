import { Request, Response } from "express";
import { Controller } from "../controller/controller";

export const routerAdapter = (controller: Controller) => async (request:Request, response:Response) => {
  const http = await controller.handler(request.body);
  
  response.status(http.statusCode).json(http.body)
}