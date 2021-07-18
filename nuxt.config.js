export default {

  // -------------------------------------------------- Global page headers:
  // https://go.nuxtjs.dev/config-head

  head: {
    title: 'carlosgoma.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // -------------------------------------------------- Global CSS: 
  // https://go.nuxtjs.dev/config-css
  
  css: [
    '@/assets/styles/main.scss',
  ],

  // -------------------------------------------------- Plugins to run before rendering page: 
  // https://go.nuxtjs.dev/config-plugins
  
  plugins: [],

  // -------------------------------------------------- Auto import components (components folder): 
  // https://go.nuxtjs.dev/config-components
  
  components: true,

  // -------------------------------------------------- Modules for dev and build (recommended): 
  // https://go.nuxtjs.dev/config-modules
  
  buildModules: [
    '@nuxtjs/style-resources', // sass
    'nuxt-animejs' // anime
  ],

  styleResources: {
    scss: './assets/styles/config.scss',
    hoistUseStatements: true  // "@use" imports sass.
  },

  // -- Modules

  modules: [
    // '@nuxtjs/pwa', // PWA --> https://go.nuxtjs.dev/pwa
  ],

  // pwa: {
  //   manifest: {
  //     lang: 'en'
  //   }
  // },

  // -------------------------------------------------- Build Configuration:
  // https://go.nuxtjs.dev/config-build

  build: {
    // transpile: ['vue-drag-resize'],
  }
}
