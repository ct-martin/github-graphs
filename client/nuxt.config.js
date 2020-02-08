import pkg from './package'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'GitHub Graphs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T', crossorigin: 'anonymous' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.min.js', integrity: 'sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=', crossorigin: 'anonymous' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', integrity: 'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM', crossorigin: 'anonymous' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#167df0' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  auth: {
    strategies: {
      local: false,
      github: {
        client_id: process.env.GH_ID,
        client_secret: process.env.GH_SECRET
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  /*
  ** CI generate configuration
  */
  build: {
    extractCSS: true,
    ssr: true
  },
  generate: {
    dir: '../public',
    fallback: true
  },

  /*
  ** TypeScript
  */
  buildModules: ['@nuxt/typescript-build']
}
