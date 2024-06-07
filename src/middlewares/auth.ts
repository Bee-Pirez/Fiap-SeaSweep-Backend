import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { userService } from '../services/UserService';
import { jwtService } from '../services/JwtService';
import { JwtPayload } from 'jsonwebtoken'

interface AuthenticatedRequest extends FastifyRequest {
  user?: any; 
}

export const authMiddleware = async (req: AuthenticatedRequest, reply: FastifyReply) => {
  try {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
      reply.code(401).send({ message: 'Token de autorização não fornecido' });
      return;
    }

    const tokenWithoutBearer = authorizationHeader.replace('Bearer ', '');
    
    jwtService.verifyToken(tokenWithoutBearer, (err, decoded) => {
      if (err) {
        reply.code(401).send({ message: 'Token de autorização inválido' });
        return;
      }

      userService.findUserByEmail((decoded as JwtPayload).email).then(user => {
        req.user = user;
        reply.send();
      });
      
    })
      
  } catch (error) {
    reply.code(500).send({ message: 'Erro interno do servidor' });
  }
};