<template>
	<article class="p-minorities" role="article" itemscope itemtype="http://schema.org/WebPage">

		<h1 class="p-minorities__title o-title--secundary"><span>Minorities Report</span></h1>

		<div class="p-minorities__grid">

			<div id="js-p-minorities__map" class="p-minorities__map"></div>

			<section class="p-minorities__graphic">
				<div class="p-minorities__graphic-header">
					<h2 class="p-minorities__graphic-title">{{donut.title}}</h2>
					<small>{{donut.category}}</small>
				</div>
				<div class="p-minorities__graphic-body">
					<svg id="js-minorities__pie" class="p-minorities__pie" width="200" height="200" viewBox="0 0 200 200"></svg>
				</div>
			</section>

			<section class="p-minorities__groups">
				<client-only placeholder="Loading...">
					<div class="p-minorities__groups-scroll">
						<div class="p-minorities__group" v-for="(family, i) in hierarchyData" :key="i" v-show="groupVisiblity(family)">

							<h3 class="p-minorities__group-title o-title--secundary">
								{{family[0]}}
							</h3>

							<ul class="p-minorities__ethnics">
								<li class="p-minorities__ethnic" v-for="(ethnic, i) in family[1]" :key="i" v-show="ethnic.visible">
									<button :class="['p-minorities__ethnic-btn', {'is-active': ethnic.name === ethnicActive}]"
										@click="ethnicActivation(ethnic)">
										{{ethnic.name}}
									</button>
									<a :href="ethnic.url" target="_blank" class="p-minorities__ethnic-link" :title="`${ethnic.name} - Wikipedia`">
										<svg width="14" height="14" viewBox="0 0 24 24">
											<use href="#use-link" />
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</client-only>
			</section>
		</div>

		<svg style="display:none" width="24" height="24" viewBox="0 0 24 24"><path id="use-link" d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z"/></svg>
	</article>
</template>

<script>
	import * as d3 from 'd3/dist/d3.min.js';
	import Map from '~/assets/scripts/minorities/Map';
	import Pie from '~/assets/scripts/minorities/Pie';
	import { data } from '~/assets/scripts/minorities/ethnics';
	import census from '~/assets/scripts/minorities/census.json';
	import vietnam from '~/assets/scripts/minorities/vietnam.json';

	export default {
		layout: 'experiment',
		transition: {
			name:'experiment'
		},

		head () {
			return {
				title: 'Minorities Report',
				meta: [
					{ hid: 'description', name: 'description', content: 'D3.js experiment'},
					{ hid: 'notranslate', name: 'google', content: 'notranslate'}
				]
			}
		},

		data() {
			return {
				reloadMap: null,
				ethnicData: data,
				ethnicActive: '',
				donut: {
					title: '',
					category: '',
					census: null,
					data: []
				}
			}
		},

		computed: {
			hierarchyData : function() {
				return d3.group( this.ethnicData, d => d.family);
			}
		},

		mounted() {
			this.map = new Map('p-minorities__map', vietnam);
			this.pie = new Pie('p-minorities__pie', null);
			this.mapInteraction();
			window.addEventListener('resize', this.windowReize);

		},

		unmounted() {
			window.removeEventListener("resize", this.windowReize);
		},

		methods: {

			ethnicActivation(ethnic) {
				this.ethnicActive = ethnic.name;
				this.map.provincesActivation(Object.values(ethnic.distribution))
				this.donutUpdate(ethnic.name, ethnic.category, ethnic.census, ethnic.distribution);
			},

			groupVisiblity: function(family) {
				let visible = false;
				family[1].forEach( ethnic => {
					if ( ethnic.visible ) { visible = true }
				})
				return visible;
			},

			ethnicVisibility(provinceData) {
				let provinceSelected = provinceData ? provinceData.name : null;;
				let provinceCategory = provinceData ? provinceData.alt_types : null;
				const dataDonut = []
				let dataDonutEl = {};

				this.ethnicData.forEach( ethnic => {
					if ( provinceData ) {
						ethnic.distribution.every( location => {
							if ( location.name === provinceSelected ) {
								ethnic.visible = true;
								dataDonutEl['name'] = ethnic.name;
								dataDonutEl['value'] = location.value;
								dataDonut.push(dataDonutEl);
							} else {
								ethnic.visible = false;
							}
						})
					} else {
						ethnic.visible = true;
					}
				});
				this.donutUpdate(provinceSelected, provinceCategory, null, dataDonut);
			},

			mapInteraction() {
				d3.selectAll('.p-minorities__map-province').on('click', (e, d) => {
					e.stopPropagation();
					this.map.provincesActivation([d.properties.name])
					this.ethnicActive = {};
					this.ethnicVisibility(d.properties)
				})
				d3.select('.p-minorities__map-svg').on('click', () => {
					this.map.provincesActivation([])
					this.ethnicActive = {};
					this.ethnicVisibility(null)
					this.donutUpdate()
				})
			},

			donutUpdate(name = '', category = '', census = null, data = []) {
				this.donut.title = name;
				this.donut.category = category;
				this.donut.census = census;
				this.donut.data = data;

				console.log(this.donut);
				this.pie.updatePie(this.donut.data)
			},

			windowReize() {
				clearTimeout(this.reloadMap);
				this.reloadMap = setTimeout(() => {
					console.log('resized');
				}, 500);
			}
		}

	}
