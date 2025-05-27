import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '/assets/css/global.css',
  ],
  app: {
    head: {
      title: 'Шаверно',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Городская сеть шаверм, в которых в лучшем виде сочетаются быстрая скорость обслуживания, доступные цены и высокое качество блюд.' }
      ],
      link: [
        { rel: 'icon', type: 'image/webp', href: '/logoURL.webp' }
      ],
    script: [  
        {
          src: 'https://api-maps.yandex.ru/2.1/?apikey=e7059ba3-c662-40aa-a1ca-0cbc82eafa22&lang=ru_RU"></script>',
          async: true,
          defer: true
        }
      ]
    }
  }
})


