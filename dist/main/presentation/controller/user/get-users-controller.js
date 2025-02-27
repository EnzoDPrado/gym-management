"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersController = void 0;
class GetUsersController {
    constructor(getUsers) {
        this.getUsers = getUsers;
    }
    async handler(_request, response) {
        try {
            const users = await this.getUsers.get();
            response.status(200).json({ users });
        }
        catch (error) {
            response.status(500).json(error);
        }
    }
}
exports.GetUsersController = GetUsersController;
