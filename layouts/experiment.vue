<template>
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
</template>

<script>
	export default {
		name: "experiment",
	};
</script>

<style lang="scss">
	.l-layout-experiment {

		overflow: hidden;
		display: grid;
		grid-template-rows: 1fr 6em;
		min-height: 100vh;

		@media (orientation: landscape ) {
			grid-template-rows: initial;
			grid-template-columns: 6em 1fr;
		}

		&__footer {
			box-sizing: border-box;
			height: 6em;
			@media (orientation: landscape ) {
				height: auto;
				width: 6em;
				grid-column: 1;
				grid-row: 1;
			}
		}

		&__header {
			position: absolute;
			top: 0;
			left: 0;
			padding: space(s) 1.5em 0;
			z-index: 3;

			@media (min-width: $mobile) {
				padding: space(m) 1.3em 0;
			}
		}
	}
</style>
