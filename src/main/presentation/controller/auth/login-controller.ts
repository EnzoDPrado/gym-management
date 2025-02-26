import { Request, Response } from "express";
import { Login } from "../../../domain/usecases/login/login";
import { Controller } from "../controller";

export class LoginController implements Controller{
  constructor(
    private readonly login: Login
  ){}
  async handler(request: Request, response: Response): Controller.result {
    try {
      const email = request.body.email;
      const password = request.body.password;

      const token = await this.login.auth({email, password})

      response.status(200).json({token})

    } catch (error) {
      response.status(500).json({message: "Fail on authentication"})
    }
  }
}