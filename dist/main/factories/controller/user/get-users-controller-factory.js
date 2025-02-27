"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersControllerFactory = void 0;
const get_users_controller_1 = require("../../../presentation/controller/user/get-users-controller");
const db_get_users_1 = require("../../../data/usecases/user/db-get-users");
const client_1 = require("../../../../infra/db/client");
const getUsersControllerFactory = () => {
    const userRepository = new client_1.UserRepository();
    const dbCreateUser = new db_get_users_1.DbGetUsers(userRepository);
    return new get_users_controller_1.GetUsersController(dbCreateUser);
};
exports.getUsersControllerFactory = getUsersControllerFactory;
