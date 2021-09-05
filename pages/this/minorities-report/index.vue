<template>
	<article class="p-minorities" role="article" ref="content" itemscope itemtype="http://schema.org/WebPage">

		<div class="p-minorities__grid">

			<div class="p-minorities__map">
				<svg id="js-map-svg" class="p-minorities__map-svg"></svg>
			</div>

			<section class="p-minorities__graphic" v-show="active.type">
				<div class="p-minorities__graphic-header">
					<h2 class="p-minorities__graphic-title">{{active.value}}</h2>
					<small>{{active.type === 'province' ? `${active.category}` : active.category}}</small>
					<small v-if="active.type === 'province'" class="p-minorities__graphic-population">{{`Population: ${(provincesPopulation[active.value]).toLocaleString()}`}}</small>
				</div>

				<div class="p-minorities__graphic-body">

					<div class="p-minorities__pie">
						<svg id="js-pie-svg" class="p-minorities__pie-svg" width="180" height="180" viewBox="0 0 200 200"></svg>
						<ul id="js-pie-leyend" class="p-minorities__pie-leyend"></ul>
					</div>

					<picture v-if="active.img" class="p-minorities__graphic-picture">
						<img
							class="p-minorities__graphic-img"
							:src="require(`~/assets/images/minorities/${active.img}`)" :alt="active.value">
					</picture>
				</div>
			</section>

			<section class="p-minorities__groups">
				<div class="p-minorities__groups-scroll" ref="scroll">
					<header class="p-minorities__groups-header">
						<div>
							<h1 class="p-minorities__groups-title o-title--secundary"><span>Minorities Report</span></h1>
						</div>
						<div class="p-minorities__groups-btns">
							<button class="p-minorities__groups-btn"
								:disabled="active.type ? false : true"
								@click="active = { type: '', value: '', category: ''}">Reset</button>
							<div class="p-minorities__dropdown">
								<button :class="['p-minorities__groups-btn p-minorities__dropdown-btn', {'is-active': isDropdownOpen }]"
									@click.stop="isDropdownOpen = !isDropdownOpen">Sort by: {{order}}</button>
								<div class="p-minorities__dropdown-content" v-if="isDropdownOpen">
									<button :disabled="order === 'Census'" @click="changeOrder('Census')">
										<svg width="24" height="24" viewBox="0 0 24 24"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg> Population census
									</button>
									<button :disabled="order === 'Family'" @click="changeOrder('Family')">
										<svg width="24" height="24" viewBox="0 0 24 24"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg> Language family
									</button>
								</div>
							</div>
						</div>
					</header>
					<client-only placeholder="Loading...">
						<small class="p-minorities__groups-th">{{active.type === 'province' ? `Number of people in ${active.value}` : 'Number of people'}}</small>
						<section class="p-minorities__groups-content" v-if="order === 'Family'">
							<div class="p-minorities__group" v-for="(family, i) in hierarchyData" :key="i">
								<h2 class="p-minorities__group-title">
									{{family[0]}}
								</h2>
								<ul class="p-minorities__ethnics">
									<li class="p-minorities__ethnic" v-for="(ethnic, i) in family[1]" :key="i">
										<button :class="['p-minorities__ethnic-btn', {'is-active': ethnic.name === active.value}]"
											@click="ethnicInteraction(ethnic)">
											{{ethnic.name}}
											<small class="p-minorities__ethnic-census" :title="active.type === 'province' ? `Number of people in ${active.value}` :`Number of people`" v-if="ethnic.census">
												{{ (ethnic.census).toLocaleString() }}
											</small>
										</button>
										<a :href="ethnic.url" target="_blank" class="p-minorities__ethnic-link" :title="`${ethnic.name} - Wikipedia`">
											<svg width="14" height="14" viewBox="0 0 24 24">
												<use href="#use-link" />
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</section>
						<section class="p-minorities__groups-content p-minorities__groups-content--census" v-else>
							<ul class="p-minorities__ethnics">
								<li class="p-minorities__ethnic" v-for="(ethnic, i) in hierarchyData" :key="i" :data-ethnicity="ethnic.name">
									<button :class="['p-minorities__ethnic-btn', {'is-active': ethnic.name === active.value}]"
										@click="ethnicInteraction(ethnic)">
										{{ethnic.name}}
										<small class="p-minorities__ethnic-census" :title="active.type === 'province' ? `Number of people in ${active.value}` :`Number of people`" v-if="ethnic.census">
											{{ (ethnic.census).toLocaleString() }}
										</small>
									</button>
									<a :href="ethnic.url" target="_blank" class="p-minorities__ethnic-link" :title="`${ethnic.name} - Wikipedia`">
										<svg width="14" height="14" viewBox="0 0 24 24">
											<use href="#use-link" />
										</svg>
									</a>
								</li>
							</ul>
						</section>


					</client-only>
				</div>
			</section>
		</div>

		<div class="p-minorities__tooltip"></div>

		<svg style="display:none" width="24" height="24" viewBox="0 0 24 24"><path id="use-link" d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z"/></svg>
	</article>
