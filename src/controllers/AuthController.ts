import { FastifyRequest, FastifyReply } from 'fastify';
import { userService } from '../services/UserService'
import { jwtService } from '../services/JwtService'
import bcrypt from 'bcrypt'
import { prisma } from '../lib/prisma';

//exportar um objeto
export const authController = {
  // POST /auth/register
  register: async (req: FastifyRequest, reply: FastifyReply) => {
    const { name, email, password } = req.body as { name: string; email: string; password: string };

    try {
      const existingUser = await userService.findUserByEmail(email);
      if (existingUser) {
        return reply.code(400).send({ error: 'User already exists' });
      }

      // Hash da senha
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      // Retorna o novo usuário
      return reply.code(201).send(newUser);
    } catch (error) {
      console.error('Error registering user:', error);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  },

  // /auth/login
  login: async (req: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = req.body as { email: string; password: string };

    try {
      // Verifica se o usuário existe
      const existingUser = await userService.findUserByEmail(email);
      
      if (!existingUser) {
        return reply.code(400).send({ error: 'Invalid email or password' });
      }

      // Verifica se a senha está correta
      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      
      if (isPasswordValid) {
        const payload = {
          id: existingUser.id,
          name: existingUser.name, 
          email: existingUser.email,
        };
        const token = jwtService.signPayload(payload, '1d');

        return reply.send({ authenticated: true, ...payload, token });
      
      } else{
        return reply.code(400).send({ error: 'Invalid email or password' });
      }

    } catch (error) {
      console.error('Error logging in user:', error);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  },
}