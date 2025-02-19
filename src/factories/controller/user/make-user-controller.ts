import { UserController } from "../../../infra/controller"
import { UserRepository } from "../../../infra/db/sql/gym"
import { makeDbCreateUser } from "../../usecases/user/make-db-create-user"

export const makeUserController = () => {
  return new UserController(makeDbCreateUser(), new UserRepository())
}