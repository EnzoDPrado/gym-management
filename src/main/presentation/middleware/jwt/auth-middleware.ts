import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../../../../util/jwt";

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ error: "Token não fornecido" });
    return
  }

  const decoded = verifyToken(token!);
  if (!decoded || typeof decoded === "string") {
   res.status(403).json({ error: "Token inválido ou expirado" });
   return
  }
  next();
}
