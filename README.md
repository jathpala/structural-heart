Patient Statuses
----------------
Assessing

Conference

Waitlisted

Monitoring

Discharged



----
<form action="#">
  <label class="input-sizer">
    <input type="text" onInput="this.parentNode.dataset.value = this.value" size="4" placeholder="John">
  </label>
</form>

*,
*::before,
*::after {
  box-sizing: border-box;
}

.input-sizer {
  display: inline-grid;
  //align-items: center;
  margin: 20px;
  border: 1px solid blue;

  &::after,
  input {
    width: auto;
    min-width: 1em;
    max-width: 20em;
    padding: 5px;
  }

  &::after {
    content: attr(data-value) ' ';
    //visibility: hidden;
    height: 0;
    padding-inline: 7px;
    padding-block: 0;
    white-space: pre-wrap;
  }
}
-----
