import { error } from "@sveltejs/kit"
import prisma from "$lib/server/prisma"

const mock_data = [
    {
        mrn: "111222",
        firstname: "Jath",
        lastname: "Palasubramaniam",
        procedure: ["tavi"],
        categery: 2,
    },
    {
        mrn: "111232",
        firstname: "Dharshan",
        lastname: "Palasubramaniam",
        procedure: ["tavi"],
        category: 2
    },
    {
        mrn: "111244",
        firstname: "Frank",
        lastname: "Oldfield",
        procedure: ["tavi"],
        category: 2
    },        {
        mrn: "121222",
        firstname: "Bill",
        lastname: "Maher",
        procedure: ["tavi", "tmveer"],
        category: 2
    },
    {
        mrn: "17622",
        firstname: "Tommy",
        lastname: "Costanza",
        procedure: ["tavi", "pfoc"],
        category: 2
    },
    {
        mrn: "41222",
        firstname: "Geroge",
        lastname: "Selpig",
        procedure: ["pfoc"],
        category: 2
    },
    {
        mrn: "1222",
        firstname: "Adam",
        lastname: "Herberts",
        procedure: ["tavi"],
        category: 1
    },
    {
        mrn: "19222",
        firstname: "Joe",
        lastname: "Ocean",
        procedure: ["bav"],
        category: 2
    },
    {
        mrn: "111862",
        firstname: "Bill",
        lastname: "Bailey",
        procedure: ["tavi"],
        category: 3
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
