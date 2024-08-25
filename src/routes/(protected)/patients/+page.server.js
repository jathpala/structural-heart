import { error } from "@sveltejs/kit"
import prisma from "$lib/server/prisma"

export async function load() {
    let patients
    try {
        patients = await prisma.patient.findMany()
    } catch (err) {
        console.error(err)
        return error(500, { message: "Unable to find patients" })
    }

    return {
        patients: patients
    }
}
