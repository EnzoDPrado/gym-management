export interface DeleteUserByIdRepository {
  deleteById(params: DeleteUserByIdRepository.Params): DeleteUserByIdRepository.Result;
}

export namespace DeleteUserByIdRepository {
  export type Params = { userId: number };

  export type Result = Promise<void>;
}
