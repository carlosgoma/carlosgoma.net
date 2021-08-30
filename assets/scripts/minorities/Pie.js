import * as d3 from 'd3/dist/d3.min.js'

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
			.select(`#js-minorities__pie`)

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

		this.color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


	}



	updatePie(data) {
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
						.attr('d', (d, i) => this.arc(this.noSlice(i)))
					pathEnter.append('title')
					return pathEnter;
				},
				(update) => update,
				(exit) => exit.transition().attrTween('d', tweenArc).remove()
			)

		path
			.style('fill', d => self.color(d.index))

		path
			.transition()
			.attrTween('d', tweenArc)

		path.select('title').text(d => d.data.name)
	}












































// ================================================================================


	// initPie() {

	// 	const self = this

	// 	const data = [
	// 		{name: "cuatro", value: 33},
	// 		{name: "tres", value: 33},
	// 		{name: "uno", value: 33},
	// 	]
	// 	const data2 = [
	// 		{name: "cuatro", value: 25},
	// 		{name: "tres", value: 25},
	// 		{name: "uno", value: 50},
	// 	]

	// 	// definicion

	// 	const width = 400;
	// 	const height = 150;
	// 	const radius = Math.min(width, height) / 2;
	// 	this.color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	// 	// pie
	// 	this.pie = d3.pie()
	// 		.sort(null)
	// 		.value(d => d.value)

	// 	// const arcs = this.pie(data);

	// 	this.arc = d3.arc()
	// 		.outerRadius(radius)
	// 		.innerRadius(radius * 0.4);
	// 	// this.outerArc = d3.arc()
	// 	// 	.innerRadius(radius * 0.6)
	// 	// 	.outerRadius(radius * 0.9);

	// 	//svg
	// 	this.svg = d3.select(`#js-minorities__pie`)
	// 		.append("g")
	// 		.attr('class', 'arcs')
	// 		.attr('transform', `translate(${height/2}, ${height/2})`)

	// 	this.arcs = this.svg.selectAll(".arc")
	// 		.data(this.pie(data))
	// 		.enter().append("path")
	// 		.attr('class', 'arc')
	// 		.style('stroke', '#fff')
	// 		.style('fill', d => self.color(d.index))
	// 		.attr('d', this.arc)



	// 	setTimeout(() => {

	// 		this.updateData(data2)
	// 	}, 2000);
	// }


	// 	updateData(data) {

	// 		const self = this

	// 		this.arcs
	// 			.data( this.pie(data), d => d.data.value)
	// 			.join(
	// 			(enter) => {
	// 				enter.insert("path")
	// 				.style("fill",  d => self.color(d.index))
	// 				.attr('class', 'arc')
	// 				.style('stroke', '#fff')
	// 				.attr('d', self.arc)
	// 			},
	// 			(update) => update.transition()
	// 			.duration(750)
	// 			,
	// 			(exit) => {
    //                 exit.remove()
    //             }

	// 		)


	// 	}



// ================================================================================



		// this.updateData(data)


		/* ------- PIE SLICES -------*/
		// svg.append("g")
		// .attr("stroke", "white")
		// .selectAll("path")
		// .data(arcs)
		// .join("path")
		// 	.attr("fill", "#ddd")
		// 	.attr("d", innerArc)
		// .append("title")
		// 	.text(d =>
		// 		`${d.data.name}: ${self.timeString(d.data.value)}`
		// 		);


		/* ------- TEXT LABELS -------*/
		// svg.append("g")
		// 	.attr("font-size", 10)
		// 	.attr("font-size-ajust", 10)
		// 	.attr("text-anchor", "middle")
		// .selectAll("text")
		// .data(arcs)
		// .join("text")
		// 	.attr("transform", function(d) {
		// 	// var baro = ~~Math.log10(d.data.value/10)/2 + 1;
		// 	var pos = outerArc.centroid(d);
		// 	pos[0] = radius * (self.midAngle(d) < Math.PI ? 1 : -1);
		// 	return `translate(${pos})`;
		// 	})
		// .attr("text-anchor", d => self.midAngle(d) < Math.PI ? "start" : "end")
		// .text(d => d.data.name)


		/* ------- SLICE TO TEXT POLYLINES -------*/
		// svg.append("g")
		// .selectAll("polyline")
		// .data(arcs)
		// .join("polyline")
		// 	.attr("opaticy", ".3")
		// 	.attr("stroke", "black")
		// 	.attr("stroke-width", "1px")
		// 	.attr("fill", "none")
		// 	.attr("points", function(d){
		// 	var pos = outerArc.centroid(d);
		// 	pos[0] = radius * 0.95 * (self.midAngle(d) < Math.PI ? 1 : -1);
		// 	return [innerArc.centroid(d), outerArc.centroid(d), pos];
		// 	});

		// return svg.node();





	// updateData(data) {

	// 	const self = this

	// 	console.log(data);

	// 	var key = function(d){ return d.data.label; };

	// 	var slice = self.svg.select(".slices")
	// 		.selectAll("path.slice")
	// 		.data(self.pie(data), key);

	// 	slice.enter()
	// 		.insert("path")
	// 		.style("fill", '#000')
	// 		.attr("class", "slice");

	// 	slice.transition()
	// 		.duration(1000)
	// 		.attrTween("d", function(d) {
	// 			this._current = this._current || d;
	// 			var interpolate = d3.interpolate(this._current, d);
	// 			this._current = interpolate(0);
	// 			return function(t) {
	// 				return self.arc(interpolate(t));
	// 			};
	// 		})

	// 	slice.exit()
	// 		.remove();
	// }
















	// timeString (timestamp) {
	// 	return `${(~~(timestamp/60) ? `${~~(timestamp/60)}분` : '') + (timestamp % 60 ? `${timestamp % 60}초` : '')}`;
	// }
	// midAngle = function(d){
	// 	return d.startAngle + (d.endAngle - d.startAngle)/2;
	// }

}
