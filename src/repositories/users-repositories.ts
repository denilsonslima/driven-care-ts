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

async function createSessions(token: string, user_id: number): Promise<sessions> {
  return prisma.sessions.create({
    data: {
      token,
      user_id
    }, 
  })
}

export type validateUser = Omit<users, "created_at" | "id" | 'is_doctor'>;
export type userSignIn = Omit<validateUser, 'name'>

export default {
  findByToken,
  createUser,
  findByEmail,
  createSessions
};
