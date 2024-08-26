import { error, redirect } from "@sveltejs/kit"
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
    savePatient: async({ request, params }) => {
        const patient = Object.fromEntries(await request.formData())

        try {
            await prisma.patient.update({
                where: {
                    mrn: params.mrn
                },
                data: {
                    ...patient
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: "Unable to add patient" })
        }

        redirect(302, "/patients")
    }
}