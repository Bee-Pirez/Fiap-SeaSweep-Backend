import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';

export const shipController = {
  // GET /ships
  getAll: async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const ships = await prisma.ship.findMany();
      return reply.send(ships);
    } catch (error) {
      console.error('Error fetching ships:', error);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  },
};