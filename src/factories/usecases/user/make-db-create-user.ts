import { DbCreateUser } from '../../../data/usecases/user/db-create-user';
import { UserRepository } from '../../../infra/db/client';

export const makeDbCreateUser = () => {
  const userRepository = new UserRepository();

  return new DbCreateUser(userRepository);
};
