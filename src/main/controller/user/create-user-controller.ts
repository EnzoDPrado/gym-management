import { CreateUser } from '../../domain/usecases';
import { Controller } from '../controller';

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser) {}

  async handler({ req, res }: Controller.params): Controller.result {
    try {
      const { name, age, plan_id } = req.body;

      const userId = await this.createUser.create({
        name,
        age,
        planId: plan_id,
      });

      res.status(201).json({ userId });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
