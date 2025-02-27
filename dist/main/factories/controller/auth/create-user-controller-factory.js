"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserControllerFactory = void 0;
const create_user_controller_1 = require("../../../presentation/controller/auth/create-user-controller");
const db_create_user_1 = require("../../../data/usecases/user/db-create-user");
const client_1 = require("../../../../infra/db/client");
const createUserControllerFactory = () => {
    const userRepository = new client_1.UserRepository();
    const dbCreateUser = new db_create_user_1.DbCreateUser(userRepository);
    return new create_user_controller_1.CreateUserController(dbCreateUser);
};
exports.createUserControllerFactory = createUserControllerFactory;
