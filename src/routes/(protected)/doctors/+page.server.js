import prisma from "$lib/prisma"

export const load = async () => {

    const result = await prisma.doctor.findMany({})

    return {
        doctors: result
    }
}