import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const connectionDb = new PrismaClient()

export default connectionDb
