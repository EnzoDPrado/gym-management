import { GetUsersController } from '../../../presentation/controller/user/get-users-controller';
import { DbGetUsers } from '../../../data/usecases/user/db-get-users';
import { UserRepository } from '../../../../infra/db/client';

export const getUsersControllerFactory = () => {
  const userRepository = new UserRepository();

  const dbCreateUser = new DbGetUsers(userRepository);

  return new GetUsersController(dbCreateUser);
};
