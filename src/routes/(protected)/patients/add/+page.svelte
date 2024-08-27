<script>
import PatientDetails from "$lib/PatientDetails.svelte"
import IconBack from "~icons/fe/arrow-left"

</script>

<div class="header"><a href="/patients"><IconBack /></a><h2>Add Patient</h2></div>

<PatientDetails action="?/addPatient" />

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
</style>