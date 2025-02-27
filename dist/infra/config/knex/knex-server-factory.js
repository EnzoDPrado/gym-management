"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexServerFactory = void 0;
const knex_server_1 = require("./knex-server");
const knexServerFactory = () => knex_server_1.KnexServer.getServer();
exports.knexServerFactory = knexServerFactory;
