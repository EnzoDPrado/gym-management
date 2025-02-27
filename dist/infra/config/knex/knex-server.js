"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexServer = void 0;
const knex_1 = __importDefault(require("knex"));
const kenx_config_1 = require("./kenx-config");
class KnexServer {
    constructor() { }
    static getServer() {
        if (!KnexServer.server) {
            const server = (0, knex_1.default)(kenx_config_1.knexConfig);
            KnexServer.server = server;
            console.log('--- knex instance initialized ---');
        }
        return KnexServer.server;
    }
}
exports.KnexServer = KnexServer;
KnexServer.server = null;
