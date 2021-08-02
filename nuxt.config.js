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
  
  plugins: [
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
    defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36',
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
