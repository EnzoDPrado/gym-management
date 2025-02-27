"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_server_factory_1 = require("./infra/config/express/express-server-factory");
const environment_1 = require("./util/environment");
const { SERVER } = environment_1.ENV;
const PORT = SERVER.PORT;
const app = (0, express_server_factory_1.expressServerFactory)();
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
