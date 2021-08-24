<template>
	<div :class="['c-logo', 'c-logo--' + $route.name]" v-on:mouseenter="startAnime">
		<nuxt-link class="c-logo__link" to="/" active-class="" exact-active-class="c-logo__link--active">
				<svg class="c-logo__svg"
					x="0px" y="0px"
					width="60" height="60"
					viewBox="0 0 140 140"
					xml:space="preserve"
					style="overflow: visible">
					<path class="c-logo__svg-g" d="M70,35c0,19.3-15.7,35-35,35S0,54.3,0,35S15.7,0,35,0v35H70z"/>
					<path class="c-logo__svg-o" d="M140,35c0,9.7,-3.9,18.4,-10.3,24.7c-6.3,6.3,-15.1,10.3,-24.7,10.3s-18.4,-3.9,-24.7,-10.3c-6.4,-6.3,-10.3,-15,-10.3,-24.7s3.9,-18.4,10.3,-24.7c6.3,-6.4,15,-10.3,24.7,-10.3s18.4,3.9,24.7,10.3c6.4,6.3,10.3,15,10.3,24.7z"/>
					<polygon class="c-logo__svg-m" points="70,140 0,140 0,70 35,105 70,70 "/>
					<polygon class="c-logo__svg-a" points="105,70 70,140 140,140 "/>
				</svg>
				<div :class="['c-logo__title',  isExperimentPage ? 'c-logo__title--vertical': 'c-logo__title--horizontal']">
					<h1 v-if="this.$route.name == 'index'">
						carlosgoma.net
					</h1>
					<span v-else>
						carlosgoma.net
					</span>
				</div>
		</nuxt-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isExperimentPage: this.$route.name == 'this-anaglyph1' || this.$route.name == 'this-zoom1'
			}
		},
		methods: {
			startAnime: function() {

				if ( ! this.isExperimentPage ) {
					this.$anime({
						targets: '.c-logo__svg-o',
						d: [
							{ duration: 400, easing: "easeInOutQuart", value: "M139,55c0,9.7,-0.9,19.4,-7.3,25.7c-6.3,6.3,-17.1,-10.7,-26.7,-10.7s-21.4,16.1,-27.7,9.7c-6.4,-6.3,-6.3,-15,-6.3,-24.7s2.9,-22.4,9.3,-28.7c6.3,-6.4,15,-11.3,24.7,-11.3s18.4,4.9,24.7,11.3c6.4,6.3,9.3,19,9.3,28.7z"},
							{ duration: 200, easing: "easeOutQuart", value: "M132,-1c0,9.7,1.1,18.4,-5.3,24.7c-6.3,6.4,-12,10.3,-21.7,10.3s-14.4,-3.9,-20.7,-10.3c-6.4,-6.3,-6.3,-15,-6.3,-24.7s-1.1,-20.4,5.3,-26.7c6.3,-6.4,12,-10.3,21.7,-10.3s15.4,3.9,21.7,10.3c6.4,6.3,5.3,17,5.3,26.7z"},
							{ duration: 100, easing: "easeInOutSine", value: "M144,-1c0,9.7,-0.9,11.4,-7.3,17.7c-6.3,6.4,-22,7.3,-31.7,7.3s-24.4,-1.9,-30.7,-8.3c-6.4,-6.3,-8.3,-7,-8.3,-16.7s0.9,-13.4,7.3,-19.7c6.3,-6.4,22,-7.3,31.7,-7.3s25.4,0.9,31.7,7.3c6.4,6.3,7.3,10,7.3,19.7z"},
							{ duration: 500, easing: "easeOutBounce", value: "M140,35c0,9.7,-3.9,18.4,-10.3,24.7c-6.3,6.3,-15.1,10.3,-24.7,10.3s-18.4,-3.9,-24.7,-10.3c-6.4,-6.3,-10.3,-15,-10.3,-24.7s3.9,-18.4,10.3,-24.7c6.3,-6.4,15,-10.3,24.7,-10.3s18.4,3.9,24.7,10.3c6.4,6.3,10.3,15,10.3,24.7z"}
						],
						duration: 1300,
					})
				}
			}
		}
	}
</script>

<style lang="scss">

	.c-logo {
		position: relative;
		z-index: 3;
		pointer-events: auto;
		width: 3.2em;

		@media ( min-width: $mobile ) {
			width: 3.4em;
		}

		&__link {
			display: flex;
			text-decoration: none;
			color: $black;
			font-size: .75em;
			letter-spacing: 0.02em;
			line-height: 1;
		}

		&__svg {
			display: block;
			width: 100%;
			height: auto;
		}

		&__title {
			position: absolute;
			opacity: 0;
			pointer-events: none;

			&--vertical {
				top: calc(100% + var(--space) / 2);
				writing-mode: vertical-lr;
				transform: translateY(20px);
				@media (min-width: $mobile) {
					display: none;
				}

				.c-logo:hover & {
					transform: translateY(0);
					transition: .6s;
					opacity: 1;
				}
			}
			&--horizontal {
				top: calc(100% + .5em);
				transform: translateX(1em);

				.c-logo:hover & {
					transition: .6s;
					opacity: 1;
					transform: translateX(0);
					animation: .3s bounce .9s;

					@keyframes bounce {
						0% { transform: translateY(0) }
						10% { transform: translateY(4px) }
						40% { transform: translateY(-3px) }
						60% { transform: translateY(2px) }
						70% { transform: translateY(-2px) }
						100% { transform: translateY(1px) }
					}
				}
			}
		}

		&--this-anaglyph {
			&:hover {
				.c-logo__svg-o {
					transition: .3s ease-out;
					transform: translateY(-20px);
					filter: drop-shadow(9px 9px $blue);
					fill: #ed1c24;
				}
			}

			@media (orientation: portrait) {
				color: $white;
				svg {
					fill: $white
				}
			}
		}
		&--this-zoom1 {
			&:hover {
				.c-logo__svg-o {
					transition: transform .5s;
					transform: translate(37%, 2%) scale(0.5);
				}
			}
		}
	}

</style>
