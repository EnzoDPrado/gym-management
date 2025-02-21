import { UserRepository } from '../../../../infra/db/client';
import { DeleteUserByIdController } from '../../../controller/user/delete-user-by-id-controller';
import { DbDeleteUserById } from '../../../data/usecases';

export const deleteUserByIdControllerFactory = () => {
  const userRepository = new UserRepository();

  const dbDeleteUserById = new DbDeleteUserById(userRepository);

  return new DeleteUserByIdController(dbDeleteUserById);
};
