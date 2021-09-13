
<template>

	<div class="p-hire-him">

		<h1 class="p-hire-him__title t-fade">
			<span>
				Hire him
			</span>
		</h1>

		<div class="p-hire-him__chat t-section">
			<div class="p-hire-him__chat-content">
				<p class="p-hire-him__chat-text" id="text1">
					<span>
						He is hardworking, proactive and punctual.
					</span>
				</p>
				<p class="p-hire-him__chat-text" id="text2">
					<span>
						Well, usually punctual.
					</span>
				</p>
				<p class="p-hire-him__chat-text" id="text3">
					<span>
						Hire him. He can work under pressure.
					</span>
				</p>
				<p class="p-hire-him__chat-text" id="text4">
					<span>
						I’ve seen him meet deadlines while I stare fixedly at him.
					</span>
				</p>
				<p class="p-hire-him__chat-text" id="text5">
					<span>
						Hire him. What could go wrong?
					</span>
				</p>
				<p class="p-hire-him__chat-text" id="text6">
					<span>
						Well, besides… nah, forget I said anything. I’m just a cat.
					</span>
				</p>
				<p class="p-hire-him__chat-text" id="text7">
					<span>
						Hire him.
					</span>
				</p>
			</div>

			<picture class="p-hire-him__chat-picture">
				<img class="p-hire-him__chat-img" src="~/assets/images/hypnosis.gif" alt="Hypnosis">

				<button v-if="isChatAnimationFinished" class="p-hire-him__chat-restart" @click="restart" aria-label="restart">
					<svg class="p-hire-him__chat-restart-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M3 22v-20l18 10-18 10z"/>
					</svg>
				</button>
			</picture>
		</div>

		<div class="p-hire-him__spiral t-fade">

			<svg class="p-hire-him__spiral__svg" x="0px" y="0px"
				viewBox="0 0 1400 1400" style="enable-background:new 0 0 1400 1400;" xml:space="preserve">

				<defs>
					<radialGradient id="gradientBlur">
						<stop offset="0%" stop-color="black"/>
						<stop offset="50%" stop-color="white"/>
					</radialGradient>
					<radialGradient id="gradientFocus">
						<stop offset="0%" stop-color="white"/>
						<stop offset="100%" stop-color="black"/>
					</radialGradient>
					<mask id="maskBlur" >
						<rect x="0%" y="0%" width="100%" height="100%" fill="url(#gradientBlur)"  />
					</mask>
					<mask id="maskFocus" >
						<rect x="0%" y="0%" width="100%" height="100%" fill="url(#gradientFocus)"  />
					</mask>
					<filter id="blur" x="0%" y="0%" width="100%" height="100%">
						<feGaussianBlur stdDeviation="5" result="blurry"/>
					</filter>
				</defs>
				<g>
					<path id="spiral" d="M724.2,712.3c0-13.6-10.8-24.5-24.2-24.5s-24.2,11-24.2,24.5c0,27.1,21.7,49.1,48.5,49.1s48.5-22,48.5-49.1
						c0-40.7-32.5-73.6-72.7-73.6s-72.7,32.9-72.7,73.6c0,54.3,43.4,98.2,96.9,98.2s96.9-43.9,96.9-98.2c0-67.8-54.2-122.7-121.2-122.7
						s-121.2,54.9-121.2,122.7c0,81.4,65,147.3,145.4,147.3s145.4-65.9,145.4-147.3c0-95-75.9-171.8-169.6-171.8s-169.6,76.9-169.6,171.8
						c0,108.6,86.7,196.4,193.9,196.4s193.9-87.8,193.9-196.4c0-122.1-97.6-220.9-218.1-220.9s-218.1,98.8-218.1,220.9
						c0,135.7,108.4,245.5,242.3,245.5S966.6,848,966.6,712.3c0-149.3-119.2-270-266.6-270S433.4,563,433.4,712.3
						c0,162.8,130.1,294.6,290.8,294.6S1015,875.1,1015,712.3c0-176.4-140.9-319.1-315-319.1S385,535.9,385,712.3
						c0,190,151.7,343.7,339.3,343.7s339.3-153.7,339.3-343.7C1063.5,508.7,900.9,344,700,344S336.5,508.7,336.5,712.3
						c0,217.1,173.4,392.8,387.8,392.8S1112,929.4,1112,712.3C1112,481.6,927.7,295,700,295S288,481.6,288,712.3
						c0,244.2,195.1,441.9,436.2,441.9s436.2-197.6,436.2-441.9c0-257.8-205.9-466.4-460.5-466.4S239.5,454.5,239.5,712.3
						c0,271.4,216.8,491,484.7,491s484.7-219.6,484.7-491c0-284.9-227.6-515.5-508.9-515.5S191.1,427.3,191.1,712.3
						c0,298.5,238.5,540.1,533.2,540.1s533.2-241.6,533.2-540.1c0-312.1-249.3-564.6-557.4-564.6S142.6,400.2,142.6,712.3
						c0,325.7,260.1,589.2,581.6,589.2s581.6-263.5,581.6-589.2c0-339.2-271-613.7-605.9-613.7S94.1,373.1,94.1,712.3
						c0,352.8,281.8,638.3,630.1,638.3s630.1-285.5,630.1-638.3c0-366.4-292.7-662.8-654.3-662.8S45.7,345.9,45.7,712.3
						c0,379.9,303.5,687.4,678.6,687.4s678.6-307.4,678.6-687.4c0-393.5-314.3-711.9-702.8-711.9S-2.8,318.8-2.8,712.3
						c0,407.1,325.2,736.5,727,736.5s727-329.4,727-736.5c0-420.6-336-761-751.3-761s-751.3,340.4-751.3,761
						c0,434.2,346.9,785.6,775.5,785.6s775.5-351.3,775.5-785.6c0-447.8-357.7-810.1-799.7-810.1S-99.7,264.5-99.7,712.3
						c0,461.3,368.5,834.6,824,834.6s824-373.3,824-834.6c0-474.9-379.4-859.2-848.2-859.2s-848.2,384.3-848.2,859.2
						c0,488.5,390.2,883.7,872.4,883.7s872.4-395.3,872.4-883.7c0-502-401.1-908.3-896.7-908.3s-896.7,406.2-896.7,908.3
						c0,515.6,411.9,932.8,920.9,932.8s920.9-417.2,920.9-932.8c0-529.2-422.7-957.4-945.1-957.4s-945.1,428.2-945.1,957.4
						c0,542.8,433.6,981.9,969.4,981.9s969.4-439.2,969.4-981.9c0-556.3-444.4-1006.5-993.6-1006.5S-293.6,156-293.6,712.3"/>

					<use href="#spiral" class="p-hire-him__spiral__svg-black" />
					<use href="#spiral" class="p-hire-him__spiral__svg-red" />
					<use href="#spiral" class="p-hire-him__spiral__svg-blue" />
					<use href="#spiral" class="p-hire-him__spiral__svg-blur" />
				</g>
			</svg>

		</div>
	</div>

