<script>
import { page } from "$app/stores"

import IconBack from "~icons/fe/arrow-left"

console.log($page)
</script>

<div class="header"><a href={`${$page.url.href.replace(/\/([^\/?#]+)[^\/]*$/, "")}`}><IconBack /></a><h2>Clinical Summary</h2></div>

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