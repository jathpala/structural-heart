<script>
import { onMount } from "svelte"
import { format as formatDate } from "date-fns"
import IconGo from "~icons/fe/arrow-right"
import IconUp from "~icons/fe/arrow-up"
import IconDown from "~icons/fe/arrow-down"
import IconFilter from "~icons/fe/filter"
import IconCancel from "~icons/ic/outline-cancel"

import DynamicallySizedInput from "$lib/DynamicallySizedInput.svelte"

export let data

$: ({ patients } = data)

const procedureMapping = {
    bav: "BAV",
    tavr: "TAVR",
    tmveer: "MitraClip",
    pfoc: "PFO Closure"
}

let showFilters = false

let mrnFilter = ""
let firstnameFilter = ""
let lastnameFilter = ""
let procedureFilter = ""

function procedureListToString(list) {
    const prettyList = list.map(item => procedureMapping[item] || item)
    return prettyList.join(", ")
}

function sortByDate({reverse = false} = {}) {
    if (reverse) {
        patients = patients.sort((a, b) => new Date(b.date) - new Date(a.date))
    } else {
        patients = patients.sort((a, b) => new Date(a.date) - new Date(b.date))
    }
}

function filterPatient(patient) {
    return (
        patient.mrn.toLowerCase().includes(mrnFilter.toLowerCase()) &&
        patient.firstname.toLowerCase().includes(firstnameFilter.toLowerCase()) &&
        patient.lastname.toLowerCase().includes(lastnameFilter.toLowerCase()) &&
        procedureListToString(patient.procedures).toLowerCase().includes(procedureFilter.toLowerCase())
    )
}

function clearFilters() {
    mrnFilter = ""
    firstnameFilter = ""
    lastnameFilter = ""
    procedureFilter = ""
    showFilters = false
    patients = patients
}

function toggleFilters() {
    if (showFilters) {
        clearFilters()
    } else {
        showFilters = true
    }
}

onMount(() => {
    sortByDate()
})
</script>

<section>
    <table>
        <thead>
            <tr>
                <th scope="col">MRN</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Procedure</th>
                <th scope="col">
                    <div class="header">
                        <span>List Date</span>
                        <div class="control-block">
                            <span on:click={() => sortByDate({reverse: true})}><IconUp /></span>
                            <span on:click={() => sortByDate()}><IconDown /><span>
                        </div>
                    </div>
                </th>
                <th scope="col">
                    <div class="header">
                        <div class="control-block">
                            <span on:click={toggleFilters}><IconFilter /></span>
                        </div>
                    </div>
                </th>
            </tr>
            <tr class="filter" class:visible={showFilters}>
                <th><DynamicallySizedInput size="3" placeholder="1234..."
                    bind:value={mrnFilter} on:update={() => patients = patients}/></th>
                <th><DynamicallySizedInput size="6" placeholder="Gilbert..."
                    bind:value={firstnameFilter} on:update={() => patients = patients}/></th>
                <th><DynamicallySizedInput size="6" placeholder="Grape..."
                    bind:value={lastnameFilter} on:update={() => patients = patients}/></th>
                <th><DynamicallySizedInput size="4" placeholder="TAVR..."
                    bind:value={procedureFilter} on:update={() => patients = patients}/></th>
                <th></th>
                <th class="controls"><span on:click={clearFilters}><IconCancel /></span></th>
            </tr>
        </thead>
        <tbody>
            {#each patients as patient}
                {#if filterPatient(patient)}
                    <tr on:click={() => window.location = `/patients/${patient.mrn}`}>
                        <td>{patient.mrn}</td>
                        <td>{patient.firstname}</td>
                        <td>{patient.lastname}</td>
                        <td>{procedureListToString(patient.procedures)}</td>
                        <td>{formatDate(new Date(patient.date), "d / M / yyyy")}</td>
                        <td><a href={`/patients/${patient.mrn}`}><IconGo /></a></td>
                    </tr>
                {/if}
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
    width: auto;
    table-layout: auto;

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

        &.filter {
            display: none;

            th {
                background-color: adjust-color($background-color, $lightness: -5%);

                &.controls {
                    color: $accent-color;

                    span {
                        cursor: pointer;
                    }
                }
            }

            &.visible {
                display: table-row;
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

        div.header {
            display: flex;
            gap: 1em;
            align-items: center;

            div.control-block {
                display: flex;
                flex-direction: column;
                align-items: center;

                span {
                    cursor: pointer;
                }
            }
        }
    }
}
</style>

<!-- TODO: Handle waitlist categories -->
