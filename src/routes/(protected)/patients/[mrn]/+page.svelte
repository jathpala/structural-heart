<script>
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

<style lang="scss">
@use "$styles/theme" as *;

h2 {
    margin-bottom: 1.4em;
    font-size: 1.6rem;
    font-weight: 400;
    font-style: italic;
}
</style>