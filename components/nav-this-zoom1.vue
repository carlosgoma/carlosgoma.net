<template>
	<nav class="c-nav c-nav--experiment" :class="$device.isDesktop ? 'c-nav--desktop' : 'c-nav--mobile'">

		<v-popover placement="right">
			<button class="c-nav__info t-fade">Info</button>
			<div slot="popover">
				<div class="popover-content">
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				</div>
			</div>
		</v-popover>
		<div class="t-fade">
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
		</div>
		<div class="t-fade">
			<button class="c-nav__link c-nav__control zoomButton" title="Zoom out" data-type="prev" data-root=".zoomViewport">
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

	export default {

		methods: {

			rotation: function (event) {

				let radian = Math.atan2(event.offsetX - event.target.offsetWidth / 2, event.offsetY - event.target.offsetHeight / 2);
				let rotation = (radian * (180/ Math.PI) * -1) + 0;
				event.target.getElementsByTagName("svg")[0].style.transform = `rotate(${Math.floor(rotation)}deg)`;
			},

			mouseover: function (event) {

				this.rotation(event);

				this.$anime({
					targets: event.target.getElementsByTagName("path")[0],
					d: [
						{ easing: "easeInOutBack", value: "M83,45c0,8.8,-6.3,16.9,-11.6,23c-6.4,7.4,-15.9,1,-26.4,1s-20,6.4,-26.4,-1c-5.3,-6.1,-11.6,-14.2,-11.6,-23c0,-19.3,18.7,-35,38,-35s38,15.7,38,35z"},
						{ easing: "easeOutElastic(1, .6)", value: "M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"},
					],
					begin: function() {
						event.target.parentNode.classList.add("is-over");
					},
					duration: 400,
				});
			},

			mouseleave: function (event) {

				this.rotation(event);

				this.$anime.running.length = 0;

				this.$anime({
					targets: event.target.getElementsByTagName("path")[0],
					d: [
						{ duration: 100, easing: "easeOutBack", value: "M78,45c0,8.8,-5.3,16.9,-10.6,23c-6.4,7.4,-11.9,19,-22.4,19s-16,-11.6,-22.4,-19c-5.3,-6.1,-10.6,-14.2,-10.6,-23c0,-19.3,13.7,-35,33,-35s33,15.7,33,35z"},
						{ easing: "easeOutBack", value: "M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"},
					],
					begin: function() {
						event.target.parentNode.classList.remove("is-over");
					},
					duration: 300,
				});
			},
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
