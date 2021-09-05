import * as d3 from 'd3/dist/d3.min.js'
import * as topojson from 'topojson-client';
import census from '~/assets/scripts/minorities/census.json';

export default class Map {
	constructor(_name, _data) {
		this.name = _name,
		this.mapData = _data

		this.initMap()
	}

	initMap() {
		const self = this;

		// map config
		this.width = document.getElementById('js-map-svg').clientWidth;
		this.height = document.getElementById('js-map-svg').clientHeight;

		// colors
		this.colorProvinces = d3.scaleOrdinal()
			.domain([1, 2, 3, 4, 5, 6, 7, 8])
			.range(["#b7bbe0", "#c8b7e0", "#ddb7e0", "#e0b7cf", "#e0b7bb", "#e0c8b7", "#e0ddb7", "#cfe0b7"]);

		const projectionCenter = [106.34899620666437, 16.553160650957434];
		const projectionScale = [this.height * 3.4];
		const projectionOffset = [self.width / 2, self.height / 2 - 20];
		const projection = d3.geoMercator()
			.translate(projectionOffset)
			.scale(projectionScale)
			.center(projectionCenter);

		const path = d3.geoPath().projection(projection);

		// svg
		const svg = d3.select(`#js-map-svg`).html('')

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
			.attr('fill', (d) => this.colorProvinces(d.properties.region) )
			.attr('data-region', (d) => d.properties.region )
			.attr('d', path)
			.on('mouseover', (e) => onMouseOver(e) )
			.on('mouseleave', (e) => onMouseLeave(e) )
			.on('mousemove', (e) => onMouseMove(e) )

		// free zoom
		const dims = {
			width: self.width,
			height: self.height,
			svg_dx: 0,
			svg_dy: 0
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

		// Actions
		this.tooltip = d3.select('.p-minorities__tooltip')

		const onMouseOver = (e) => {
			this.tooltip
				.style("opacity", 1)
				.html(
					d3.select(e.target).attr('data-census') ?
						d3.select(e.target).attr('data-census') == "1" ?
							`${d3.select(e.target).attr('data-name')}<span>${d3.select(e.target).attr('data-census')} ${this.ethnic} person</span>`
						:
							`${d3.select(e.target).attr('data-name')}<span>${d3.select(e.target).attr('data-census')} ${this.ethnic} people</span>`
					:
					`${d3.select(e.target).attr('data-name')}`
				)
			d3.select(e.target).classed('is-highlight', true)
		}
		const onMouseMove = (e) => {
			this.tooltip
				.style("left", `${e.x + 5}px`)
				.style("top", `${e.y + 25}px`)
		}
		const onMouseLeave = (e) => {
			this.tooltip.style("opacity", 0)
			d3.select(e.target).classed('is-highlight', false)
		}
	}

	updateMap(active) {

		d3.selectAll(`.${this.name}-province`)
			.classed('is-active', false)
			.attr('data-census', '')
			.attr('fill', (d) => this.colorProvinces( d.properties.region ) )

		if( active.type === 'ethnic') {

			this.ethnic = active.value;
			const censusValues = Object.values(census[this.ethnic]);
			const maxValue = Math.max(...censusValues);
			const colorProvinces = d3.scaleLinear()
				.domain([1, maxValue])
				.range(["#f9e7e5", "#ff5e41"])
				.unknown("#ddd");

			Object.entries(census[this.ethnic]).forEach(( [province, population]) => {
				d3.select(`[data-name='${province}']`)
					.attr('fill', () => population > 0 ? colorProvinces(population) : "#ddd")
					.attr('data-census', population ? population.toLocaleString() : '')
			});
		} else {

			d3.select(`[data-name='${active.value}']`)
				.classed('is-active', true)
		}
	}


}

