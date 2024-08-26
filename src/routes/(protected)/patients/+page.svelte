<script>
import { format as formatDate } from "date-fns"
import PatientSearch from "$lib/PatientSearch.svelte"
import IconGo from "~icons/fe/arrow-right"

export let data

$: ({ patients } = data)
</script>

<section>
    <form>
        <PatientSearch name="search" placeholder="Enter name or MRN..." />
        <a id="add-patient" href="/patients/add">Add Patient</a>
    </form>
</section>

<section>
    <table>
        <thead>
            <tr>
                <th scope="col">MRN</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">DoB</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {#each patients as patient}
                <tr on:click={() => window.location = `/patients/${patient.mrn}`}>
                    <td>{patient.mrn}</td>
                    <td>{patient.firstname}</td>
                    <td>{patient.lastname}</td>
                    <td>{formatDate(new Date(patient.dob), "d / M / yyyy")}</td>
                    <td><a href={`/patients/${patient.mrn}`}><IconGo /></a></td>
                </tr>
            {/each}
        </tbody>
    </table>
</section>


<style lang="scss">
@use "$styles/theme" as *;

form {
    padding-inline: 2em;
    padding-block: 1em;
    margin-inline: auto;
    max-width: 30em;
    display: flex;
    flex-direction: column;
    gap: 1em;

    a#add-patient {
        padding-inline: 0.6em;
        padding-block: 0.4em;
        align-self: center;
        border-style: solid;
        border-color: $accent-color;
        border-radius: 0.8em;
        background-color: $accent-color;
        color: $background-color;

        &:hover {
            text-decoration: none;
            background-color: adjust-color($accent-color, $lightness: 4%);
            border-color: adjust-color($accent-color, $lightness: 4%);
        }
    }
}

section {
    margin-bottom: 5rem;

    &:last-of-type {
        margin-bottom: 0;
    }
}

table {
    margin-inline: auto;
    border-collapse: collapse;
    border-color: $accent-color;
    border-width: 2px;
    border-style: solid;

    tr {
        cursor: pointer;

        &:hover {
            background-color: adjust-color($background-color, $lightness: -12%);
        }

        &:nth-child(2n) {
            background-color: adjust-color($accent-color, $lightness: 32%, $saturation: -10%);

            &:hover {
                background-color: adjust-color($accent-color, $lightness: 28%, $saturation: -10%);
            }
        }
    }

    th,
    td {
        font-size: 0.9rem;
        padding-block: 0.8em;
        padding-inline: 2em;
        text-align: left;
        min-width: 5em;
        border-color: $accent-color;
        border-width: 1px;
        border-style: solid;
        border-inline-style: none;
    }

    th {
        cursor: default;
        color: $background-color;
        font-weight: 600;
        font-style: italic;
        background-color: adjust-color($accent-color, $lightness: 10%, $saturation: -5%);
    }
}
</style>
