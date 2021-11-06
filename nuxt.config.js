export default {
  head: {
    title: 'Twitter App',
    htmlAttrs: {
      lang: 'en'
    },
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

  css: [
  ],

  plugins: [
    '~/plugins/mirage'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'http://localhost:3000/api',
  },

  build: {
  },

  pwa: {
    icon: {
    source: 'static/icon.png',
    fileName: 'icon.png',
    sizes: [64, 120, 144, 152, 192, 384, 512],
    },

    meta: {
      title: 'Twitter',
      author: 'Tayhana Fonseca',
    },

    manifest: {
      name: 'Twitter App',
      short_name: 'Twitter',
      lang: 'en',
      description: 'Teste frontend de implementação de interface responsiva baseada no Twitter.',
    },
  }
}
