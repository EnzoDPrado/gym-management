import { GetUserByMailAndPassword } from "../../../domain/usecases/user/get-user-by-mail-and-password";
import { GetUserByMailAndPasswordRepository } from "../../protocols";

export class DbGetUserByMailAndPassword implements GetUserByMailAndPassword{
  constructor(
    private readonly getUserByMailAndPasswordRepository: GetUserByMailAndPasswordRepository
  ){}
  async get(params: GetUserByMailAndPassword.Params): GetUserByMailAndPassword.Result {
    const user = await this.getUserByMailAndPasswordRepository.getByMailAndPassword(params)

    return user
  }
}