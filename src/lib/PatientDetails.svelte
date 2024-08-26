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
</script>

<form action={action} method="POST">
    <label for="mrn">MRN</label>
    <input type="text" id="mrn" name="mrn" bind:value={mrn}/>

    <label for="firstname">First Name</label>
    <input type="text" id="firstname" name="firstname" bind:value={firstname} />

    <label for="lastname">Last Name</label>
    <input type="text" id="lastname" name="lastname" bind:value={lastname} />

    <span class="spacer"></span><span class="spacer"></span>

    <label for="sex">Sex</label>
    <select id="sex" name="sex" bind:value={sex}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>

    <label for="dob">DoB</label>
    <input type="date" id="dob" name="dob" bind:value={dob} />

    <span class="spacer"></span><span class="spacer"></span>

    <label for="general-practitioner">General Practitioner</label>
    <input type="text" id="general-practitioner" name="generalPractitionerName" bind:value={generalPractitioner} />

    <label for="primary-cardiologist">Primary Cardiologist</label>
    <input type="text" id="primary-cardiologist" name="primaryCardiologistName" bind:value={primaryCardiologist} />

    <label for="structural-cardiologist">Structural Cardiologist</label>
    <input type="text" id="structural-cardiologist" name="structuralCardiologistName" bind:value={structuralCardiologist} />

    <span class="spacer"></span><span class="spacer"></span>

    <fieldset class="controls">
        <button type="reset">Reset</button>
        <button type="submit" class="primary">Save</button>
    </fieldset>
</form>

<style lang="scss">
@use "$styles/theme" as *;

form {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 1em;
    row-gap: 0.6em;
    align-items: center;
    width: fit-content;

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
        height: 0.6em;
    }

    fieldset.controls {
        grid-column: 1 / 3;
        display: flex;
        justify-content: flex-end;
        gap: 0.6em;
        border-style: none;

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
</style>