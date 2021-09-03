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

		mounted () {
			window.addEventListener('resize', this.onResize);
			document.querySelector(':root').style.setProperty('--windowHeight', window.innerHeight + "px" );
		},
		unmounted() {
			document.body.removeEventListener('resize', this.onResize)
		},

		methods: {
			onResize() {
				document.querySelector(':root').style.setProperty('--windowHeight', window.innerHeight + "px" );
			}
		}
	};
</script>

<style lang="scss">
	.l-layout-experiment {
		display: grid;
		min-height: 100%;
		overflow: hidden;
		grid-template-rows: 1fr max-content;
		@media (orientation: landscape ) {
			grid-template-rows: initial;
			grid-template-columns: max-content 1fr;
		}

		.l-layout-experiment__footer {
			box-sizing: border-box;
			min-height: 6em;
			@media (orientation: landscape ) {
				min-height: none;
				min-width: 6em;
				grid-column: 1;
				grid-row: 1;
			}
		}

		.l-layout-experiment__header {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 3;
			padding-top: space(s);
			padding-left: calc(var(--space) / 2 + 0.3em);
			padding-right: calc(var(--space) / 2 + 0.3em);
			@media (min-width: $mobile) {
				padding-top: space(m);
			}
		}
	}
</style>
