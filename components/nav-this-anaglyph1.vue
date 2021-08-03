<template>
	<nav class="c-nav c-nav--experiment" :class="$device.isDesktop ? 'c-nav--desktop' : 'c-nav--mobile'">

		<v-popover placement="right">
			<button class="c-nav__info t-fade">Info</button>
			<div slot="popover">hola</div>
		</v-popover>
		<div class="t-fade">
			<button id="js-action" class="c-nav__link c-nav__control" title="Switch on">
				<svg class="c-nav__control-svg"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<line fill="none" x1="8" y1="1.1" x2="8" y2="9.1"/>
					<path fill="none" d="M4.2,4.7c-1.2,1.1-2,2.7-2,4.4C2.1,12.4,4.8,15,8,15c3.2,0,5.9-2.6,5.9-5.9c0-1.8-0.8-3.4-2-4.4"/>
				</svg>
				<span class="c-nav__link-shape" v-if="$device.isDesktop" @mouseover="mouseover" @mouseleave="mouseleave">
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
			<span class="c-nav__link-shape" v-if="$device.isDesktop" @mouseover="mouseover" @mouseleave="mouseleave">
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
		flex-direction: column;
		justify-content: flex-end;
		gap: space(s);
		padding: space(m) space(s);
		overflow: hidden;

		&__link {
			position: relative;
			z-index: 3;
			pointer-events: auto;
			color: $black;
			width: 65px;
			height: 65px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			transition: color 0s .1s;

			@media (min-width: $mobile ) {
				width: 4em;
				height: 4em;
			}

			&-title {
				position: relative;
				z-index: 2;
				pointer-events: none;
				.is-over & {
					color: $white;
				}
			}

			&-shape {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				border-radius: 50%;
			}
			&-svg {
				transform-origin: 50% 50%;
				position: absolute;
				top: -15%;
				left: -15%;
				right: -15%;
				bottom: -15%;
				pointer-events: none;
			}

			&-path {
				fill: $white;
				stroke: $gray-dark;
				transition: fill .1s;
				stroke-width: 1px;

				.is-over & {
					fill: $black;
					stroke: $black;
				}
			}

			&--active {
				pointer-events: none;
				background-color: $gray-light;
				color: $black;
				.c-nav__link-shape {
					display: none;
				}
			}


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
			padding: space(xs) 0;
			width: 100%;

			.open &,
			&:hover {
				text-decoration: underline;
			}
		}
	}

</style>
