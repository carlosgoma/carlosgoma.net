<template>
	<div>
		<div class="c-draggable" :class="['c-draggable-'+this.$route.name, {'is-loaded': isLoaded}]" >

			<interact data-item="g"
				class="c-draggable__item"
				draggable
				:dragOption="dragOption"
				@dragmove="dragmove"
				:style="{ transform: `translate(${coordinates.g.x}px, ${coordinates.g.y}px)` }">
				<svg class="c-draggable__svg" viewBox="0 0 600 600" preserveAspectRatio="xMinYMax meet" style="overflow: visible">
					<defs>
						<pattern id="figure-g-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
							<rect fill="#959599" width="5" height="5"/>
							<rect x="5" y="5" fill="#959599" width="5" height="5"/>
						</pattern>
					</defs>
					<path class="c-draggable__path c-draggable__path-g"
						@mousedown="startAnime"
						@mouseup="endAnime"
						d="M575,300c0,151.9-123.1,275-275,275S25,451.9,25,300S148.1,25,300,25c0,0,0,108,0,275C467,300,575,300,575,300z"
						dInit="M575,300c0,151.9-123.1,275-275,275S25,451.9,25,300S148.1,25,300,25c0,0,0,108,0,275C467,300,575,300,575,300z"
						dAnim="M595,300c0,151.9-143.1,255-295,255S5,451.9,5,300S148.1,45,300,45c0,0,38,88,0,255C468,262,595,300,595,300z">
					</path>
				</svg>
				<div class="c-draggable__coordinates" v-if="this.$route.name == 'index' && this.$store.getters.developerView">
					<span>x : {{coordinates.g.x}}</span>
					<span>y : {{coordinates.g.y}}</span>
				</div>
			</interact>

			<interact data-item="o"
				class="c-draggable__item c-draggable__item-this"
				draggable
				:dragOption="dragOption"
				@dragmove="dragmove"
				:style="{ transform: `translate(${coordinates.o.x}px, ${coordinates.o.y}px)` }">
				<svg class="c-draggable__svg" viewBox="0 0 600 600" preserveAspectRatio="xMinYMax meet" style="overflow: visible">
					<path class="c-draggable__path c-draggable__path-o"
						@mousedown="startAnime"
						@mouseup="endAnime"
						d="M575,300c0,151.9-123.1,275-275,275S25,451.9,25,300S148.1,25,300,25c0.2,0,0.3,0,0.5,0C452.1,25.3,575,148.3,575,300z"
						dInit="M575,300c0,151.9-123.1,275-275,275S25,451.9,25,300S148.1,25,300,25c0.2,0,0.3,0,0.5,0C452.1,25.3,575,148.3,575,300z"
						dAnim="M595,300c0,151.9-143.1,255-295,255S5,451.9,5,300S148.1,45,300,45c0.2,0,0.3,0,0.5,0C452.1,45.3,595,148.3,595,300z">
					</path>
				</svg>
				<div class="c-draggable__coordinates" v-if="this.$route.name == 'index' && this.$store.getters.developerView">
					<span>x : {{coordinates.o.x}}</span>
					<span>y : {{coordinates.o.y}}</span>
				</div>
			</interact>

			<interact data-item="m"
				class="c-draggable__item c-draggable__item-you"
				draggable
				:dragOption="dragOption"
				@dragmove="dragmove"
				:style="{ transform: `translate(${coordinates.m.x}px, ${coordinates.m.y}px)` }">
				<svg class="c-draggable__svg" viewBox="0 0 600 600" preserveAspectRatio="xMinYMax meet" style="overflow: visible">
					<path class="c-draggable__path c-draggable__path-m"
						@mousedown="startAnime"
						@mouseup="endAnime"
						d="M575,300c0,75.9,0,275,0,275s-199.1,0,-275,0s-275,0,-275,0s0,-199.1,0,-275s0,-275,0,-275s108,108,275,275c168,-167,275,-275,275,-275s0,199.1,0,275z"
						dInit="M575,300c0,75.9,0,275,0,275s-199.1,0,-275,0s-275,0,-275,0s0,-199.1,0,-275s0,-275,0,-275s108,108,275,275c168,-167,275,-275,275,-275s0,199.1,0,275z"
						dAnim="M595,300c0,166,-30,255,-30,255s-97,40,-265,40s-265,-40,-265,-40s-30,-88,-30,-255s30,-255,30,-255s155,88,265,255c107,-167,265,-255,265,-255s30,88,30,255z">
					</path>
				</svg>
				<div class="c-draggable__coordinates" v-if="this.$route.name == 'index' && this.$store.getters.developerView">
					<span>x : {{coordinates.m.x}}</span>
					<span>y : {{coordinates.m.y}}</span>
				</div>
			</interact>

			<interact data-item="a"
				class="c-draggable__item c-draggable__item-me"
				draggable
				:dragOption="dragOption"
				@dragmove="dragmove"
				:style="{ transform: `translate(${coordinates.a.x}px, ${coordinates.a.y}px)` }">
				<svg class="c-draggable__svg" viewBox="0 0 600 600" preserveAspectRatio="xMinYMax meet" style="overflow: visible">
					<path class="c-draggable__path c-draggable__path-a"
						@mousedown="startAnime"
						@mouseup="endAnime"
						d="M575,575c0,0,-123.1,0,-275,0s-275,0,-275,0s137,-275,275,-550c138,275,275,550,275,550z"
						dInit="M575,575c0,0,-123.1,0,-275,0s-275,0,-275,0s137,-275,275,-550c138,275,275,550,275,550z"
						dAnim="M565,555c0,0,-113.1,40,-265,40s-265,-40,-265,-40s53,-245,265,-510c212,265,265,510,265,510z">
					</path>
				</svg>
				<div class="c-draggable__coordinates" v-if="this.$route.name == 'index' && this.$store.getters.developerView">
					<span>x : {{coordinates.a.x}}</span>
					<span>y : {{coordinates.a.y}}</span>
				</div>
			</interact>
		</div>
	</div>
