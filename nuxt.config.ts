import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    baseURL: '/', 
    head: {
      title: 'Шаверно',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description',
          name: 'description',
          content: 'Городская сеть шаверм, в которых в лучшем виде сочетаются быстрая скорость обслуживания, доступные цены и высокое качество блюд.'
        },
        {
          name: 'google-site-verification',
          content: 'Jn39l2MoQ9tYBTMw7fsAdG_W9y9QYrddaw2wRzTp1ds' 
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'Шаверно - Лучшая шаверма в городе' },
        { hid: 'og:description', property: 'og:description', content: 'Городская сеть шаверм, в которых в лучшем виде сочетаются быстрая скорость обслуживания, доступные цены и высокое качество блюд.' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://shaverno.vercel.app/' },
        { hid: 'og:image', property: 'og:image', content: '/graph.webp' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Шаверно' },
        { hid: 'og:locale', property: 'og:locale', content: 'ru_RU' },
      ],
      link: [
        { rel: 'icon', type: 'image/webp', href: '/logoURL.webp' }
        
      ]
    }
  },
  
  css: [
    '/assets/css/global.css'
  ]
})