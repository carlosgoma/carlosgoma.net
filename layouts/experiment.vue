<template>
<transition name="dos">
	<div class="l-layout-experiment" :class="['l-layout--' + $route.name, {'is-desktop': $device.isDesktop }]">
		<header class="l-layout-experiment__header">
			<logo/>
		</header>
		<main>
			<nuxt/>
		</main>
		<footer class="l-layout-experiment__footer">
			<component :is="'nav-'+ $route.name" />
		</footer>
	</div>
</transition>
</template>

<style lang="scss">

.l-layout-experiment {

	display: grid;
	height: 100%;
	grid-template-columns: max-content 1fr;

	.l-layout-experiment__header {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 3;
		padding-top: space(m);
		padding-left: calc(var(--space) / 2 + 0.3em);
	}

	.l-layout-experiment__footer {
		grid-column: 1;
		grid-row: 1;
	}
}

</style>
