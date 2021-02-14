const IS_DEV = process.env.NODE_ENV === 'development';
const PORT = process.env.SERVER_PORT || (IS_DEV ? 3000 : 80);
const HOST = '0.0.0.0';

export default {
  target: 'static',

  server: {
    port: PORT,
    host: HOST,
  },

  head: {
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr',
    },
    title: 'Vue Socials',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'date=no' },
      { name: 'format-detection', content: 'address=no' },
      { name: 'format-detection', content: 'email=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  loading: { color: '#2D4CC8' },

  css: [],

  styleResources: {
    sass: ['./assets/sass/dev.sass'],
  },

  plugins: [],

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources',
  ],

  axios: {},

  content: {},

  build: {},
};
