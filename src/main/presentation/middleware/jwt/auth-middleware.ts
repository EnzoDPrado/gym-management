import { Response, NextFunction } from "express";
import { Middleware } from "../middleware";
import { verifyToken } from "../../../../util/jwt";
import { JwtPayload } from "jsonwebtoken";

export class AuthMiddleware implements Middleware{
  async handler(req: Middleware.AdaptedRequest, res: Response, next: NextFunction): Middleware.Result {
    const token = req.header("Authorization")?.replace("Bearer ", "");
  
    if (!token) {
      res.status(401).json({ error: "Token não fornecido" });
    }
  
    const decoded = verifyToken(token!);
    if (!decoded || typeof decoded === "string") {
      res.status(403).json({ error: "Token inválido ou expirado" });
    }
  
    req.user = decoded as JwtPayload;
    next();
  }
}