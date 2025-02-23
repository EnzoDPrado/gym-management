import { generateToken } from "../../../../util/jwt";
import { Login } from "../../../domain/usecases/login/login";
import { GetUserByMailAndPassword } from "../../../domain/usecases/user/get-user-by-mail-and-password";

export class DbLogin implements Login{
  constructor(
    private readonly getUserByMailAndPassword: GetUserByMailAndPassword
  ){}
  async auth(params: Login.Params): Login.Result {
    const user = await this.getUserByMailAndPassword.get(params)

    if(!user) throw new Error(Login.Exceptions.USER_NOT_FOUND)
    
    const token = generateToken({user})

    return token;
  }
}