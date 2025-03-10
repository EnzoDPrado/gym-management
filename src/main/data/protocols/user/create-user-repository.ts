export interface CreateUserRepository {
  create(params: CreateUserRepository.Params): CreateUserRepository.Result;
}

export namespace CreateUserRepository {
  export type Params = { name: string; age: number; planId: number, email: string, password:string; };

  export type Result = Promise<{ user_id: number }>;
}
