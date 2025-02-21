export interface CreateUserRepository {
  create(params: CreateUserRepository.Params): CreateUserRepository.Result;
}

export namespace CreateUserRepository {
  export type Params = { name: string; age: number; planId: number };

  export type Result = Promise<{ userId: number }>;
}
