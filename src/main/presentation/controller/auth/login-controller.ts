import { Login } from "../../../domain/usecases/login/login";
import { Controller } from "../controller";

export class LoginController implements Controller{
  constructor(
    private readonly login: Login
  ){}
  async handler({ req, res }: Controller.params): Controller.result {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const token = await this.login.auth({email, password})

      res.status(200).json({token})

    } catch (error) {

      res.status(500).json({message: "Fail on authentication"})
    }
  }
}