</template>


<script>
import interact from "interactjs";

export default {

	data: () => ({
		isLoaded: false,
		zIndex: 1,
		dragOption: {
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: "parent",
					endOnly: true
				})
			],
			inertia: true,
			inertia: {
				resistance: 3,
				minSpeed: 500,
				endSpeed: 2
			},
		},
		coordinates: {
			g: {
				x: null,
				y: null
			},
			o: {
				x: null,
				y: null
			},
			m: {
				x: null,
				y: null
			},
			a: {
				x: null,
				y: null
			}
		}
	}),

	mounted: function() {
		this.randomPosition();
		this.isLoaded = true;
	},

	methods: {
		randomPosition() {
			for (const pair in this.coordinates) {
				this.coordinates[pair].x = Math.floor(Math.random() * (document.querySelector(".c-draggable").offsetWidth - document.querySelector(".c-draggable__item").offsetWidth + 1));;
				this.coordinates[pair].y = Math.floor(Math.random() * (document.querySelector(".c-draggable").offsetHeight - document.querySelector(".c-draggable__item").offsetHeight + 1));
			}
		},
		dragmove(event) {
			this.coordinates[event.target.dataset.item].x += Math.round(event.dx);
			this.coordinates[event.target.dataset.item].y += Math.round(event.dy);
		},
		startAnime: function(event) {
			this.$anime({
				targets: event.target,
				opacity: .7,
				d: {value: event.target.getAttribute('dAnim')},
				duration: 500,
				begin: this.targetIndex(event.target),
			})
		},
		endAnime: function(event) {
			this.$anime({
				targets: event.target,
				opacity: .5,
				d: {value: event.target.getAttribute('dInit')},
				duration: 500,
			})
		},
		targetIndex: function(selector) {
			this.zIndex = ++this.zIndex;
			selector.closest('.c-draggable__item').style.zIndex = this.zIndex;
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
	}

	&__coordinates {
		position: absolute;
		bottom: 0;
		font-size: font-size(xs);
		display: flex;
		flex-direction: column;
		line-height: 1.5;
		padding: space(xs);
		opacity: 0.7;
	}

	&__svg {
		margin-top: -4.4%;
		margin-left: -4.4%;
		margin-bottom: -4.4%;
		margin-right: -4.4%;
		transition: opacity .5s;
	}

	&__path {
		cursor: grab;
		opacity: .5;
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

	&:not(.c-draggable-index) {
		.c-draggable__svg {
			opacity: .7;
		}
	}

	&-this {
		.c-draggable__item{
			&:not(.c-draggable__item-this) {
				opacity: 0;
				transition: opacity .5s;
			}
		}
	}
	&-you {
		.c-draggable__item{
			&:not(.c-draggable__item-you) {
				opacity: 0;
				transition: opacity .5s;
			}
		}
	}
	&-me {
		.c-draggable__item{
			&:not(.c-draggable__item-me) {
				opacity: 0;
				transition: opacity .5s;
			}
		}
	}
}
</style>
