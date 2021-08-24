export default {

	target: 'static', // Static hosting

	// -------------------------------------------------- Global page headers:
	// https://go.nuxtjs.dev/config-head

	head: {
		title: 'carlosgoma.net',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'The personal webpage of Carlos Gómez' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		]
	},

	// -------------------------------------------------- Global CSS:
	// https://go.nuxtjs.dev/config-css

	css: [
		'@/assets/styles/main.scss',
	],

	// -------------------------------------------------- Plugins to run before rendering page:
	// https://go.nuxtjs.dev/config-plugins

	plugins: [
		{ src: '~/plugins/v-toolip.js'},
		{ src: '~/plugins/console.js'},
		{ src: '~/plugins/interactjs.js'},
	],

	// -------------------------------------------------- Auto import components (components folder):
	// https://go.nuxtjs.dev/config-components

	components: true,

	// -------------------------------------------------- Modules for dev and build (recommended):
	// https://go.nuxtjs.dev/config-modules

	buildModules: [
		'@nuxtjs/style-resources', // sass
		'nuxt-animejs', // anime
		'@nuxtjs/device'
	],
	device: {
		defaultUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36',
		refreshOnResize: true
	},
	styleResources: {
		scss: './assets/styles/config.scss',
		hoistUseStatements: true  // "@use" imports sass.
	},

	// -- Modules

	modules: [],

	// -------------------------------------------------- Build Configuration:
	// https://go.nuxtjs.dev/config-build

	build: {}
}
