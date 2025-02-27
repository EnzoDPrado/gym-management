"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLogin = void 0;
const jwt_1 = require("../../../../util/jwt");
const login_1 = require("../../../domain/usecases/login/login");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class DbLogin {
    constructor(getUserByMail) {
        this.getUserByMail = getUserByMail;
    }
    async auth(params) {
        const user = await this.getUserByMail.get({ email: params.email });
        if (!user)
            throw new Error(login_1.Login.Exceptions.USER_NOT_FOUND);
        const criptographyPassword = await bcryptjs_1.default.compare(params.password, user.password);
        if (!criptographyPassword)
            throw new Error(login_1.Login.Exceptions.USER_NOT_FOUND);
        const token = (0, jwt_1.generateToken)({ user });
        return token;
    }
}
exports.DbLogin = DbLogin;
