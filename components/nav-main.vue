<template>
    <nav class="c-nav" :class="$device.isDesktop ? 'c-nav--desktop' : 'c-nav--mobile'">
        <nuxt-link class="c-nav__link"
            to="/this"
            active-class=""
            exact-active-class="c-nav__link--active">
            <span class="c-nav__link-title">This</span>
            <div class="c-nav__link-shape" @mouseover="mouseover" @mouseleave="mouseleave">
                <svg class="c-nav__link-svg" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax meet">
                    <path class="c-nav__link-path" d="M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"></path>
                </svg>
            </div>
        </nuxt-link>
        <nuxt-link class="c-nav__link"
            to="/you"
            active-class=""
            exact-active-class="c-nav__link--active">
            <span class="c-nav__link-title">You</span>
            <div class="c-nav__link-shape"  @mouseover="mouseover" @mouseleave="mouseleave">
                <svg class="c-nav__link-svg" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax meet">
                    <path class="c-nav__link-path" d="M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"></path>
                </svg>
            </div>
        </nuxt-link>
        <nuxt-link class="c-nav__link"
            to="/me"
            active-class=""
            exact-active-class="c-nav__link--active">
            <span class="c-nav__link-title">Me</span>
            <div class="c-nav__link-shape" @mouseover="mouseover" @mouseleave="mouseleave">
                <svg class="c-nav__link-svg" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax meet">
                    <path class="c-nav__link-path" d="M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"></path>
                </svg>
            </div>
        </nuxt-link>
    </nav>
</template>

<script>

	import { svgMouseOver, svgMouseLeave } from '~/assets/scripts/nav.js';

    export default {

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

<style lang="scss">

	.c-nav {
		display: flex;
		justify-content: space-between;

		@media (min-width: $mobile ) {
			padding: space(m);
		}
    }

</style>
