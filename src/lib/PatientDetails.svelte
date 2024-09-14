<script>
export let action

export let mrn = ""
export let firstname = ""
export let lastname = ""
export let sex = "male"
export let dob = ""
export let generalPractitioner = ""
export let primaryCardiologist = ""
export let structuralCardiologist = ""
export let status = "assess"

const originalMrn = mrn
const originalFirstname = firstname
const originalLastname = lastname
const originalSex = sex
const originalDob = dob
const originalGeneralPractitioner = generalPractitioner
const originalPrimaryCardiologist = primaryCardiologist
const originalStructuralCardiologist = structuralCardiologist
const originalStatus = status

let disabled = !!mrn    // Converts string to boolean

function unlock() {
    disabled = false
}

function reset() {
    mrn = originalMrn
    firstname = originalFirstname
    lastname = originalLastname
    sex = originalSex
    dob = originalDob
    generalPractitioner = originalGeneralPractitioner
    primaryCardiologist = originalPrimaryCardiologist
    structuralCardiologist = originalStructuralCardiologist
    status = originalStatus

    disabled = true
}
</script>

<form action={action} method="POST">
    <fieldset class="demographics">
        <label for="mrn">MRN</label>
        <input type="text" id="mrn" name="mrn" bind:value={mrn} {disabled} />

        <label for="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" bind:value={firstname} {disabled} />

        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" bind:value={lastname} {disabled} />

        <span class="spacer"></span><span class="spacer"></span>

        <label for="sex">Sex</label>
        <select id="sex" name="sex" bind:value={sex} {disabled}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <label for="dob">DoB</label>
        <input type="date" id="dob" name="dob" bind:value={dob} {disabled} />
    </fieldset>

    <fieldset class="treating-doctors">
        <label for="general-practitioner">General Practitioner</label>
        <input type="text" id="general-practitioner" name="generalPractitionerName" bind:value={generalPractitioner} {disabled} />

        <label for="primary-cardiologist">Primary Cardiologist</label>
        <input type="text" id="primary-cardiologist" name="primaryCardiologistName" bind:value={primaryCardiologist} {disabled} />

        <label for="structural-cardiologist">Structural Cardiologist</label>
        <input type="text" id="structural-cardiologist" name="structuralCardiologistName" bind:value={structuralCardiologist} {disabled} />
    </fieldset>

    <fieldset class="status">
        <label>
            <input type="radio" name="status" value="assess" bind:group={status} {disabled} />
            <span>Being Assessed</span>
        </label>
        <label>
            <input type="radio" name="status" value="present" bind:group={status} {disabled} />
            <span>Awaiting Presentation</span>
        </label>
        <label>
            <input type="radio" name="status" value="waitlist" bind:group={status} {disabled} />
            <span>On Waitlist</span>
        </label>
        <label>
            <input type="radio" name="status" value="monitor" bind:group={status} {disabled} />
            <span>Ongoing Monitoring</span>
        </label>
        <label>
            <input type="radio" name="status" value="discharge" bind:group={status} {disabled} />
            <span>Discharged</span>
        </label>
    </fieldset>

    <fieldset class="controls">
        {#if disabled}
            <button on:click={() => unlock()} class="primary">Unlock</button>
        {:else}
            <button type="reset" on:click|preventDefault={() => reset()}>Reset</button>
            <button type="submit" class="primary">Save</button>
        {/if}
    </fieldset>
</form>

<style lang="scss">
@use "$styles/theme" as *;

form {
    // TODO: CSS subgrids for the form and fieldsets may allow cleaner alignment without needing spacers
    display: grid;
    grid-template-areas:
        "demographics treating-doctors"
        "demographics status"
        "controls controls";
    grid-template-columns: max-content max-content;
    column-gap: 6em;
    row-gap: 2em;
    margin-inline: auto;
    align-items: flex-start;
    width: fit-content;

    fieldset {
        border-style: none;
        display: grid;
        grid-template-columns: max-content 1fr;
        column-gap: 1em;
        row-gap: 0.8em;
        align-items: center;
        width: fit-content;

        &.demographics {
            grid-area: demographics;
        }

        &.treating-doctors {
            grid-area: treating-doctors;
        }

        &.status {
            grid-area: status;
            grid-template-columns: max-content max-content;
            grid-template-rows: max-content max-content max-content;
            grid-auto-flow: column;
            justify-self: center;

            label {
                display: flex;
                align-items: center;
                gap: 0.6em;
                text-align: left;

                &::after {
                    content: none;
                }

                input {
                    width: 1.4em;
                    height: 1.4em;
                    accent-color: adjust-color($accent-color, $lightness: -10%);
                }
            }
        }

        &.controls {
            grid-area: controls;
            justify-self: center;
            display: flex;
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

    label {
        text-align: right;

        &::after {
            content: ":";
        }
    }

    input, select {
        width: 15em;
        padding-inline: 0.6em;
        padding-block: 0.4em;
        border-radius: 0.5em;
        border-style: solid;
        border-width: 1px;
        border-color: $muted-color;

        &:focus {
            border-color: $accent-color;
            outline: none;
        }

        &#mrn {
            width: 8em;
        }

        &#sex, &#dob {
            width: 10em;
        }

        &#general-practitioner,
        &#primary-cardiologist,
        &#structural-cardiologist {
            width: 18em;
        }
    }

    span.spacer {
        height: 0.8em;
    }
}
</style>