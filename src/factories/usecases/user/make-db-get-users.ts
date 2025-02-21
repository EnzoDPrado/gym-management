import { DbGetUsers } from '../../../data/usecases/user/db-get-users';
import { UserRepository } from '../../../infra/db/client';

export const makeDbGetUsers = () => {
  const userRepository = new UserRepository();

  return new DbGetUsers(userRepository);
};
