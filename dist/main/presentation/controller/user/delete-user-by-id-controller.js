"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserByIdController = void 0;
class DeleteUserByIdController {
    constructor(deleteUserById) {
        this.deleteUserById = deleteUserById;
    }
    async handler(request, response) {
        try {
            const userId = request.body.user_id;
            await this.deleteUserById.delete({ userId });
            response.status(200).json({ status: 'Usuário deletado com sucesso!' });
        }
        catch (error) {
            response.status(500).json({ error });
        }
    }
}
exports.DeleteUserByIdController = DeleteUserByIdController;
