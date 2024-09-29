<script>
import { format as formatDate } from "date-fns"
import IconGo from "~icons/fe/arrow-right"

export let data

$: ({ patients } = data)
</script>

<section>
    <table>
        <thead>
            <tr>
                <th scope="col">MRN</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Procedure</th>
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
