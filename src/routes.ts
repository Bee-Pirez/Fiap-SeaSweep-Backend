import { FastifyInstance } from 'fastify';
import { authController } from './controllers/AuthController';
import { shipController } from './controllers/ShipController';

export const routes = async (fastify: FastifyInstance) => {
  // Rota de registro de usuário
  fastify.post('/auth/register', authController.register);

  // Rota de login de usuário
  fastify.post('/auth/login', authController.login);

  // Rota para obter todos os navios
  fastify.get('/ships', shipController.getAll);
};