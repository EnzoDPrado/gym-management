"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressServerFactory = void 0;
const express_server_1 = require("./express.server");
const expressServerFactory = () => express_server_1.ExpressServer.getServer();
exports.expressServerFactory = expressServerFactory;
