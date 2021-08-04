
<template>
	<div class="l-layout" :class="['l-layout--' + $route.name, {'is-desktop': $device.isDesktop }]">
		<header class="l-layout__header">
			<logo/>
		</header>
		<main>
			<nuxt/>
			<draggable/>
		</main>
		<footer class="l-layout__footer">
			<nav-main/>
		</footer>
	</div>
</template>

<script>

export default {
	name: "default",

	created() {
		// this.hello();
	},

	mounted () {
		window.carlosgoma = this;
		document.body.style.setProperty('--windowheight', window.innerHeight + "px" );
	},

	methods: {

		runDevMode: function() {
			// this.$auth.$storage
			console.log('Running!');
		},

		hello: function() {

			console.warn('Parental Advisory : explicit content.');
			console.log('%cHere you are!', 'font-size: 3em; padding: 30px 10px 10px; line-height: 1.5;');
			console.log('%c ', 'background: url("http://carlosgoma.net/images/bill_murray.jpg") center no-repeat; margin: 30px 10px; padding: 125px 100px; background-size: 100% 100%;')
			console.log('%cThis website is done with NuxtJS (A VueJS framework).', 'font-size: 1.1em; padding: 10px 10px 10px; line-height: 1.5; font-weight:bold');
			console.group('%cThese are the libraries I have used:', 'margin-left: 10px; padding: 10px; background: #caffcc; display: block; width: 600px');
			console.info('%canimejs: For the svg morphing animation.', 'font-size: 1.1em; margin-left: 10px; padding: 10px; background: #ebffe2; display: block; width: 600px');
			console.info('%cinteractjs: For the inertia effects in the drag and drop.', 'font-size: 1.1em; margin-left: 10px; padding: 10px; background: #ebffe2; display: block; width: 600px');
			console.groupEnd();

		}
	}
};
</script>

<style lang="scss">


	.l-layout {
		&--index {
			animation: bs-index .1s forwards;
			@keyframes bs-index {
				0% { box-shadow: none;}
				100% { box-shadow: inset 0 -5px var(--gray);}
			}
		}
		&--me {
			animation: bs-me 1s .5s forwards;
			@keyframes bs-me {
				0% { box-shadow: none;}
				100% { box-shadow: inset 0 -5px var(--yellow);}
			}
		}
		&--you {
			animation: bs-you 1s .5s forwards;
			@keyframes bs-you {
				0% { box-shadow: none;}
				100% { box-shadow: inset 0 -5px var(--red);}
			}
		}
		&--this {
			animation: bs-this 1s .5s forwards;
			@keyframes bs-this {
				0% { box-shadow: none;}
				100% { box-shadow: inset 0 -5px var(--blue);}
			}
		}

		min-height: 100%;
		display: grid;
		grid-template-rows: max-content 1fr max-content;
		box-shadow: inset 0 -5px transparent;

		&__header {
			padding-top: space(s);
			padding-left: space(s);
			pointer-events: none;

			@media (min-width: $mobile) {
				padding-top: space(m);
				padding-left: space(m);
			}
		}

		&__footer {
			pointer-events: none;
			position: sticky;
			bottom: 0;
			z-index: 3;
		}
	}
</style>
