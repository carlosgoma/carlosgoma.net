<template>
	<nav class="c-nav c-nav--experiment" :class="$device.isDesktop ? 'c-nav--desktop' : 'c-nav--mobile'">

		<div class="c-nav__controls t-fade">
			<button class="c-nav__link c-nav__control zoomButton" title="Zoom in" data-type="next" data-root=".zoomViewport" disabled>
				<svg class="c-nav__control-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
					width="20" height="20"
					viewBox="0 0 20 20" xml:space="preserve">
					<line x1="10.1" y1="1" x2="10.1" y2="19.1"/>
					<line x1="19.1" y1="10.1" x2="1" y2="10.1"/>
				</svg>
				<span class="c-nav__link-shape" @mouseover="mouseover" @mouseleave="mouseleave">
					<svg class="c-nav__link-svg" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax meet">
						<path class="c-nav__link-path" d="M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"></path>
					</svg>
				</span>
			</button>
			<button class="c-nav__link c-nav__control zoomButton" title="Zoom out" data-type="prev" data-root=".zoomViewport" disabled>
				<svg class="c-nav__control-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
					width="20" height="20"
					viewBox="0 0 20 20" xml:space="preserve">
					<line x1="19.1" y1="10.1" x2="1" y2="10.1"/>
				</svg>
				<span class="c-nav__link-shape" @mouseover="mouseover" @mouseleave="mouseleave">
					<svg class="c-nav__link-svg" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax meet">
						<path class="c-nav__link-path" d="M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"></path>
					</svg>
				</span>
			</button>
		</div>

		<v-popover :placement="popoverPlacement">
			<button class="c-nav__info t-fade">Info</button>
			<div slot="popover">
				<div class="popover-content">
					<p>Inspired by Istvan Banyai’s comic book <cite>Zoom</cite>. It’s a funny effect with a lot of surprising potential.</p>
					<p>I drew it and made the zoom out effect with the <cite>Zoomooz.js</cite> library.</p>
					<p><cite>Snap.svg</cite> helps me with the svg animations and <cite>Snow.js</cite> with the snow simulation.</p>
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
	position: relative;

	@media (orientation: portrait) {
		&::before{
			content: "";
			position: absolute;
			top: 0.7em;
			width: 3em;
			background-color: #ddd;
			border-radius: .1em;
			height: .3em;
			left: calc(50% - 1.5em);
		}
	}

	@media (orientation: landscape) {
		flex-direction: column;
	}

	@media (min-width: $mobile ) {
		padding: space(m) space(s);
	}

	&__controls {
		display: flex;
		gap: space(s);
		flex-direction: column;

		@media (max-width: $mobile) {
			@media ( orientation: portrait ) {
				margin-left: auto;
			}
			[data-type=next] {
				display: none;
			}
			&--back {
				[data-type=next] {
					display: flex;
				}
				[data-type=prev] {
					display: none;
				}
			}
		}
	}

	&__control {
		flex: 0 0 auto;

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
