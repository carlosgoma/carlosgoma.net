<template>
	<article class="p-me o-grid" role="article" itemscope itemtype="http://schema.org/WebPage">
		<header class="p-me__header o-grid__header">
			<h1 class="p-me__title o-title o-title--main t-title">
				<span>Hi! My name is Carlos.</span>
				<span>I’m a creative front-end developer.</span>
			</h1>
		</header>

		<picture class="p-me__picture .o-picture t-section">
			<img src="~assets/images/portrait.jpg" width="400" height="472" alt="Carlos portrait">
		</picture>

		<div class="p-me__intro t-section">
			<div class="o-text">
				<p>I design and program interfaces for digital products that improve the user experience.</p>
				<p>I'm detail oriented in the design as much as in the code. I pursue to write <i>clean code</i>, easily readable and maintainable.</p>
			</div>
		</div>

		<span class="p-me__divisor t-section">
			<button v-if="this.$store.getters.developerView" class="o-toolip-trigger--developer-view" v-tooltip="{ content: 'All the design\'s messures depends on the font size or the screen size in order to improve the accessibility and the responsive design. I invite you to change your browser font size.' }">
				dV
			</button>
		</span>

		<div class="p-me__past t-section">
			<h2 class="p-me__past-title o-title o-title--light">Past</h2>
			<div class="o-text">
				<p>I started to do websites in 2013. Since then I've been improving my skills in programming, web design, UX and marketing online.</p>
				<p>Before that I graduated in Fine arts from the University of Seville and I did a Official Master of Arts majoring in contemporary thoughts and visual culture in the Polytechnics University of Valencia. </p>
			</div>
		</div>

		<blockquote class="p-me__quote t-section">
			<p class="p-me__quote-text">
				<img src="~/assets/images/blade_runner.jpg" class="p-me__quote-img" v-show="isQuoteOver" width="250" height="141" alt="Blade Runner">
				<svg @mouseenter="isQuoteOver=true" @mouseleave="isQuoteOver=false" class="p-me__quote-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<title>Blade Runner</title>
					<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/>
				</svg>
				I've seen bugs you people wouldn't believe.
			</p>
		</blockquote>

		<div class="p-me__present t-section">
			<h2 class="p-me__present-title o-title o-title--light">Present</h2>
			<div class="o-text">
				<p>Currently I’m working in <a class="p-me__link o-link" href="https://mirai.com" target="_blank">Mirai</a> in the department of Front-End Development. I program new functionalities in multiples webapps around the hotel's booking process experience. I work with <cite>React</cite>, <cite>Redux</cite> and <cite>Axios</cite>.</p>
			</div>
		</div>

	</article>
</template>

<script>
	export default {

		head: {
			title: 'Me',
			meta: [
				{ hid: 'description', name: 'description', content: 'I’m a creative front-end developer'}
			],
		},
		data() {
			return{
				isQuoteOver: false
			}
		}
	}
</script>


<style lang="scss">

	.p-me {
		--page-color: var(--yellow-light);

		position: relative;
		z-index: 2;

		&__picture {
			@media ( min-width: $mobile ) {
				grid-column: 6/8;
				grid-row: 2;
			}
		}

		&__intro {
			position: relative;
			@media ( min-width: $mobile ) {
				grid-column: 2/5;
				grid-row: 2;
				align-self: flex-start;
				margin-bottom: space(m);

				@include line(left, 0, calc(var(--space) * -3));

				p + p  {
					position: relative;
					@include line(top, calc( var(--space) * -1), 85%, true);
				}
			}

		}

		&__divisor {
			display: none;
			position: relative;
			@media ( min-width: $mobile ) {
				display: block;
				grid-column: 2/4;
				grid-row: 2;
				align-self: flex-end;
				border-bottom: $line-black;
			}
		}

		&__past {
			position: relative;
			@media ( min-width: $mobile ) {
				grid-column: 5/8;
				grid-row: 3;

				@include line(right, calc(var(--space) * -3), 50%);
				@include line(top, -75%, calc(var(--space) * -1));
			}
		}
		&__quote {
			@media ( min-width: $mobile ) {
				grid-column: 3/-1;
				grid-row: 4;
				position: relative;
				margin-top: space(m);
				margin-bottom: space(m);
				@include line(bottom, calc( var(--space) * -2), calc(90%));
			}

			&-text {
				font-size: font-size(jumbo);
				font-style: italic;
				line-height: 1.3;
				margin-top: indentation(1.4);
				margin-bottom: indentation(1.45);
				color: $font-color-light;
				position: relative;
				margin-left: space(m);

				@media ( min-width: $mobile ) {
					margin-left: space(l);
				}
			}
			&-svg {
				position: absolute;
				top: 50%;
				left: 0;
				width: 2.7em;
				height: 2.7em;
				opacity: .6;
				transform: translate(calc(var(--space) * -1.4),-50%);
				mix-blend-mode: darken;
				cursor: help;
				path {
					fill: $yellow;
				}
				&:hover {
					mix-blend-mode: overlay;
				}
				@media ( min-width: $mobile ) {
					transform: translate(-50%,-50%);
				}
			}
			&-img {
				position: absolute;
				z-index: -1;
				bottom: .26em;
				left: 0;
				transform: translateX(-50%);
			}
		}
		&__present {
			position: relative;
			@media ( min-width: $mobile ) {
				grid-column: 2/5;
				grid-row: 5;

				@include line(left, calc(var(--space) * -3), 0);
				@include line(bottom, calc(var(--space) * -1), 50%);
			}
		}

	}

</style>
