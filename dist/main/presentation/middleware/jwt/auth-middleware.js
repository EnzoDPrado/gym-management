"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jwt_1 = require("../../../../util/jwt");
function authMiddleware(req, res, next) {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        res.status(401).json({ error: "Token não fornecido" });
        return;
    }
    const decoded = (0, jwt_1.verifyToken)(token);
    if (!decoded || typeof decoded === "string") {
        res.status(403).json({ error: "Token inválido ou expirado" });
        return;
    }
    next();
}
