"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ENV = {
    DATABASE: {
        HOST: process.env.DB_HOST || '',
        USER: process.env.DB_USER || '',
        PORT: Number(process.env.DB_PORT) || 0,
        DATABASE: process.env.DB_DATABASE || '',
        PASSWORD: process.env.DB_PASSWORD || '',
    },
    SERVER: {
        PORT: process.env.PORT || 3001,
        BASE_URL: process.env.BASE_URL || '',
    },
    JWT: {
        SECRET: process.env.JWT_SECRET || ''
    }
};
