<section>
    <form>
        <div class="search-wrapper">
            <input id="patient-search" type="search" name="search" placeholder="Jon Stewart..." />
            <label for="patient-search">Search</label>
            <button class="clear" aria-label="Clear input">
                <svg viewBox="0 0 16 16" width="12" height="12">
                  <path d="M 1 1 L 15 15 M 1 15 L 15 1" fill="none" stroke-width="2" stroke="currentColor" />
                </svg>
            </button>
        </div>
    </form>
</section>

<style lang="scss">
form {
    padding-inline: 2em;
    padding-block: 1em;
}

div.search-wrapper {
    position: relative;
    margin-top: 0.7em;
    margin-inline: auto;
    max-width: 20em;

    input {
        width: 100%;
        padding-block: 0.4em;
        padding-left: 0.5em;
        padding-right: calc(0.5em + 30px);
        border-style: solid;
        border-width: 2px;
        border-color: rgb(180, 180, 180);
        border-radius: 1em;
        background-color: transparent;

        &:focus {
            outline: none;

            &::placeholder {
                color: rgb(100, 100, 100);
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
        top: 0.3em;
        left: 0.5em;
        color: #43454e;
        pointer-events: none;
        transform-origin: left center;
        transition:
            background-color 250ms,
            transform 250ms;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
        background-color: rgb(255, 255, 255);
        border-radius: 1em;
        transform: translateY(calc(-100% + 0.5em)) scale(0.8);
    }
}

.clear {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  top: 50%;
  right: -9px; // To visually align with inputs right edge
  transform: translateY(-50%);
  background: none;
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  color: #777;
  transition: color 250ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    color: #333;
  }
}

input:placeholder-shown + label + .clear {
  display: none;
}



</style>
