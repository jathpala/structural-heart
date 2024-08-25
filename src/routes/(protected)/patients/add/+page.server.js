import { redirect, fail } from "@sveltejs/kit"
import prisma from "$lib/server/prisma"

export const actions = {
    addPatient: async({ request }) => {
        const {
            mrn,
            firstname,
            lastname,
            sex,
            dob
        } = Object.fromEntries(await request.formData())

        try {
            await prisma.patient.create({
                data: {
                    mrn,
                    firstname,
                    lastname,
                    sex,
                    dob
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: "Unable to add patient" })
        }

        redirect(302, "/patients")
    }
}