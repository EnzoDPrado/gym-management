import { UserModel } from "../../../domain/models";

export interface GetUserByMailAndPasswordRepository {
  getByMailAndPassword(params: GetUserByMailAndPasswordRepository.Params): GetUserByMailAndPasswordRepository.Result;
}

export namespace GetUserByMailAndPasswordRepository {
  export type Params = { mail: string, password: string };

  export type Result = Promise<UserModel>;
}
