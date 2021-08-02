<template>
    <main class="l-layout" :class="['l-layout--experiment-' + $route.name, {'is-desktop': $device.isDesktop }]">
        <header class="l-layout__header">
            <Logo/>
        </header>
        <nuxt/>
    </main>
</template>