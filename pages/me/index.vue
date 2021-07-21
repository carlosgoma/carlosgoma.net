<template>

    <article class="p-me o-grid" role="article" itemscope itemtype="http://schema.org/WebPage">
        <header class="p-me__header o-grid__header">
            <h2 class="p-me__title o-title o-title--main">
                <span>Hi! My name is Carlos.</span>
                <span>I’m a creative front-end developer.</span>
            </h2>
        </header>
        
        <picture class="p-me__picture">
			imagen
        </picture>
        
        <div class="p-me__intro">
			<div class="o-text">
				<p>I design and program interfaces for digital products that improve the user experience.</p>
				<p>In my work I pursue two things. On one side, write “clean code”, for real, code easily readable and maintainable. On the other side, a fully detailed and meaningful design.</p>
			</div>
		</div>

        <div class="p-me__past">
			<h3 class="p-me__past-title o-title o-title--light">Past</h3>
			<div class="o-text">
				<p>I started to do websites in 2013. Since then I've been improving my skills in programming, web design, UX and marketing online.</p>
				<p>Before that I graduated in Fine arts from the University of Seville and I did a Official Master of Arts majoring in contemporary thoughts and visual culture in the Polytechnics University of Valencia. </p>
			</div>
		</div>

		<blockquote class="p-me__quote">
			<p class="p-me__quote-text">
				<svg class="p-me__quote-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>	
				I've seen bugs you people wouldn't believe.
			</p>
		</blockquote>

        <div class="p-me__present">
			<h3 class="p-me__present-title o-title o-title--light">Present</h3>
			<div class="o-text">
				<p>Currently I’m working in <a href="https://mirai.com" target="_blank">Mirai</a> in the department of Front-End Development. I program new functionalities in multiple webapp around the booking process experience. I work with React, Redux and Axios.</p>
			</div>
		</div>

    </article>

</template>


<style lang="scss">

	.p-me {
		position: relative;
		z-index: 2;

		&__title {
			display: flex;
			flex-direction: column;
		}

		&__picture {
			@media ( min-width: $mobile ) {
				grid-column: 6/8;
				grid-row: 2;
			}
		}

		&__intro {
			@media ( min-width: $mobile ) {
				grid-column: 2/5;
				grid-row: 2;
			}
		}

		&__past {
			position: relative;
			@media ( min-width: $mobile ) {
				grid-column: 5/8;
				grid-row: 3;
			}
		}
		&__quote {
			display: flex;
			justify-content: flex-end;
			@media ( min-width: $mobile ) {
				grid-column: 2/-1;
				grid-row: 4;
			}

			&-text {
				font-size: font-size(jumbo);
				font-style: italic;
				color: $font-color-light;
				position: relative;
			}
			&-svg {
				position: absolute;
				top: 50%;
				left: 0;
				width: 3.5em;
				height: 3.5em;
				opacity: .6;
				transform: translate(-50%,-50%);
				z-index: -1;
				path {
					fill: $yellow;
				}
			}
		}
		&__present {
			position: relative;
			@media ( min-width: $mobile ) {
				grid-column: 2/5;
				grid-row: 5;
			}
		}

	}

	picture {
		background-color: #eee;
	}
</style>
