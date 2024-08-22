<script>
import { v4 as uuidv4 } from "uuid"
import _ from "lodash"
import IconClose from "~icons/fe/close"
import IconSearch from "~icons/fe/search"

export let name
export let label = null
export let placeholder = ""

$: labelText = label ? label : _.startCase(name)

const uuid = uuidv4()
const id = `${name}-${uuid}`
</script>

<div class="search-wrapper">
    <label for={id}>{labelText}</label>
    <input {id} type="search" {name} {placeholder} />
    <button class="clear">
        <IconClose />
    </button>
    <button class="search">
        <IconSearch />
    </button>
</div>


<style lang="scss">
@use "$styles/theme" as *;

div.search-wrapper {
    position: relative;
    margin-top: 0.7em;
    width: 100%;

    input {
        width: 100%;
        padding-block: 0.4em;
        padding-left: 0.5em;
        padding-right: 3.5em;
        border-style: solid;
        border-width: 2px;
        border-color: $muted-color;
        border-radius: 1em;
        background-color: transparent;

        &:focus {
            outline: none;
            border-color: $accent-color;

            &::placeholder {
                color: adjust-color($text-color, $lightness: 40%);
            }
        }

        &::placeholder {
            color: transparent;
        }
    }

    label {
        position: absolute;
        padding-inline: 0.2em;
        padding-block: 0.2em;
        top: 50%;
        transform: translateY(-50%);
        left: 0.5em;
        color: adjust-color($text-color, $lightness: 40%);
        pointer-events: none;
        transform-origin: left center;
        transition:
            background-color 250ms,
            transform 250ms,
            top 250ms,
            color 250ms;
    }

    &:has(input:focus) label,
    &:has(input:not(:placeholder-shown)) label {
        color: adjust-color($text-color, $lightness: 10%);
        background-color: rgb(255, 255, 255);
        border-radius: 1em;
        top: 0;
        transform: translateY(calc(-100% + 0.8em)) scale(0.8);
    }

    button.clear {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 50%;
        right: 2em;
        transform: translateY(-50%);
        background: none;
        border: none;
        border-radius: 50%;
        color: adjust-color($text-color, $lightness: 40%);
    }

    &:has(input:placeholder-shown) button.clear {
       display: none;
    }

    button.search {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 50%;
        right: 0.5em;
        transform: translateY(-50%);
        background: none;
        border: none;
        border-radius: 50%;
        color: adjust-color($text-color, $lightness: 40%);
    }

    &:has(input:not(:placeholder-shown)) button.search {
        color: $accent-color;
    }
}

</style>
