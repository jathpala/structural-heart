<div id="page">
    <header>
        <h1><a href="/home">Structural Heart</a></h1>
        <nav>
            <ul>
            </ul>
        </nav>
        <nav>
            <ul>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    </header>
    <main><slot /></main>
</div>

<style lang="scss">
@use "$styles/theme" as *;

div#page {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-inline: 1rem;
    padding-block: 0.6rem;
    box-shadow: 0px 2px 10px 2px adjust-color($muted-color, $alpha: -0.2);

    h1 {
        color: $brand-color;
        font-family: $brand-font;
        font-size: 1.6rem;
        font-weight: 400;
        font-style: italic;
    }

    nav {
        ul {
            list-style: none;
            margin: 0;
            color: $accent-color;
        }
    }
}

main {
    flex-grow: 1;
}
</style>