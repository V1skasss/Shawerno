<template>
  <div class="sitemap">
    <h1>Карта сайта</h1>
    
    <div class="sitemap-section">
      <h2><i class="fas fa-list"></i> Все разделы сайта</h2>
      <div class="links-grid">
        <div class="links-column">
          <NuxtLink to="/" class="sitemap-link">
            <i class="fas fa-chevron-right"></i> Главная
          </NuxtLink>
          <NuxtLink to="/about" class="sitemap-link">
            <i class="fas fa-chevron-right"></i> О нас
          </NuxtLink>
        </div>
        <div class="links-column">
          <NuxtLink to="/menu" class="sitemap-link">
            <i class="fas fa-chevron-right"></i> Меню
          </NuxtLink>
          <NuxtLink to="/work" class="sitemap-link">
            <i class="fas fa-chevron-right"></i> Работа
          </NuxtLink>
        </div>
        <div class="links-column">
          <NuxtLink to="/secret" class="sitemap-link">
            <i class="fas fa-chevron-right"></i> Тайный гость
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import 'assets/css/pages/sitemap.css';
  </script>

