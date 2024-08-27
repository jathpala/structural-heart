<script>
import { page } from "$app/stores"

import IconBack from "~icons/fe/arrow-left"
import IconGo from "~icons/fe/arrow-right"

import PatientDetails from "$lib/PatientDetails.svelte"

export let data

const { patient } = data

const {
    mrn,
    firstname,
    lastname,
    sex,
    dob,
    generalPractitionerName,
    primaryCardiologistName,
    structuralCardiologistName,
    status
} = patient
</script>

<div class="header"><a href="/patients"><IconBack /></a><h2>Manage Patient</h2></div>

<PatientDetails
    action="?/savePatient"
    {mrn}
    {firstname}
    {lastname}
    {sex}
    {dob}
    generalPractitioner={generalPractitionerName}
    primaryCardiologist={primaryCardiologistName}
    structuralCardiologist={structuralCardiologistName}
    {status} />

<div class="links">
    <a href={`${$page.url.href}/clinical`}>Clinical History <IconGo /></a>
    <a href={`${$page.url.href}/investigations`}>Investigations <IconGo /></a>
    <a href={`${$page.url.href}/conference`}>Conference Note <IconGo /></a>
    <a href={`${$page.url.href}/procedure`}>Procedure Report <IconGo /></a>
</div>

<style lang="scss">
@use "$styles/theme" as *;

div.header {
    display: grid;
    align-items: center;
    margin-bottom: 1.4em;

    a {
        grid-column-start: 1;
        grid-row-start: 1;
        font-size: 1.6rem;
        width: fit-content;
        z-index: 1;
    }

    h2 {
        grid-column-start: 1;
        grid-row-start: 1;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 400;
        font-style: italic;
    }
}

div.links {
    margin-top: 4rem;
    margin-inline: auto;
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    a {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        padding-inline: 0.6em;
        padding-block: 0.4em;
        align-self: center;
        font-weight: 500;
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
</style>