export interface CreateUser {
  create(params: CreateUser.Params): CreateUser.Result;
}

export namespace CreateUser {
  export type Params = { name: string; age: number; planId: number, email: string, password:string; };

  export type Result = Promise<{ user_id: number }>;
}
