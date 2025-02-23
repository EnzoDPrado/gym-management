import { UserModel } from "../../models";

export interface GetUserByMailAndPassword {
  get(params: GetUserByMailAndPassword.Params): GetUserByMailAndPassword.Result;
}

export namespace GetUserByMailAndPassword {
  export type Params = { mail: string, password: string };

  export type Result = Promise<UserModel | null>;
}
