import * as d3 from 'd3/dist/d3.min.js'
import * as topojson from 'topojson-client';
// import { ethnics } from './ethnics';


export default class Map {
	constructor(_name, _data) {
		this.name = _name,
		this.mapData = _data

		this.initMap()
	}

	initMap() {
		const self = this;

		// map config
		self.width = document.querySelector(`#js-${this.name}`).offsetWidth;
		self.height = document.querySelector(`#js-${this.name}`).offsetHeight;

		const projectionCenter = [106.34899620666437, 16.553160650957434];
		const projectionScale = [2500];
		const projectionOffset = [self.width / 2, self.height / 2 - 20];
		const projection = d3.geoMercator()
			.translate(projectionOffset)
			.scale(projectionScale)
			.center(projectionCenter);

		const path = d3.geoPath().projection(projection);

		// svg
		const svg = d3.select(`#js-${this.name}`)
			.append('svg')
			.attr('class', `${this.name}-svg`)
			.attr('height', self.height)
			.attr('width', self.width)

		// group
		const country = svg.append("g")
			.attr("class", `${this.name}-country`)
			.attr('stroke-width', 0.6);

		// provinces
		self.provinces = country.selectAll(`.${this.name}-province`)
			.data(topojson.feature(this.mapData, this.mapData.objects.states).features)
			.enter().append('path')
			.attr('class', `${this.name}-province`)
			.attr('data-name', (d) => d.properties.name)
			.attr('data-region', (d) => d.properties.region )
			.attr('d', path)
			.on('mouseover', (e) => d3.select(e.target).classed('is-highlight', true) )
			.on('mouseleave', (e) => d3.select(e.target).classed('is-highlight', false) )
			.append('title')
			.text(d => d.properties.name)

		// free zoom
		const dims = {
			width: self.width,
			height: self.height,
			svg_dx: 100,
			svg_dy: 100
		};
		const zoom = d3.zoom()
			.extent([[dims.svg_dx, dims.svg_dy], [dims.width-(dims.svg_dx*2), dims.height-dims.svg_dy]])
			.scaleExtent([1, 10])
			.translateExtent([[dims.svg_dx, dims.svg_dy], [dims.width-(dims.svg_dx*2), dims.height-dims.svg_dy]])
			.on('zoom', zoomed);

		svg.call(zoom);
		function zoomed(e) {
			const t = e.transform;
			country.attr('transform',`translate(${[t.x, t.y]})scale(${t.k})`);
			country.attr('stroke-width', 0.6 - (t.k * 0.05) + 'px');
		}
	}

	provincesActivation(provinces) {
		//reset
		d3.selectAll(`.${this.name}-province`).classed('is-active', false);
		//active
		provinces.map( province => {
			d3.select(`[data-name='${province.name}']`)
				.classed('is-active', true)
		})
	}
}

