<script>
import PatientSearch from "$lib/PatientSearch.svelte"
</script>

<section>
    <form>
        <PatientSearch name="search" placeholder="Jon Stewart..." />
        <a id="add-patient" href="/patients/add">Add Patient</a>
    </form>
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

    border: 1px solid red;

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
</style>
