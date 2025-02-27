"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggger_json_1 = __importDefault(require("../infra/config/swagger/swaggger.json"));
const router = (0, express_1.Router)();
router.use('/get', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggger_json_1.default));
exports.default = router;
