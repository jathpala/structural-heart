<script>
import PatientDetails from "$lib/PatientDetails.svelte"
</script>

<h2>Add Patient</h2>

<PatientDetails action="?/addPatient" />

<style lang="scss">
@use "$styles/theme" as *;

h2 {
    margin-bottom: 1.4em;
    font-size: 1.6rem;
    font-weight: 400;
    font-style: italic;
}
</style>