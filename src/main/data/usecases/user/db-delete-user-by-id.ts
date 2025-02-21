import { DeleteUserById } from '../../../domain/usecases';
import { DeleteUserByIdRepository } from '../../protocols';

export class DbDeleteUserById implements DeleteUserById {
  constructor(
    private readonly deleteUserByIdRepository: DeleteUserByIdRepository
  ) {}

  async delete(params: DeleteUserById.Params): DeleteUserById.Result {
    await this.deleteUserByIdRepository.deleteById(params);
  }
}
