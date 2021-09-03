import * as d3 from 'd3/dist/d3.min.js';
import census from '~/assets/scripts/minorities/census.json';

export default class Pie {

	constructor(_name, _data) {
		this.name = _name,
		this.mapData = _data

		this.initPie()
	}


	initPie() {
		const self = this;

		const data = [
			{name: "cuatro", value: 46466},
			{name: "tres", value: 634523},
			{name: "uno", value: 565656},
		]
		const data2 = [
			{name: "cuatro", value: 46466},
			{name: "tres", value: 46466},
			{name: "uno", value: 565656},
			{name: "cinco", value: 46345},
		]

		// definicion

		const width = 200;
		const height = 200;
		const radius = Math.min(width, height) / 2;

	 	// markup
		this.svg = d3
			.select('#js-pie-svg')

		this.g = this.svg
			.append("g")
			.attr('class', 'arcs')
			.attr('transform', `translate(${radius}, ${radius})`)

		// d3
		this.pie = d3
			.pie()
			.value((d) => d.value)
			.sortValues(null)
			.sort(null);
		this.arc = d3.arc().outerRadius(radius).innerRadius(radius * 0.3);
		this.noSlice = (i) => {
			if ( i === 0 ) {
				return { startAngle: 0, endAngle: Math.PI * 2, padAngle: 0 }
			} else {
				return { startAngle: 0, endAngle: 0, padAngle: 0 }
			}
		}

		this.color = d3.scaleOrdinal(["#ff5e41", "#ffa071", "#ffe57d", "#709FBA", "#3C7FA6"]);

		// Actions
		this.tooltip = d3.select('.p-minorities__tooltip')

		this.onMouseOver = (e) => {
			this.tooltip
				.style("opacity", 1)
				.html(
					`${d3.select(e.target).attr('data-name')} · ${d3.select(e.target).attr('data-percentage')}%`
				)
		}
		this.onMouseMove = (e) => {
			this.tooltip
				.style("left", `${e.x + 5}px`)
				.style("top", `${e.y + 25}px`)
		}
		this.onMouseLeave = (e) => {
			this.tooltip.style("opacity", 0)
		}

	}



	updatePie(active) {

		let data = [];
		let nOthers = 0;
		let nTotal = 0;
		let txtOthers;
		let activeCensus = {};

		if ( active.type === 'ethnic') {

			activeCensus = census[active.value]
			txtOthers = 'Other provinces';
		}
		if ( active.type === 'province') {

			Object.entries(census).forEach(([ethnic, populationData])   => {
				activeCensus[ethnic] = populationData[active.value]
			})
			txtOthers = 'Other ethnicities';
		}

		Object.entries(activeCensus).sort(([,a],[,b]) => b-a).forEach(([key, population], index) => {
			if ( population ) {
				if( index < 4 ) {
					nTotal += +population
					data.push({name: key, value: population})
				} else {
					nOthers += +population
				}
			}
		})
		nTotal += +nOthers
		data.push({name: txtOthers, value: nOthers})

		const self = this;
		const newData = this.pie(data);

		const oldData = this.g.selectAll('path').data();

		function tweenArc(d, i) {
            const interpolate = d3.interpolateObject(oldData[i], d);
            return (t) => self.arc(interpolate(t));
        }

		const path = this.g
			.selectAll('path')
			.data(newData, d => d.data.value)
			.style('fill', d => self.color(d.index))
			.join(
				(enter) => {
					const pathEnter = enter
						.append('path')
						.attr('data-name', (d) => d.data.name)
						.attr('stroke', '#fff')
						.attr('data-percentage', (d) => (d.data.value * 100 / nTotal).toFixed(2) )
						.attr('d', (d, i) => this.arc(this.noSlice(i)))
					return pathEnter;
				},
				(update) => update,
				(exit) => exit.transition().attrTween('d', tweenArc).remove()
			)

		path
			.style('fill', d => self.color(d.index))

		path.transition()
			.attrTween('d', tweenArc)


		path.on('mouseover', (e) => this.onMouseOver(e) )
			.on('mouseleave', (e) => this.onMouseLeave(e) )
			.on('mousemove', (e) => this.onMouseMove(e) )

		// LEYEND

		d3.select('#js-pie-leyend')
			.html('')
			.selectAll('li')
			.data(newData, d => d.data.name)
			.enter().append('li')
			.html( d => d.data.name )
			.append('span')
			.style('background-color', d => self.color(d.index))

	}

}
