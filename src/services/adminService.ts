import "dotenv/config";
import { PrismaClient } from "@prisma/client"; // { Prisma, PrismaClient }

const prisma = new PrismaClient();

export const getAdminById = async (id: string) => {
  return prisma.admin.findUnique({
    where: { id: id }, // { phone }
  });
};