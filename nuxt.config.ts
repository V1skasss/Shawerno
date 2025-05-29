import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    baseURL: '/', // Упрощено до базового пути
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
          content: 'Jn39l2MoQ9tYBTMw7fsAdG_W9y9QYrddaw2wRzTp1ds' // Только код, без .html
        }
      ],
      link: [
        { rel: 'icon', type: 'image/webp', href: '/logoURL.webp' }
        // Canonical ссылка удалена для упрощения
      ]
    }
  },
  
  css: [
    '/assets/css/global.css'
  ]
})