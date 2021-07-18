
<template>
    <main class="l-layout">
        <header class="l-layout__header">
            <Logo/>
        </header>
        <nuxt/>
        <footer class="l-layout__footer">
            <Nav/>
        </footer>
    </main>
</template>

<script>
    export default {
        
    }
</script>


<style lang="scss">
    .l-layout {
        height: 100%;
        display: grid;

        &__header {
            position: fixed;
            z-index: 10;
            top: 0;
            left: 0;
        }

        &__footer {
            position: fixed;
            z-index: 10;
            bottom: 0;
            left: 0;
            right: 0;
            pointer-events: none;
        }
    }
</style>