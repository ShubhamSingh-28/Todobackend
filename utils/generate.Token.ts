import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export function signJwt(payload: object) {
  const secret = process.env.JWT_SECRET || "change_this_secret";
  const expiresIn = process.env.JWT_EXPIRES_IN || "7d";
  return jwt.sign(payload, secret, { expiresIn });
}
