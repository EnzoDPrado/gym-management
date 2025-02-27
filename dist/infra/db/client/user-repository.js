"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const repository_1 = require("../repository");
class UserRepository extends repository_1.Repository {
    async getByMail({ email }) {
        const record = await this.knex('client.tb_user').select('*').where('email', email);
        return record[0];
    }
    async deleteById({ userId, }) {
        await this.knex('client.tb_user').delete().where('user_id', userId);
    }
    async getAll() {
        const record = await this.knex('client.tb_user').select('*');
        return record;
    }
    async create({ age, planId, name, email, password }) {
        const record = await this.knex('client.tb_user')
            .insert({ age, name, plan_id: planId, email, password })
            .returning('user_id');
        return record[0];
    }
}
exports.UserRepository = UserRepository;
