import { error } from "@sveltejs/kit"
import prisma from "$lib/server/prisma"

const mock_data = [
    {
        mrn: "111222",
        firstname: "Jath",
        lastname: "Palasubramaniam",
        procedures: ["tavr"],
        categery: 2,
        date: "2024-10-12"
    },
    {
        mrn: "111232",
        firstname: "Dharshan",
        lastname: "Palasubramaniam",
        procedures: ["tavr"],
        category: 2,
        date: "2024-09-10"
    },
    {
        mrn: "111244",
        firstname: "Frank",
        lastname: "Oldfield",
        procedures: ["tavr"],
        category: 2,
        date: "2024-05-10"
    },
    {
        mrn: "121222",
        firstname: "Bill",
        lastname: "Maher",
        procedures: ["tavr", "tmveer"],
        category: 2,
        date: "2024-09-10"
    },
    {
        mrn: "17622",
        firstname: "Tommy",
        lastname: "Costanza",
        procedures: ["tavr", "pfoc"],
        category: 2,
        date: "2023-09-10"
    },
    {
        mrn: "41222",
        firstname: "Geroge",
        lastname: "Selpig",
        procedures: ["pfoc"],
        category: 2,
        date: "2024-09-11"
    },
    {
        mrn: "1222",
        firstname: "Adam",
        lastname: "Herberts",
        procedures: ["tavr"],
        category: 1,
        date: "2024-09-10"
    },
    {
        mrn: "19222",
        firstname: "Joe",
        lastname: "Ocean",
        procedures: ["bav"],
        category: 2,
        date: "2024-08-10"
    },
    {
        mrn: "111862",
        firstname: "Bill",
        lastname: "Bailey",
        procedures: ["tavr"],
        category: 3,
        date: "2024-09-14"
    },
]

export async function load() {
    // let patients
    // try {
    //     patients = await prisma.patient.findMany()
    // } catch (err) {
    //     console.error(err)
    //     return error(500, { message: "Unable to find patients" })
    // }

    let patients = mock_data

    return {
        patients: patients
    }
}
