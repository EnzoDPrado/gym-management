import { UserController } from '../../../controller';
import { makeDbGetUsers } from '../../usecases';
import { makeDbCreateUser } from '../../usecases/user/make-db-create-user';

export const makeUserController = () => {
  return new UserController(makeDbCreateUser(), makeDbGetUsers());
};
