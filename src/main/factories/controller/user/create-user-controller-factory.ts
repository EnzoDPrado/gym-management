import { CreateUserController } from '../../../controller/user/create-user-controller';
import { DbCreateUser } from '../../../data/usecases/user/db-create-user';
import { UserRepository } from '../../../../infra/db/client';

export const createUserControllerFactory = () => {
  const userRepository = new UserRepository();

  const dbCreateUser = new DbCreateUser(userRepository);

  return new CreateUserController(dbCreateUser);
};
