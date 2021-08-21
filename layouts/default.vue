
<template>
	<div class="l-layout"
		:class="['l-layout--' + $route.name, {
			'is-desktop': $device.isDesktop,
			'is-developer-view': this.$store.getters.developerView
		}]">
		<div class="l-layout__view-tag" v-if="this.$store.getters.developerView">
			dV = developer view
		</div>
		<header class="l-layout__header">
			<logo/>
		</header>
		<main>
			<nuxt/>
			<draggable v-if="$route.name != 'hirehim'" />
		</main>
		<footer class="l-layout__footer">
			<nav-main/>
		</footer>
	</div>
</template>

<script>

export default {
	name: "default",

	mounted () {
		window.runDeveloperView = this.$runDeveloperView;
		window.stopDeveloperView = this.$stopDeveloperView;

		window.addEventListener('resize', this.onResize);
		document.querySelector(':root').style.setProperty('--windowHeight', window.innerHeight + "px" );
	},
	methods: {
		onResize() {
			document.querySelector(':root').style.setProperty('--windowHeight', window.innerHeight + "px" );
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
		&--hirehim {
			height: var(--windowHeight);
			overflow: hidden;
			position: relative;
			main {
				overflow: hidden;
			}
		}

		background-color: $white;
		min-height: var(--windowHeight);
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

		&__view-tag {
			position: fixed;
			z-index: 3;
			top: 0;
			right: space(m);
			padding: 0.1em .8em;
			background-color: $gray-light;
			border-radius: 0 0 .3em .3em;
			font-size: font-size(xs);
			border: 1px dashed $black;
			border-top: 0;
		}
	}
</style>
