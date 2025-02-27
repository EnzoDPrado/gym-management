"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexConfig = void 0;
const environment_1 = require("../../../util/environment");
const { DATABASE } = environment_1.ENV;
exports.knexConfig = {
    client: 'pg',
    connection: {
        database: DATABASE.DATABASE,
        host: DATABASE.HOST,
        port: DATABASE.PORT,
        user: DATABASE.USER,
        password: DATABASE.PASSWORD,
        ssl: { rejectUnauthorized: false },
    },
};
