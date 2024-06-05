import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

export const jwtService = {
  signPayload: (payload: string | object | Buffer, expiration: string) => {
    const JWT_KEY = process.env.JWT_KEY;
    if (!JWT_KEY) {
      throw new Error('JWT_KEY is not defined in environment variables');
    }

    const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1d';
    return jwt.sign(payload, JWT_KEY, { expiresIn: JWT_EXPIRATION });
  },

  verifyToken: (token: string, callbackfn: jwt.VerifyCallback) => {
    const JWT_KEY = process.env.JWT_KEY;
    if (!JWT_KEY) {
      throw new Error('JWT_KEY is not defined in environment variables');
    }
    jwt.verify(token, JWT_KEY, callbackfn);
  }
};