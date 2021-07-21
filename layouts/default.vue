
<template>
    <main class="l-layout">
        <header class="l-layout__header">
            <Logo/>
        </header>
        <nuxt/>
        <Draggable/>
        <footer class="l-layout__footer">
            <Nav/>
        </footer>
    </main>
</template>

<style lang="scss">
    .l-layout {
        min-height: 100%;
        display: grid;
        grid-template-rows: max-content 1fr max-content;

        &__header {
            pointer-events: none;
        }

        &__footer {
            pointer-events: none;
            position: sticky;
            bottom: 0;
            z-index: 3;
        }
    }
</style>