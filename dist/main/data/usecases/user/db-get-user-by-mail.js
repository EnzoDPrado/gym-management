"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbGetUserByMail = void 0;
class DbGetUserByMail {
    constructor(getUserByMailRepository) {
        this.getUserByMailRepository = getUserByMailRepository;
    }
    async get(params) {
        const user = await this.getUserByMailRepository.getByMail({ email: params.email });
        return user;
    }
}
exports.DbGetUserByMail = DbGetUserByMail;
