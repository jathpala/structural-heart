<script>
import { page } from "$app/stores"

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
    structuralCardiologistName
} = patient
</script>

<h2>Manage Patient</h2>

<PatientDetails
    action="?/savePatient"
    {mrn}
    {firstname}
    {lastname}
    {sex}
    {dob}
    generalPractitioner={generalPractitionerName}
    primaryCardiologist={primaryCardiologistName}
    structuralCardiologist={structuralCardiologistName} />

<a href={`${$page.url}/clinical`}>Clinical History</a>

<style lang="scss">
@use "$styles/theme" as *;

h2 {
    margin-bottom: 1.4em;
    font-size: 1.6rem;
    font-weight: 400;
    font-style: italic;
}
</style>