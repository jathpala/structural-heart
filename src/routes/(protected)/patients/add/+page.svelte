<h2>Add Patient</h2>

<form action="?/addPatient" method="POST">
    <label for="mrn">MRN</label>
    <input type="text" id="mrn" name="mrn" />

    <label for="firstname">First Name</label>
    <input type="text" id="firstname" name="firstname" />

    <label for="lastname">Last Name</label>
    <input type="text" id="lastname" name="lastname" />

    <span class="spacer"></span><span class="spacer"></span>

    <label for="sex">Sex</label>
    <select id="sex" name="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>

    <label for="dob">DoB</label>
    <input type="date" id="dob" name="dob"/>

    <span class="spacer"></span><span class="spacer"></span>

    <label for="general-practitioner">General Practitioner</label>
    <input type="text" id="general-practitioner" name="generalpractitioner" />

    <label for="primary-cardiologist">Primary Cardiologist</label>
    <input type="text" id="primary-cardiologist" name="primarycardiologist" />

    <label for="structural-cardiologist">Structural Cardiologist</label>
    <input type="text" id="structural-cardiologist" name="structuralcardiologist" />

    <span class="spacer"></span><span class="spacer"></span>

    <fieldset class="controls">
        <button type="reset">Clear</button>
        <button type="submit" class="primary">Save</button>
    </fieldset>
</form>

<style lang="scss">
@use "$styles/theme" as *;

h2 {
    text-align: center;
    margin-bottom: 0.8em;
    font-size: 1.6rem;
    font-weight: 400;
    font-style: italic;
}

form {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 1em;
    row-gap: 0.6em;
    align-items: center;

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