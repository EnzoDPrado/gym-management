"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const zod_1 = require("zod");
const validationMiddleware = (schema) => (request, response, next) => {
    try {
        schema.parse(request.body);
        return next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            response.status(400).json({ error: error.errors });
        }
        response.status(500).json({ error: "Internal server error!" });
    }
};
exports.validationMiddleware = validationMiddleware;
