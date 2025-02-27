"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number().min(18, 'The user should have at least 18 years old').max(150, 'Insert an valid age'),
    plan_id: zod_1.z.number(),
    email: zod_1.z.string(),
    password: zod_1.z.string()
});
