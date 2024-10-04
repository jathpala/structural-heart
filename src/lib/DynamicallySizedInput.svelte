<script>
import { createEventDispatcher } from "svelte"

const dispatch = createEventDispatcher()

export let size = 4
export let placeholder = "..."
export let value = ""

function notifyChange() {
    dispatch("update")
}
</script>

<form action="#">
    <label class="input-sizer">
      <input type="text" onInput="this.parentNode.dataset.value = this.value" {size} {placeholder} bind:value on:input={notifyChange}>
    </label>
</form>

<style lang="scss">
@use "$styles/theme" as *;

.input-sizer {
    display: inline-grid;

    &::after,
    input {
        width: auto;
        min-width: 1em;
        max-width: 20em;
        padding-inline: 0.4em;
    }

    input {
        font-weight: 400;
        border-style: none;
        border-bottom-style: solid;
        border-width: 1px;
        border-color: $accent-color;
        border-radius: 0.2em;
        background-color: $background-color;
        padding-block: 0.4em;

        &:focus {
            outline-style: none;
        }
    }

    &::after {
        content: attr(data-value) ' ';
        visibility: hidden;
        height: 0;
        white-space: pre-wrap;
    }
}
</style>