<template>
	<nav class="c-nav c-nav--experiment" :class="$device.isDesktop ? 'c-nav--desktop' : 'c-nav--mobile'">

		<v-popover :placement="popoverPlacement">
			<button class="c-nav__info t-fade">Info</button>
			<div slot="popover">
				<div class="popover-content">
					<p>This is an experiment with the last version of the library D3.js</p>
					<p>I recollect the information from the <a href="https://www.gso.gov.vn/du-lieu-va-so-lieu-thong-ke/2020/11/ket-qua-toan-bo-tong-dieu-tra-dan-so-va-nha-o-nam-2019/" target="_blank">national census</a> and Wikipedia.</p>
				</div>
			</div>
		</v-popover>
		<nuxt-link class="c-nav__link"
			to="/this"
			active-class=""
			exact-active-class="c-nav__link--active">
			<span class="c-nav__link-title">This</span>
			<span class="c-nav__link-shape" @mouseover="mouseover" @mouseleave="mouseleave">
				<svg class="c-nav__link-svg" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax meet">
					<path class="c-nav__link-path" d="M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"></path>
				</svg>
			</span>
		</nuxt-link>
	</nav>
</template>

<script>

	import { svgMouseOver, svgMouseLeave } from '~/assets/scripts/nav.js';

	export default {
		data() {
			return {
				popoverPlacement : 'top'
			}
		},
		mounted() {
			this.popoverPlacement = window.innerHeight > window.innerWidth ? 'top' : 'right';
		},
		methods: {

			mouseover(event) {
				const anime = this.$anime;
				svgMouseOver(event, anime);
			},

            mouseleave(event) {
				const anime = this.$anime;
				svgMouseLeave(event, anime);
			}
		}
	}

</script>

<style lang="scss" scoped>

.c-nav {
	display: flex;
	height: 100%;
	justify-content: flex-end;
	flex-direction: row-reverse;
	gap: space(s);

	@media (orientation: landscape) {
		flex-direction: column;
	}

	@media (min-width: $mobile ) {
		padding: space(m) space(s);
	}

	&__control {

		&-svg {
			position: relative;
			z-index: 2;
			pointer-events: none;
			width: 1.5em;
			height: 1.5em;
			stroke-width: 1;
			stroke: $white;
		}
		.c-nav__link-path {
			fill: $black;
			stroke: $black;
		}
		&.is-active {
			.c-nav__link-path {
				fill: #ed1c24;
				stroke: #ed1c24;
			}
		}
	}

	&__info {
		padding: space(xs);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (orientation: landscape) {
			padding: space(xs) 0;
		}

		.open &,
		&:hover {
			text-decoration: underline;
		}
	}
}

</style>
