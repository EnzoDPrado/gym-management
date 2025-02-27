"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbGetUsers = void 0;
class DbGetUsers {
    constructor(getUsersRepository) {
        this.getUsersRepository = getUsersRepository;
    }
    async get() {
        const users = await this.getUsersRepository.getAll();
        return users;
    }
}
exports.DbGetUsers = DbGetUsers;
