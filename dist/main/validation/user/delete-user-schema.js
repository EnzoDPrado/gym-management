"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSchema = void 0;
const zod_1 = require("zod");
exports.deleteUserSchema = zod_1.z.object({
    user_id: zod_1.z.number()
});
