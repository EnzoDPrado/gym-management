export interface DeleteUserById {
  delete(params: DeleteUserById.Params): DeleteUserById.Result;
}

export namespace DeleteUserById {
  export type Params = { userId: number };

  export type Result = Promise<void>;
}
