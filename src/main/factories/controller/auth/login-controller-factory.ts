import { UserRepository } from "../../../../infra/db/client"
import { DbLogin } from "../../../data/usecases/login/db-login";
import { DbGetUserByMailAndPassword } from "../../../data/usecases/user/db-get-user-by-mail-and-password";
import { LoginController } from "../../../presentation/controller/auth/login-controller";

export const loginControllerFactory = () => {
  const userRepository = new UserRepository();

  const dbGetUserByMailAndPassword = new DbGetUserByMailAndPassword(userRepository);

  const dbLogin = new DbLogin(dbGetUserByMailAndPassword);

  return new LoginController(dbLogin);
}