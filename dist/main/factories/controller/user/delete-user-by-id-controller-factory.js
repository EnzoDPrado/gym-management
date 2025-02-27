"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserByIdControllerFactory = void 0;
const client_1 = require("../../../../infra/db/client");
const delete_user_by_id_controller_1 = require("../../../presentation/controller/user/delete-user-by-id-controller");
const usecases_1 = require("../../../data/usecases");
const deleteUserByIdControllerFactory = () => {
    const userRepository = new client_1.UserRepository();
    const dbDeleteUserById = new usecases_1.DbDeleteUserById(userRepository);
    return new delete_user_by_id_controller_1.DeleteUserByIdController(dbDeleteUserById);
};
exports.deleteUserByIdControllerFactory = deleteUserByIdControllerFactory;
