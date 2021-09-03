<template>
	<nav class="c-nav c-nav--experiment" :class="$device.isDesktop ? 'c-nav--desktop' : 'c-nav--mobile'">

		<button class="c-nav__minorities-action" v-if="$device.isMobile" @click="showList()">
			Map <span :class="['o-switch', {'is-active': isListVisible}]"></span> List
		</button>

		<v-popover :placement="popoverPlacement">
			<button class="c-nav__info t-fade">Info</button>
			<div slot="popover">
				<div class="popover-content">
					<p>This is an experiment in data visualization with the library <cite>D3.js</cite> (v.7).</p>
					<p>Here you are an interactive map with the census of the 54 recognized ethnic groups in Vietnam.</p>
					<p>I recollected the information from the <a href="https://www.gso.gov.vn/du-lieu-va-so-lieu-thong-ke/2020/11/ket-qua-toan-bo-tong-dieu-tra-dan-so-va-nha-o-nam-2019/" target="_blank">national census</a> and Wikipedia.</p>
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
				popoverPlacement : 'top',
				isListVisible: false
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
			},

			showList() {
				this.isListVisible ?
					document.querySelector('.p-minorities__grid').classList.remove("p-minorities__grid--show-list")
				:
					document.querySelector('.p-minorities__grid').classList.add("p-minorities__grid--show-list");

				this.isListVisible = !this.isListVisible;
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

	&__minorities-action {
		margin-left: auto;

		@media (orientation: landscape) {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0;
			.o-switch {
				margin: .3em;
			}
		}
	}
}

.o-switch {
	display: inline-block;
	height: 1em;
	width: 2em;
	background: $gray-medium;
	box-shadow: inset 0 0 6px rgba(0, 0, 0, .3), inset 0 0 0 1px rgba(0, 0, 0, .2);
	position: relative;
	margin: 0 .4em;
	vertical-align: middle;
	border-radius: .5em;
	&::before {
		content: '';
		width: 1em;
		height: 1em;
		position: absolute;
		left: 0;
		background: $white;
		box-shadow: 0 0 0 1px $gray;
		border-radius: 50%;
		transition: left .2s;
		will-change: left;

	}
	&.is-active:before {
		left: 1em;
	}
}

</style>
