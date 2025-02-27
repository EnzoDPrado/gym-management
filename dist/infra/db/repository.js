"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const knex_server_factory_1 = require("../config/knex/knex-server-factory");
class Repository {
    constructor() {
        this.knex = (0, knex_server_factory_1.knexServerFactory)();
    }
}
exports.Repository = Repository;
