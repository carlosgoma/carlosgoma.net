<template>

    <div class="p-home">
        <Draggable/>

        <p class="p-home__message">
            Based in actual events. More information in your browser <strong>console</strong>.
        </p>
    </div>

</template>

<style lang="scss">

    .p-home__message {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        text-align: center;
        color: #888;
        font-size: .75em;
        transform: rotate(180deg);
        letter-spacing: 0.08em;
    }

</style>
