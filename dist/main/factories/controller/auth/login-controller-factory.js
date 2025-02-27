"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginControllerFactory = void 0;
const client_1 = require("../../../../infra/db/client");
const db_login_1 = require("../../../data/usecases/login/db-login");
const db_get_user_by_mail_1 = require("../../../data/usecases/user/db-get-user-by-mail");
const login_controller_1 = require("../../../presentation/controller/auth/login-controller");
const loginControllerFactory = () => {
    const userRepository = new client_1.UserRepository();
    const dbGetUserByMailAndPassword = new db_get_user_by_mail_1.DbGetUserByMail(userRepository);
    const dbLogin = new db_login_1.DbLogin(dbGetUserByMailAndPassword);
    return new login_controller_1.LoginController(dbLogin);
};
exports.loginControllerFactory = loginControllerFactory;