</template>

<script>
	export default {

		head: {
			title: 'Hire him',
			meta: [
				{ hid: 'description', name: 'description', content: 'You must hire him'}
			],
		},

		data() {
			return {
				chatAnimation: null,
				isChatAnimationFinished: false
			}
		},

		mounted() {

			const self = this;
			this.chatAnimation = this.$anime.timeline({
				easing: 'linear',
				delay: 2000,
				complete: function() {
					self.isChatAnimationFinished = true
				}
			});

			this.chatAnimation
			.add({
				targets: '#text1',
				duration: 8000,
				keyframes: [
					{maxHeight: '6em', duration: 300},
					{opacity: '0', delay: 7500, duration: 500}
				]
			}, 1000)
			.add({
				targets: '#text2',
				duration: 4000,
				keyframes: [
					{maxHeight: '6em', marginTop: '1em', duration: 300},
					{opacity: '0', delay: 3500, duration: 500}
				]
			}, '-=4000')
			.add({
				targets: '#text3',
				duration: 10000,
				delay: 1500,
				keyframes: [
					{maxHeight: '6em', duration: 300},
					{opacity: '0', delay: 9500, duration: 500}
				]
			})
			.add({
				targets: '#text4',
				duration: 6500,
				keyframes: [
					{maxHeight: '6em', marginTop: '1em', duration: 300},
					{opacity: '0', delay: 6000, duration: 500}
				]
			}, '-=6500')
			.add({
				targets: '#text5',
				delay: 1500,
				duration: 10000,
				keyframes: [
					{maxHeight: '6em', duration: 300},
					{opacity: '0', delay: 9500, duration: 500}
				]
			})
			.add({
				targets: '#text6',
				duration: 6500,
				keyframes: [
					{maxHeight: '6em', marginTop: '1em', duration: 300},
					{opacity: '0', delay: 6000, duration: 500}
				]
			}, '-=6500')
			.add({
				targets: '#text7',
				delay: 1500,
				duration: 2000,
				keyframes: [
					{maxHeight: '6em', duration: 300},
					{opacity: '0', delay: 1500, duration: 500}
				]
			})
		},

		methods: {
			restart: function() {
				this.chatAnimation.restart();
				this.isChatAnimationFinished = false;
			}
		}
	}