</template>

<script>
	import * as d3 from 'd3/dist/d3.min.js';
	import Map from '~/assets/scripts/minorities/Map';
	import Pie from '~/assets/scripts/minorities/Pie';
	import { dataEthnics } from '~/assets/scripts/minorities/ethnics';
	import vietnam from '~/assets/scripts/minorities/vietnam.json';
	import census from '~/assets/scripts/minorities/census.json';
	import populationEthnics from '~/assets/scripts/minorities/populationEthnics.json';
	import populationProvinces from '~/assets/scripts/minorities/populationProvinces.json';

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
				setTimeout: null,
				provincesPopulation: populationProvinces,
				ethnicData: dataEthnics,
				order: 'Census',
				isDropdownOpen: false,
				active: {
					type: '',
					value: '',
					category: '',
					img: ''
				},
			}
		},

		computed: {
			hierarchyData : function() {
				if( this.order === 'Family') {
					return d3.group( this.ethnicData, d => d.family);
				}
				if( this.order === 'Census') {
					return this.ethnicData.sort((a, b) => b.census - a.census)
				}
			}
		},

		watch: {
			active: function() {
				this.map.updateMap(this.active);
				this.pie.updatePie(this.active);

				if ( this.active.type === 'province') {
					this.ethnicData.forEach( ethnic => ethnic.census = census[ethnic.name][this.active.value] )
				} else {
					this.ethnicData.forEach( ethnic => ethnic.census = populationEthnics[ethnic.name])
				}
			}
		},

		mounted() {
			this.map = new Map('p-minorities__map', vietnam);
			this.pie = new Pie('p-minorities__pie', null);
			this.mapInteraction();

			window.addEventListener('click', this.closeDropdown)
			window.addEventListener('resize', this.reloadMap);
		},

		destroyed() {
			window.removeEventListener('click', this.closeDropdown)
			window.removeEventListener("resize", this.reloadMap);
		},

		methods: {

			changeOrder(order) {
				this.order = order;
			},

			closeDropdown() {
				this.isDropdownOpen ? this.isDropdownOpen = false : null
			},

			ethnicInteraction(ethnic) {
				let isNecesaryScroll = this.active.type === 'province' ? true : false
				this.active = { type: 'ethnic', value: ethnic.name, category: ethnic.category, img: ethnic.img}

				if( isNecesaryScroll && this.order === 'Census') {
					setTimeout( ()=> {
						document.querySelector(`[data-ethnicity='${ethnic.name}']`).scrollIntoView({behavior: "smooth", block: "center"});
					}, 100)
				}
			},

			mapInteraction() {
				d3.selectAll('.p-minorities__map-province').on('click', (e, d) => {
					e.stopPropagation();
					this.active = { type: 'province', value: d.properties.name, category: d.properties.alt_types, img: '' }
				})
				d3.select('.p-minorities__map-svg').on('click', () => {
					this.active = { type: '', value: '', category: '', img: ''}
				})
			},

			reloadMap() {
				clearTimeout(this.setTimeout);
				this.setTimeout = setTimeout(() => {
					this.map.initMap();
					this.mapInteraction();
					this.map.updateMap(this.active)
				}, 400);
			}
		}

	}
</script>

