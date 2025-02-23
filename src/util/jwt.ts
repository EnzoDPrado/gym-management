import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "seu_segredo_super_secreto";

export function generateToken(payload: object): string {
  return jwt.sign(payload, SECRET_KEY);
}

export function verifyToken(token: string):  JwtPayload | string | null {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}
