import { sessions, users } from "@prisma/client";
import prisma from "../config/database.js";

async function findByToken(token: string): Promise<sessions> {
  return prisma.sessions.findUnique({
    where: {
      token,
    },
  });
}

async function createUser(data: validateUser): Promise<void> {
  await prisma.users.create({
    data,
  });
}

async function findByEmail(email: string): Promise<users> {
  return prisma.users.findUnique({
    where: {
      email,
    },
  });
}

export type validateUser = Omit<users, "created_at" | "id" | 'is_doctor'>;

export default {
  findByToken,
  createUser,
  findByEmail
};
