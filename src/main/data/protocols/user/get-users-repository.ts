import { UserModel } from "../../../domain/models";

export interface GetUsersRepository {
  getAll(): GetUsersRepository.Result;
}

export namespace GetUsersRepository {

  export type Result = Promise<UserModel[]>;
}
