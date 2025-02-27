"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteUserById = void 0;
class DbDeleteUserById {
    constructor(deleteUserByIdRepository) {
        this.deleteUserByIdRepository = deleteUserByIdRepository;
    }
    async delete(params) {
        await this.deleteUserByIdRepository.deleteById(params);
    }
}
exports.DbDeleteUserById = DbDeleteUserById;
