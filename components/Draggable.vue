<template>
	<transition>
    <div class="c-draggable" :class="isLoaded ? 'is-loaded c-draggable-'+this.$route.name : 'c-draggable-'+this.$route.name" >

		<div ref="dragG"
		class="c-draggable__item" 
		style="z-index:1">
			<svg class="c-draggable__item-svg" 
				viewBox="0 0 600 600" 
				preserveAspectRatio="xMinYMax meet">
				<defs>
					<pattern id="figure-g-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
						<rect fill="#959599" width="5" height="5"/>
						<rect x="5" y="5" fill="#959599" width="5" height="5"/>
					</pattern>
				</defs>
				<path class="c-draggable__item-path c-draggable__item-path-g"
					@mousedown="startAnime" 
					@mouseup="endAnime"
					d="M575,300c0,151.9-123.1,275-275,275S25,451.9,25,300S148.1,25,300,25c0,0,0,108,0,275C467,300,575,300,575,300z"
					dInit="M575,300c0,151.9-123.1,275-275,275S25,451.9,25,300S148.1,25,300,25c0,0,0,108,0,275C467,300,575,300,575,300z"
					dAnim="M595,300c0,151.9-143.1,255-295,255S5,451.9,5,300S148.1,45,300,45c0,0,38,88,0,255C468,262,595,300,595,300z">
				</path>
			</svg>
		</div>
		
		<div ref="dragO" 
		class="c-draggable__item c-draggable__item-this" 
		style="z-index:1">
			<svg class="c-draggable__item-svg" 
				viewBox="0 0 600 600" 
				preserveAspectRatio="xMinYMax meet">
				<path class="c-draggable__item-path c-draggable__item-path-o" 
					@mousedown="startAnime" 
					@mouseup="endAnime"
					d="M575,300c0,151.9-123.1,275-275,275S25,451.9,25,300S148.1,25,300,25c0.2,0,0.3,0,0.5,0C452.1,25.3,575,148.3,575,300z"
					dInit="M575,300c0,151.9-123.1,275-275,275S25,451.9,25,300S148.1,25,300,25c0.2,0,0.3,0,0.5,0C452.1,25.3,575,148.3,575,300z"
					dAnim="M595,300c0,151.9-143.1,255-295,255S5,451.9,5,300S148.1,45,300,45c0.2,0,0.3,0,0.5,0C452.1,45.3,595,148.3,595,300z">
				</path>
			</svg>
		</div>

		<div ref="dragM"
			class="c-draggable__item c-draggable__item-you" 
			style="z-index:1">
			<svg class="c-draggable__item-svg"
				viewBox="0 0 600 600" 
				preserveAspectRatio="xMinYMax meet">
				<path class="c-draggable__item-path c-draggable__item-path-m"
					@mousedown="startAnime" 
					@mouseup="endAnime"
					d="M575,300c0,75.9,0,275,0,275s-199.1,0,-275,0s-275,0,-275,0s0,-199.1,0,-275s0,-275,0,-275s108,108,275,275c168,-167,275,-275,275,-275s0,199.1,0,275z"
					dInit="M575,300c0,75.9,0,275,0,275s-199.1,0,-275,0s-275,0,-275,0s0,-199.1,0,-275s0,-275,0,-275s108,108,275,275c168,-167,275,-275,275,-275s0,199.1,0,275z"
					dAnim="M595,300c0,166,-30,255,-30,255s-97,40,-265,40s-265,-40,-265,-40s-30,-88,-30,-255s30,-255,30,-255s155,88,265,255c107,-167,265,-255,265,-255s30,88,30,255z">
				</path>
			</svg>
		</div>

		<div ref="dragA" 
			class="c-draggable__item c-draggable__item-me" 
			style="z-index:1">
			<svg class="c-draggable__item-svg"
				viewBox="0 0 600 600" 
				preserveAspectRatio="xMinYMax meet">
				<path class="c-draggable__item-path c-draggable__item-path-a" 
					@mousedown="startAnime" 
					@mouseup="endAnime"
					d="M575,575c0,0,-123.1,0,-275,0s-275,0,-275,0s137,-275,275,-550c138,275,275,550,275,550z"
					dInit="M575,575c0,0,-123.1,0,-275,0s-275,0,-275,0s137,-275,275,-550c138,275,275,550,275,550z"
					dAnim="M565,555c0,0,-113.1,40,-265,40s-265,-40,-265,-40s53,-245,265,-510c212,265,265,510,265,510z">
				</path>
			</svg>
		</div>

    </div>
	</transition>
