import { PrismaClient } from "@prisma/client"

global.prisma

const prisma = global.prisma || new PrismaClient()

if (import.meta.env.MODE === "development") {
    global.prisma = prisma
}

export default prisma
