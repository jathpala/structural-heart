<div id="page">
    <header>
        <h1>Structural Heart</h1>
        <nav>
            <ul>
                <li>Patients</li>
                <li>Doctors</li>
            </ul>
        </nav>
    </header>
    <main><slot /></main>
    <footer></footer>
</div>

<style lang="scss">
@use "$styles/theme" as *;

div#page {
    display: flex;
    flex-direction: column;
}
</style>