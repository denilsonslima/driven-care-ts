import { sessions } from "@prisma/client";
import prisma from "../config/database.js";

export async function findByToken(token: string): Promise<sessions> {
    return prisma.sessions.findUnique({
        where: {
            token
        }
    })
}