</script>


<style lang="scss">

.p-hire-him {
	height: 100%;

	&__title {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		transform: translateY(-50%);
		span {
			font-size: 20vw;
			text-transform: uppercase;
			line-height: 1;
			text-align: center;
			font-weight: bolder;
			font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
			display: block;
			animation: toggleSpiralTitle 8s infinite linear alternate;
			@keyframes toggleSpiralTitle {
				0% {
					opacity: 0;
				}
				100% {
					opacity: .18;
				}
			}
		}
	}

	&__chat {
		position: relative;
		z-index: 2;
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		padding: 0 space(s);
		gap: space(s);

		@media (min-width: $mobile) {
			padding: 0 space(m);
		}

		&-img {
			max-width: 22vw;
			max-height: 20vh;
		}
		&-picture {
			position: relative;
			border-radius: .5em;
			overflow: hidden;
			flex: 0 0 auto;
		}

		&-restart {
			opacity: 0;
			position: absolute;
			top: 0;
			bottom: 0;
			width: 100%;
			background-color: rgba(black, .4);
			display: flex;
			align-items: center;
			justify-content: center;

			picture:hover & {
				opacity: 1;
			}
			&-svg {
				width: 3em;
				height: 3em;
				fill: $white;
			}
		}

		&-content {
			max-width: 28.5em;
		}
		&-text {
			max-height: 0;
			overflow: hidden;
			font-size: font-size(s);
			span {
				background-color: rgba(#beff89, .9);
				border-radius: .5em .5em 0;
				display: block;
				padding: space(s);
				margin-right: .6em;
				position: relative;
				&::after {
					content: '';
					position: absolute;
					width: .6em;
					height: .6em;
					left: calc(100% - 1px);
					bottom: 0;
					background-color: rgba(#beff89, .9);
					clip-path: polygon(0 0, 100% 100%, 0 100%);
				}
			}
		}
	}

	&__spiral {
		height: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		height: 130vmax;
		width: 130vmax;

		&__svg {
			height: 100%;
			will-change: transform;
			transform-origin: center;

			animation: rotateSpiral 11s infinite linear;
			@keyframes rotateSpiral {
				100% { transform: rotate(360deg);}
			}

			& > * {
				fill:none;
				stroke-linecap:round;
				stroke-miterlimit:10;
			}

			&-red {
				opacity:0.46;
				stroke:#ff6a6f;
				stroke-width:18;
				transform: translateX(10px);
				mask: url(#maskBlur);
				filter: url(#blur);
			}
			&-blue {
				opacity:0.46;
				stroke:#29abe2;
				stroke-width:18;
				transform: translateX(-10px);
				mask: url(#maskBlur);
				filter: url(#blur);
			}
			&-black {
				stroke:$black;
				stroke-width:15;
				mask: url(#maskFocus);
			}
			&-blur {
				opacity: .9;
				stroke-width:15;
				stroke:$black;
				mask: url(#maskBlur);
				filter: url(#blur);
			}
		}
	}
}

</style>
