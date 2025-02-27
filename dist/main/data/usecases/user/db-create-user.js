"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCreateUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class DbCreateUser {
    constructor(createUserRepository) {
        this.createUserRepository = createUserRepository;
    }
    async create(params) {
        const cryptographyPassword = await bcryptjs_1.default.hash(params.password, 10);
        const paramsToCreateUser = {
            name: params.name,
            age: params.age,
            planId: params.planId,
            email: params.email,
            password: cryptographyPassword
        };
        const clientId = await this.createUserRepository.create(paramsToCreateUser);
        return clientId;
    }
}
exports.DbCreateUser = DbCreateUser;