</template>


<script>

export default {

	data() {
		return {
			isLoaded: false
		}
	},

	mounted: function() {
		this.initInteract( this.$refs.dragG );
		this.initInteract( this.$refs.dragO );
		this.initInteract( this.$refs.dragM );
		this.initInteract( this.$refs.dragA );

		this.isLoaded = true;
	},

	methods: {
		initInteract: function(selector) {
			
			this.randomPosition(selector);

			interact(selector).draggable({
				inertia: true,
				inertia: {
					resistance: 3,
					minSpeed: 500,
					endSpeed: 2
				},
				restrict: { // keep on parent
					restriction: "parent",
					endOnly: true,
					elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
				},
				
				onmove: this.dragMoveListener,
				// onend: this.onDragEnd
			}).styleCursor(false);
		},

		dragMoveListener: function(event) {
			var x = (parseFloat(event.target.getAttribute("data-x")) || 0) + event.dx;
			var y = (parseFloat(event.target.getAttribute("data-y")) || 0) + event.dy;

			this.targetUpdate(event.target, x, y);
		},

		// onDragEnd: function(event) {
		// 	this.screenX = event.target.getBoundingClientRect().left; // update state
		// 	this.screenY = event.target.getBoundingClientRect().top; // update state
		// },

		randomPosition: function(selector) {
			var x = Math.floor(Math.random() * (document.querySelector(".c-draggable").offsetWidth - selector.offsetWidth + 1));
			var y = Math.floor(Math.random() * (document.querySelector(".c-draggable").offsetHeight - selector.offsetHeight + 1));

			this.targetUpdate(selector, x, y)
		},

		startAnime: function(event) {
			this.$anime({
				targets: event.target,
				opacity: .6,
				d: {value: event.target.getAttribute('dAnim')},
				duration: 500,
				begin: this.targetIndex(event.target),
			})
		},

		endAnime: function(event) {
			this.$anime({
				targets: event.target,
				opacity: .4,
				d: {value: event.target.getAttribute('dInit')},
				duration: 500,
			})
		},

		targetIndex: function(selector) {
			const zIndex = [];
			document.querySelectorAll('.c-draggable__item').forEach( element => zIndex.push(element.style.zIndex ));
			selector.closest('.c-draggable__item').style.zIndex = Math.max(...zIndex) + 1;
		},

		targetUpdate: function (selector, x, y) {
			selector.style.transform = "translate(" + x + "px, " + y + "px)"; // transform
			selector.setAttribute("data-x", x); // update the posiion attributes
			selector.setAttribute("data-y", y);
		}
	}
};

</script>

<style lang="scss">

.c-draggable {
	-ms-touch-action: none;
	touch-action: none;

	& * {
		-ms-touch-action: none;
		touch-action: none;
	}

	opacity: 0;
	&.is-loaded {
		transition: opacity .5s;
		opacity: 1;
	}

	position: absolute;
	z-index: 1;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	
	&__item {
		width: calc(15vw + 25vh);
		height: calc(15vw + 25vh);
		position: absolute;
		pointer-events: none;
		transition: opacity .5s .6s;

		&-svg {
			margin-top: -4.4%;
			margin-left: -4.4%;
			margin-bottom: -4.4%;
			margin-right: -4.4%;
		}

		&-path {
			cursor: grab;
			opacity: .4;
			pointer-events: auto;
			
			&:active {
				cursor: grabbing;
			}

			&-g {
				fill: url(#figure-g-pattern);
			}
			&-o {
				fill: $blue;
			}
			&-m {
				fill: $red;
			}
			&-a {
				fill: $yellow;
			}
		}
	}

	&-this {
		.c-draggable__item:not(.c-draggable__item-this) {
			opacity: 0;
			transition: opacity .5s;
		}
	}
	&-you {
		.c-draggable__item:not(.c-draggable__item-you) {
			opacity: 0;
			transition: opacity .5s;
		}
	}
	&-me {
		.c-draggable__item:not(.c-draggable__item-me) {
			opacity: 0;
			transition: opacity .5s;
		}
	}
}
</style>