</script>

<style lang="scss">

	.p-minorities {
		$color-active: #ffff7a;
		$color-hover: lighten($color-active, 15%);

		height: 100%;
		padding: space(m);
		display: grid;
		gap: space(s);
		box-shadow: inset 20px 0 15px -15px rgba(0,0,0, .1);
		grid-template-rows: max-content 1fr;
		background-color: #eff3f8;

		&__grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr max-content;
			border: 1px solid $gray;
		}

		&__map {
			grid-row: 1/3;
			width: 100%;
			height: 100%;
			outline: 1px solid $gray;
			position: relative;
			z-index: 2;

			&-svg {
				position: absolute;
			}

			&-country {
				stroke: #222;
			}

			&-province {
				cursor: pointer;
				@for $i from 1 through 8 {
					&[data-region="#{$i}"] {
						fill: adjust-hue(#b7cfe0, $i * 30deg)
					}
				}

				&.is-highlight {
					fill: $color-hover;
				}
				&.is-active {
					fill: $color-active;
				}
			}
		}

		&__graphic {
			border-top: 1px solid $gray;
			grid-row: 2;
			grid-column: 2/3;
			background: $white;
			padding: space(s) space(m);
			display: grid;
			gap: space(s);

			&-header {
				display: flex;
				align-items: baseline;
				gap: space(s);
			}
			&-title {
				font-weight: bold;
			}
		}

		&__pie {
			display: block;
		}

		&__groups {
			position: relative;
			grid-row: 1;
			grid-column: 2/3;
			background-color: $white;
			&-scroll {
				position: absolute;
				height: 100%;
				width: 100%;
				padding: space(s);
				overflow-y: scroll;
			}
		}
		&__group {
			padding: space(s);
			display: grid;
			gap: space(s);
			&-title {
				display: flex;
				align-items: center;
				&::after {
					content: '';
					margin-left: space(s);
					flex: 1;
					border-bottom: 1px dashed $gray;
				}
			}
		}
		&__ethnic {
			background-color: $white;
			display: flex;

			& + & {
				border-top: 1px solid $gray-light;
			}

			&:hover {
				position: relative;
				z-index: 1;
			}

			&-btn {
				flex: 1 1 auto;
				text-align: left;
				padding: space(s) space(s);
				line-height: 1.4;
				&:hover {
					background-color: $color-hover;
				}
				&.is-active {
					background-color: $color-active;
				}
			}
			&-link {
				padding: space(s) space(s);
				display: flex;
				align-items: center;
				&:hover {
					outline: 1px solid $gray;
				}
			}

		}
	}

</style>