<style lang="scss">

	.p-minorities {
		$color-active: #ffff7a;
		$color-hover: lighten($color-active, 15%);

		height: 100%;
		display: grid;
		gap: space(s);
		box-shadow: inset 20px 0 15px -15px rgba(0,0,0, .1);
		background-color: #eff3f8;
		max-width: 100vw;
		overflow: hidden;

		@media (orientation: portrait) {
			box-shadow: inset 0 -20px 15px -15px rgba(0,0,0, .1);
		}
		@media (min-width: $mobile) {
			padding: space(m);
		}

		&__dropdown {
			position: relative;

			.is-active {
				background-color: $gray-light;
			}

			&-content {
				position: absolute;
				z-index: 9;
				background-color: $white;
				border: 1px solid $gray-light;
				box-shadow: 0 3px 8px rgba(0,0,0, .1);
				border-radius: .2em;
				top: calc(100% + .5em);
				display: grid;
				min-width: 100%;
				right: 0;
				white-space: nowrap;

				button {
					border-radius: .2em;
					padding: space(s);
					&:hover {
						outline: 1px solid $gray-medium;
					}
					@media (min-width: $mobile) {
						padding: .4em space(s);
					}

					svg {
						width: 1.1em;
						height: 1.1em;
						fill: $gray-medium;
						vertical-align: middle;
						transform: translateX(-0.3em);
						opacity: 0;
					}
					&:disabled {
						pointer-events: none;
						svg { opacity: 1;}
					}
				}
			}
		}

		&__tooltip {
			position: fixed;
			z-index: 9;
			pointer-events: none;
			opacity: 0;
			transition: opacity .1s;
			background: $black;
			color: #fff;
			font-size: font-size(s);
			line-height: 1.6;
			padding: space(xs);
			border-radius: .3em;
			span {
				display: none;
				@media (min-width: $mobile) {
					display: block;
				}
			}
		}

		&__grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr max-content;
			width: 200vw;
			transition: transform .4s;
			will-change: transform;
			width: auto;
			border: 1px solid $gray;

			&--show-list {
				transform: translateX(-100vw);
			}

			@media (max-width: $mobile) {
				width: 200vw;
				border: none;

				@media (orientation: landscape) {
					width: calc( 200vw - 12em);

					&--show-list {
						transform: translateX(calc( -100vw + 6em));
					}
				}
			}

			@media (min-width: $mobile) {
				width: auto;
				border: 1px solid $gray;
			}
		}

		&__map {
			grid-row: 1/3;
			width: 100%;
			height: 100%;
			position: relative;
			z-index: 2;

			@media (min-width: $mobile) {
				outline: 1px solid $gray;
				padding-left: 0;
			}

			&-svg {
				position: absolute;
				width: 100%;
				height: 100%;
			}

			&-country {
				stroke: #222;
			}

			&-province {
				cursor: pointer;
				&.is-highlight {
					fill: $color-hover;
				}
				&.is-active {
					fill: $color-active;
				}
			}
		}

		&__graphic {
			grid-row: 2;
			grid-column: 2/3;
			background: $white;

			&-header {
				display: flex;
				align-items: baseline;
				padding: space(s) space(m);
				gap: space(s);
				border-top: 1px solid $gray;
				border-bottom: 1px solid $gray-light;
			}
			&-title {
				font-weight: bold;
			}
			&-population {
				margin-left: auto;
			}
			&-body {
				display: grid;
				grid-template-columns: max-content 1fr;
			}
			&-picture {
				position: relative;
			}
			&-img{
				position: absolute;
				right: 0;
				height: 100%;
				object-fit: cover;
			}
		}

		&__pie {
			display: grid;
			grid-template-columns: max-content max-content;
			padding: space(s);
			gap: space(s);

			@media (min-width: $mobile) {
				padding: space(m);
			}

			&-svg {
				max-height: 14vh;
				width: auto;

				@media (min-width: $mobile) {
					max-height: 20vh;
				}
			}
			&-svg {
				align-self: center;
			}

			&-leyend {
				font-size: font-size(xs);
				line-height: 1.6;
				display: grid;
				align-items: center;
				li {
					display: flex;
					justify-content: flex-end;
					flex-direction: row-reverse;
					gap: .5em;
				}
				span {
					width: 1.3em;
					border-radius: 50%;
					height: 1.3em;
				}
			}
		}

		&__groups {
			position: relative;
			grid-row: 1;
			grid-column: 2/3;
			background-color: $white;

			.client-only-placeholder {
				padding: space(s);
			}

			&-header {
				display: flex;
				align-items: baseline;
				padding: space(s);
				flex-wrap: wrap;
				gap: space(s);
				justify-content: space-between;

				@media (max-width: $mobile) {
					justify-content: flex-end;
					margin-left: 5em;
				}
			}
			&-th {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding-top: space(s);
				color: $gray;
				&::after {
					content: '';
					width: calc(var(--space) + .7em);
					border-bottom: 1px solid $gray-light;
					margin: 0 space(s);
				}
			}
			&-content {
				&--census {
					padding: space(s);
				}
			}

			&-btns {
				font-size: font-size(s);
				display: flex;
				gap: space(s);
			}
			&-btn {
				padding: .1em .4em;
				border-radius: .2em;
				border: 1px solid transparent;
				&:hover {
					border-color: $gray-medium;
				}
				&:disabled {
					pointer-events: none;
					color: $gray
				}
			}
			&-scroll {
				position: absolute;
				height: 100%;
				width: 100%;
				padding: space(s) 0;
				overflow-y: scroll;

				@media (min-width: $mobile) {
					padding: space(s);
				}
			}
		}
		&__group {
			padding: space(s);
			display: grid;
			gap: space(s);
			&-title {
				text-shadow: 0 0 0 1px;
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
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				gap: space(s);
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
				border-radius: .2em;
				&:hover {
					box-shadow: 0 0 0 1px $gray-medium;
				}
				svg {
					width: .7em;
					height: .7em;
				}
			}
		}
	}

</style>
