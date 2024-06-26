import { PrismaClient } from "@prisma/client"; // { Prisma, PrismaClient }

const prisma = new PrismaClient();

export const getAdminByPhone = async (phone: string) => {
  return prisma.admin.findUnique({
    where: { phone: phone }, // { phone }
  });
};

export const getOtpByPhone = async (phone: string) => {
  return prisma.otp.findUnique({
    where: { phone: phone }, // { phone }
  });
};

export const createOtp = async (otpData: any) => {
  return prisma.otp.create({ data: otpData });
};

export const updateOtp = async (id: string, otpData: any) => {
  return prisma.otp.update({
    where: { id: id },
    data: otpData,
  });
};

export const createAdmin = async (adminData: any) => {
  return prisma.admin.create({ data: adminData });
};

export const updateAdmin = async (id: string, adminData: any) => {
  return prisma.admin.update({
    where: { id: id },
    data: adminData,
  });
};

export const getAllAdmins = async ( filteredData: any ) => {
  return prisma.admin.findMany( filteredData );
};
