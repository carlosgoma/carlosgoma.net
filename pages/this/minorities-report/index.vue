<template>
	<article class="p-minoritiesreport" role="article" itemscope itemtype="http://schema.org/WebPage">

		<h1>Minorities Report</h1>

		<div id="js-d3map" class="p-minoritiesreport__map"></div>

	</article>
</template>

<script>
	import {map} from '../../../assets/scripts/vietnamMap';

	export default {
		layout: 'experiment',
		transition: {
			name:'experiment'
		},

		head () {
			return {
				title: 'Minorities Report',
				meta: [
					{ hid: 'description', name: 'description', content: 'D3.js experiment'}
				],
				script: [
					{
						hid: 'd3',
						src: '/scripts/d3.min.js',
						defer: true,
						callback: () => this.getmap()
					},
					{
						hid: 'topojson',
						src: '/scripts/topojson.min.js',
						defer: true
					}
				]
			}
		},

		data() {
			return {
				isScriptLoaded: false
			}
		},


		methods: {

			getmap() {
				console.log('se carga?');
				map();
			}
		}

	}
</script>

<style lang="scss">

	.p-minoritiesreport {
		height: 100%;
		background-color: #eee;
	}

	.overlay {
		fill: transparent;
	}

	/* On mouse hover, lighten state color */

	.feature:hover {
	fill: yellow;
	fill-opacity: .35;
	}
	.active .feature {
	fill: yellow;
	opacity: 0.75;
	}

	.city-label {
	font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
	pointer-events: none;
	fill: #444;
	fill-opacity: .75;
	}

	.state-label {
	fill: #777 !important;
	fill-opacity: .5;
	font-size: 8px;
	text-anchor: middle;
	pointer-events: none;
	}

	.country-boundary {
	fill: none;
	stroke: #37C3BC;
	stroke-linejoin: round;
	}

	.state-boundary {
	fill: none;
	stroke: #003568;
	stroke-dasharray: 5, 3;
	stroke-linejoin: round;
	stroke-linecap: round;
	vector-effect: non-scaling-stroke;
	}


	/* http://colorbrewer2.org/ */

	.q0-9 {
	fill: #F7FCF0;
	}

	.q1-9 {
	fill: #E0F3DB;
	}

	.q2-9 {
	fill: #CCEBC5;
	}

	.q3-9 {
	fill: #A8DDB5;
	}

	.q4-9 {
	/* lighten #7BCCC4 */
	fill: #BBF3FF;
	}

	.q5-9 {
	/* lighten #4EB3D3 */
	fill: #A1D9FF;
	}

	.q6-9 {
	/* lighten #2B8CBE */
	fill: #87BFFF;
	}

	.q7-9 {
	/* lighten #0868AC */
	fill: #6EA6E7;
	}

	.q8-9 {
	/* lighten #084081 */
	fill: #558DCE;
	}

	.state-label.q5-9 {
	fill: #A8DDB5 !important;
	}

	.state-label.q6-9 {
	fill: #CCEBC5 !important;
	}

	.state-label.q7-9 {
	fill: #E0F3DB !important;
	}

	.state-label.q8-9 {
	fill: #F7FCF0 !important;
	}

</style>
