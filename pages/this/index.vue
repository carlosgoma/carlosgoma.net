<template>
	<article class="p-this o-grid" role="article" itemscope itemtype="http://schema.org/WebPage">

		<header class="p-this__header o-grid__header">
			<h1 class="p-this__title o-title o-title--main t-title">
				<span>This is my sandbox</span>
			</h1>
		</header>

		<div class="p-this__intro t-section">
			<div class="o-text">
				<p>Here are some experiments I’ve made, basically things that I wanted to implement in real projects but I haven't had the chance to use yet.</p>
			</div>
		</div>

		<experiment-item
			v-for="experiment in experiments"
			:key="experiment.id"
			:experiment="experiment" />

	</article>
</template>

<script>

	export default {

		head: {
			title: 'This',
			meta: [
				{ hid: 'description', name: 'description', content: 'These are my experiments'}
			],
		},

		data() {
			return {
				experiments : [
					// {
					// 	id: 'minorities-report',
					// 	isOut: true,
					// 	url: '/this/minorities-report',
					// 	name: 'Minorities Report',
					// 	img: {
					// 		mobile: 'zoom1-mobile.png',
					// 		desktop: 'zoom1-desktop.png'
					// 	},
					// 	year: '2021',
					// 	info: ['D3.js', 'Vue.js']
					// },
					{
						id: 'zoom1',
						isOut: true,
						url: '/this/zoom1',
						name: 'Zoom #1',
						img: {
							mobile: 'zoom1-mobile.png',
							desktop: 'zoom1-desktop.png'
						},
						year: '2018',
						info: ['Parallax.js', 'Snap.svg', 'Illustration']
					},
					{
						id: 'anaglyph',
						isOut: true,
						url: '/this/anaglyph',
						name: 'Anaglyph',
						img: {
							mobile: 'anaglyph-mobile.png',
							desktop: 'anaglyph-desktop.png'
						},
						year: '2013',
						info: ['Zoomooz.js', 'Snap.svg', 'Illustration']
					}
				]
			}
		},
	}

</script>

<style lang="scss">

	.p-this {
		--page-color: var(--blue-light);

		position: relative;
		z-index: 2;

		&__intro {
			@media ( min-width: $mobile ) {
				grid-column: 2/5;
				grid-row: 2;
				position: relative;
				@include line(left, 0, calc(var(--space) * -3));

				.o-text {
					position: relative;
					@include line(bottom, calc(var(--space) * -1), 80%, true);
				}
			}

		}
	}
</style>
