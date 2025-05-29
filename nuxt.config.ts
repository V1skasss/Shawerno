import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/sitemap'
  ],

  // Минимальная рабочая конфигурация для версии 7.3.0
  sitemap: {
    // Без явного указания URL, будет использован baseURL из app
    urls: [
      { loc: '/', changefreq: 'daily', priority: 1.0 },
      { loc: '/about', changefreq: 'monthly', priority: 0.8 },
      { loc: '/menu', changefreq: 'weekly', priority: 0.9 },
      { loc: '/work', changefreq: 'monthly', priority: 0.7 },
      { loc: '/secret', changefreq: 'monthly', priority: 0.6 }
    ]
  },

  app: {
    baseURL: process.env.NODE_ENV === 'production' 
      ? 'https://shaverno-rho.vercel.app' 
      : '/',
    head: {
      title: 'Шаверно',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description',
          name: 'description',
          content: 'Городская сеть шаверм, в которых в лучшем виде сочетаются быстрая скорость обслуживания, доступные цены и высокое качество блюд.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/webp', href: '/logoURL.webp' },
        { rel: 'canonical', href: 'https://shaverno-rho.vercel.app' }
      ]
    }
  },
  
  css: [
    '/assets/css/global.css'
  ]
})