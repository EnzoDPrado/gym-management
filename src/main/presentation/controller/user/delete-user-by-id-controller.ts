import { DeleteUserById } from '../../../domain/usecases';
import { Controller } from '../controller';

export class DeleteUserByIdController implements Controller {
  constructor(private readonly deleteUserById: DeleteUserById) {}

  async handler({ req, res }: Controller.params): Controller.result {
    try {
      const userId = req.body.user_id;

      await this.deleteUserById.delete({ userId });

      res.status(200).json({ status: 'Usuário deletado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
