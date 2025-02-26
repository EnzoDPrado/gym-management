import { GetUserByMail } from "../../../domain/usecases/user/get-user-by-mail-and-password";
import { GetUserByMailRepository } from "../../protocols";

export class DbGetUserByMail implements GetUserByMail{
  constructor(
    private readonly getUserByMailRepository: GetUserByMailRepository
  ){}
  async get(params: GetUserByMail.Params): GetUserByMail.Result {
    const user = await this.getUserByMailRepository.getByMail({email: params.email});

    return user
  }
}