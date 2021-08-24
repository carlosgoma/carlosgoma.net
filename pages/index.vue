<template>
	<article class="p-home" role="article" itemscope itemtype="http://schema.org/WebPage">
		<header class="p-home__header">
			<h2 class="p-home__title t-title">
				<span>Just another</span>
				<span>personal website.</span>
			</h2>
		</header>
		<p class="p-home__message t-fade" v-if="$device.isDesktop">
			Based on actual events. More information in your browser <strong>console</strong>.
		</p>
	</article>
</template>

<style lang="scss">

    .p-home {
        display: grid;
        align-items: flex-end;
		height: 100%;

        &__header {
            padding: space(vh) space(s);
			@media ( min-width: $mobile ) {
				padding: space(vh) space(m);
			}
        }
        &__title {
            font-size: font-size(xl);
            line-height: 1.2;
            display: inline-flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
            pointer-events: none;
        }
        &__message {
			display: none;
            position: absolute;
            z-index: 2;
            top: 0;
            right: 0;
            bottom: 0;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            text-align: center;
            color: $font-color-light;
            font-size: font-size(xs);
            transform: rotate(180deg);
			transform-origin: 0;
            letter-spacing: 0.05em;
			@media ( min-width: $mobile ) {
				display: block;
			}
        }
    }

</style>
