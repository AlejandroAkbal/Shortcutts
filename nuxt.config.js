export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Shortcutts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Learning shortcuts made easy'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#181a1b' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-purgecss', '@nuxtjs/sitemap'],
  /*
   ** Progressive web app
   */
  pwa: {
    manifest: {
      name: 'Shortcutts',
      short_name: 'Shortcutts',
      lang: 'en',
      theme_color: '#181a1b',
      background_color: '#181a1b'
    },
    meta: {
      /* meta options */
      ogHost: 'https://shortcutts.app',
      mobileAppIOS: true
    }
  },
  /*
   ** PurgeCSS config
   */
  purgeCSS: {
    // whitelist: ['defaults-and-this-class']
    whitelistPatterns: [/active/, /fade/, /enter/, /leave/]
  },
  /*
   ** Sitemap configuration
   */
  sitemap: {
    hostname: 'https://shortcutts.app',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // Necessary for CSS Purge
    extractCSS: true,

    //  Remove console.log everywhere
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
    // extend(config, ctx) {}
  }
}
