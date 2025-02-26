import { generateToken } from "../../../../util/jwt";
import { Login } from "../../../domain/usecases/login/login";
import { GetUserByMail } from "../../../domain/usecases/user/get-user-by-mail-and-password";
import bcrypt from 'bcryptjs';

export class DbLogin implements Login{
  constructor(
    private readonly getUserByMail: GetUserByMail
  ){}
  async auth(params: Login.Params): Login.Result {
    const user = await this.getUserByMail.get({email: params.email});

    if(!user) throw new Error(Login.Exceptions.USER_NOT_FOUND);

    const criptographyPassword = await bcrypt.compare(params.password, user.password);

    if(!criptographyPassword) throw new Error(Login.Exceptions.USER_NOT_FOUND);
    
    const token = generateToken({user});

    return token;
  }
}