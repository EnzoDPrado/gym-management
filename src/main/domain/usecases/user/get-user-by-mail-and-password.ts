import { UserModel } from "../../models";

export interface GetUserByMail {
  get(params: GetUserByMail.Params): GetUserByMail.Result;
}

export namespace GetUserByMail {
  export type Params = { email: string };

  export type Result = Promise<UserModel | null>;
}
