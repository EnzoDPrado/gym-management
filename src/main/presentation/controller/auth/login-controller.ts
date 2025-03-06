import { Login } from "../../../domain/usecases/login/login";
import { Controller } from "../controller";
import { HttpRequest, HttpResponse } from "../../../domain/models";
import { badRequest, created } from "../../../../util/http-response";

export class LoginController implements Controller{
  constructor(
    private readonly login: Login
  ){}
  async handler(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const email = httpRequest.body.email;
      const password = httpRequest.body.password;

      const token = await this.login.auth({email, password})

      return created({token})
    } catch (error) {
      return badRequest({message: "Fail on authentication"})
    }
  }
}