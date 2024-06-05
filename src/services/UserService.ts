import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userService = {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  },
};