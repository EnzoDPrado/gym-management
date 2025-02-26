import { UserModel } from "../../../domain/models";

export interface Login {
  auth(params: Login.Params): Login.Result;
}

export namespace Login {
  export type Params = { email: string, password: string };

  export type Result = Promise<string>;

  export enum Exceptions{
    USER_NOT_FOUND = "Password or mail is invalid"

  }
}
