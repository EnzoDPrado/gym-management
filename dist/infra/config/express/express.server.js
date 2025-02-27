"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../../../routes/routes"));
const environment_1 = require("../../../util/environment");
const { SERVER } = environment_1.ENV;
class ExpressServer {
    constructor() { }
    static getServer() {
        if (!ExpressServer.server) {
            const app = (0, express_1.default)();
            app.use((0, cors_1.default)());
            app.use(express_1.default.json());
            app.use(SERVER.BASE_URL, routes_1.default);
            ExpressServer.server = app;
            console.log('--- express server initialized ---');
        }
        return ExpressServer.server;
    }
}
exports.ExpressServer = ExpressServer;
ExpressServer.server = null;
