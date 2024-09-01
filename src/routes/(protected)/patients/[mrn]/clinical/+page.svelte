<script>
import { page } from "$app/stores"

import IconBack from "~icons/fe/arrow-left"

import ToggleSwitch from "$lib/ToggleSwitch.svelte"

export let data
const { patient } = data

let {
    diagnosis,
    height,
    weight,
    clinicalHistory,
    pastHistory,
    medications,
    allergies
} = patient

</script>

<div class="header"><a href={`${$page.url.href.replace(/\/([^\/?#]+)[^\/]*$/, "")}`}><IconBack /></a><h2>Clinical Summary</h2></div>

<form method="POST" action="?/saveClinicalData">
    <fieldset class="summary">
        <label>
            <span>Diagnosis</span>
            <input type="text" name="diagnosis" bind:value={diagnosis} />
        </label>
    </fieldset>

    <fieldset class="biometrics">
        <label>
            <span>Height</span>
            <input type="number" name="height" bind:value={height} />
        </label>
        <label>
            <span>Weight</span>
            <input type="number" name="weight" bind:value={weight} />
        </label>
    </fieldset>

    <fieldset class="clinical">
        <label>
            <span>History</span>
            <textarea name="clinicalHistory">{clinicalHistory}</textarea>
        </label>
        <label>
            <span>Past History</span>
            <textarea name="pastHistory">{pastHistory}</textarea>
        </label>
        <label>
            <span>Medications</span>
            <textarea name="medications">{medications}</textarea>
        </label>
        <label>
            <span>Allergies</span>
            <textarea name="allergies">{allergies}</textarea>
        </label>
    </fieldset>

    <fieldset class="controls">
        <button type="reset">Reset</button>
        <button type="submit" class="primary">Save</button>
    </fieldset>
</form>

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

form {
    margin-inline: auto;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;

    input, select, textarea {
        padding-inline: 0.6em;
        padding-block: 0.4em;
        border-radius: 0.5em;
        border-style: solid;
        border-width: 1px;
        border-color: $muted-color;
        font-weight: 400;
        width: 40em;

        &:focus {
            border-color: $accent-color;
            outline: none;
        }
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 0.4em;
        font-weight: 500;

        & > span::after {
            content: ":";
        }
    }

    fieldset {
        border-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.4em;

        &.biometrics {
            flex-direction: row;
            gap: 2em;

            label {
                flex-direction: row;
                align-items: center;

                &::after {
                    font-weight: 300;
                }

                &:has(input[name="height"])::after {
                    content: "cm";
                }

                &:has(input[name="weight"])::after {
                    content: "kg";
                }
            }

            input {
                width: 3em;
                appearance: textfield;

                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            }
        }

        &.clinical {
            textarea {
                height: 8em;
                resize: vertical;

                &[name="pastHistory"] {
                    height: 12em;
                }

                &[name="allergies"] {
                    height: 4em;
                }
            }
        }

        &.controls {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            gap: 0.6em;

            button {
                padding-inline: 0.6em;
                padding-block: 0.4em;
                border-style: solid;
                border-color: $accent-color;
                border-radius: 0.8em;
                background-color: $background-color;
                color: $accent-color;
                cursor: pointer;

                &:hover {
                    color: adjust-color($accent-color, $lightness: 4%);
                    border-color: adjust-color($accent-color, $lightness: 4%);
                    background-color: adjust-color($background-color, $lightness: -2%);
                }

                &.primary {
                    background-color: $accent-color;
                    color: $background-color;

                    &:hover {
                        background-color: adjust-color($accent-color, $lightness: 4%);
                    }
                }
            }
        }
    }
}
</style>