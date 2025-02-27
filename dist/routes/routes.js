"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user-routes"));
const documentation_routes_1 = __importDefault(require("./documentation-routes"));
const auth_routes_1 = __importDefault(require("./auth-routes"));
const router = (0, express_1.Router)();
router.use('/user', user_routes_1.default);
router.use('/documentation', documentation_routes_1.default);
router.use('/authentication', auth_routes_1.default);
exports.default = router;
