"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUser) {
        this.createUser = createUser;
    }
    async handler(request, response) {
        try {
            const { name, age, plan_id, email, password } = request.body;
            const { user_id } = await this.createUser.create({
                name,
                age,
                email,
                password,
                planId: plan_id,
            });
            response.status(201).json({ user_id });
        }
        catch (error) {
            response.status(500).json(error);
        }
    }
}
exports.CreateUserController = CreateUserController;
