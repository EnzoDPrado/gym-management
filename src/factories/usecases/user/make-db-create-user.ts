import { DbCreateUser } from "../../../data/usecases/user/db-create-user";
import { UserRepository } from "../../../infra/db/sql/gym"

export const makeDbCreateUser = () => {
  const userRepository = new UserRepository();


  return new DbCreateUser(userRepository)
}