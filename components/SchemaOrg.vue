<script setup>
const route = useRoute()
const siteUrl = 'https://shaverno.vercel.app'

// Базовые данные для организации
const organization = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Шаверно",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.webp`,
  "image": `${siteUrl}/graph.webp`,
  "description": "Городская сеть шаверм, в которых в лучшем виде сочетаются быстрая скорость обслуживания, доступные цены и высокое качество блюд.",
  "telephone": "+7 (968) 194-59-69",
  "servesCuisine": ["Шаверма", "Фастфуд"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Гражданский проспект, 66к1",
    "addressLocality": "Санкт-Петербург",
    "addressCountry": "RU",
    "postalCode": "195257" 
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "60.01395", 
    "longitude": "30.39609" 
  }
}

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify(organization)
  }]
})
</script>

<template>
  
</template>

