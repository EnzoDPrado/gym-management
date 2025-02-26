import { CreateUser } from '../../../domain/usecases';
import { Controller } from '../controller';

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser) {}

  async handler({ req, res }: Controller.params): Controller.result {
    try {
      const { name, age, plan_id, email, password } = req.body;

      const {user_id} = await this.createUser.create({
        name,
        age,
        email,
        password,
        planId: plan_id,
      });

      res.status(201).json({ user_id });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
