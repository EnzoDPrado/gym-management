import { UserModel } from "../../../domain/models";

export interface GetUserByMailRepository {
  getByMail(params: GetUserByMailRepository.Params): GetUserByMailRepository.Result;
}

export namespace GetUserByMailRepository {
  export type Params = {email: string};

  export type Result = Promise<UserModel>;
}
