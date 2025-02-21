import { UserModel } from '../../models';

export interface GetUsers {
  get(): GetUsers.Result;
}

export namespace GetUsers {
  export type Result = Promise<UserModel[]>;
}
