<div id="page">
    <header>
        <h1><a href="/patients">Structural Heart</a></h1>
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
    box-shadow: 0px 2px 10px 1px adjust-color($muted-color, $alpha: -0.4);
    margin-bottom: 2rem;

    h1 {
        color: $brand-color;
        font-family: $brand-font;
        font-size: 1.6rem;
        font-weight: 400;
        font-style: italic;

        a:hover {
            text-decoration: none;
        }
    }

    nav {
        ul {
            list-style: none;
            margin: 0;
            font-weight: 600;
            color: $accent-color;
        }
    }
}

main {
    flex-grow: 1;
    padding-inline: 2rem;
}
</style>