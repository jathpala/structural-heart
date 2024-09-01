import { error, redirect, fail } from "@sveltejs/kit"
import prisma from "$lib/server/prisma"

export async function load({ params }) {
    let patient
    try {
        patient = await prisma.patient.findUnique({
            where: {
                mrn: params.mrn
            }
        })
    } catch (err) {
        console.error(err)
        return error(500, { message: "Unable to find patient" })
    }

    return {
        patient: patient
    }
}


export const actions = {
    saveClinicalData: async({ request, params }) => {
        const patient = Object.fromEntries(await request.formData())

        const data = {
            ...patient
        }

        data.height = parseInt(data.height)
        data.weight = parseInt(data.weight)

        try {
            await prisma.patient.update({
                where: {
                    mrn: params.mrn
                },
                data: data
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: "Unable to add patient" })
        }

        redirect(302, "/patients")
    }
}