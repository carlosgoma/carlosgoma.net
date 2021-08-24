
export const svgRotation = (event) => {

	let radian = Math.atan2(event.offsetX - event.target.offsetWidth / 2, event.offsetY - event.target.offsetHeight / 2);
	let rotation = (radian * (180/ Math.PI) * -1) + 0;
	event.target.getElementsByTagName("svg")[0].style.transform = `rotate(${Math.floor(rotation)}deg)`;
}


export const svgMouseOver = (event, anime) => {

	svgRotation(event)
	anime({
		targets: event.target.getElementsByTagName("path")[0],
		d: [
			{ easing: "easeInOutBack", value: "M83,45c0,8.8,-6.3,16.9,-11.6,23c-6.4,7.4,-15.9,1,-26.4,1s-20,6.4,-26.4,-1c-5.3,-6.1,-11.6,-14.2,-11.6,-23c0,-19.3,18.7,-35,38,-35s38,15.7,38,35z"},
			{ easing: "easeOutElastic(1, .6)", value: "M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"},
		],
		begin: function() {
			event.target.parentNode.classList.add("is-over");
		},
		duration: 400,
	});
}


export const svgMouseLeave = (event, anime) => {

	svgRotation(event);
	anime({
		targets: event.target.getElementsByTagName("path")[0],
		d: [
			{ duration: 100, easing: "easeOutBack", value: "M78,45c0,8.8,-5.3,16.9,-10.6,23c-6.4,7.4,-11.9,19,-22.4,19s-16,-11.6,-22.4,-19c-5.3,-6.1,-10.6,-14.2,-10.6,-23c0,-19.3,13.7,-35,33,-35s33,15.7,33,35z"},
			{ easing: "easeOutBack", value: "M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"},
		],
		begin: function() {
			event.target.parentNode.classList.remove("is-over");
		},
		duration: 300,
	});
}
