<template>
    <div>
      <header class="header">
        <div class="container">
          <div class="logo">
            <NuxtLink to="/">
              <img src="public/logoSH.webp" alt="Логотип" />
            </NuxtLink>
          </div>
          <!-- Бургер меню для маленьких экранов -->
        <div class="burger-menu" @click="toggleMenu">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav class="nav" :class="{ 'mobile-nav': isMenuOpen }">
          <NuxtLink to="/" class="nav-link" @click="closeMenu">Главная</NuxtLink>
          <NuxtLink to="/about" class="nav-link" @click="closeMenu">О нас</NuxtLink>
          <NuxtLink to="/menu" class="nav-link" @click="closeMenu">Меню</NuxtLink>
          <NuxtLink to="/work" class="nav-link" @click="closeMenu">Работа</NuxtLink>
          <NuxtLink to="/secret" class="nav-link special" @click="closeMenu">Тайный гость</NuxtLink>
        </nav>
      </div>
      </header>
  
      <main>
        <slot />
      </main>
  
      <footer class="footer">
      <div class="footer-container">
        <div class="contact-info">
          <h4 class="footer-title">Связаться с нами:</h4>
          <a href="mailto:shaverno.rest@gmail.com" class="footer-link">Mail: shaverno.rest@gmail.com</a>
          <a href="https://wa.me/79681945969" class="footer-link">Whatsapp: +7 968 194-59-69</a>
          <a href="/sitemap" class="footer-policy">Карта сайта</a>
        </div>
        
        <div class="delivery-info">
        <h4 class="footer-title">Наше приложение:</h4>
        <div class="app-links">
          <a href="https://play.google.com/store/apps/details?id=starter.shaverno.client&pli=1" target="_blank">
            <img src="public/google.webp" alt="Google Play" class="app-image" />
          </a>
          <a href="https://apps.apple.com/us/app/%D1%88%D0%B0%D0%B2%D0%B5%D1%80%D0%BD%D0%BE/id6736944453" target="_blank">
            <img src="public/appSt.webp" alt="App Store" class="app-image" />
          </a>
        </div>
        <div class="privacy-policy-link">
      <a href="https://dostavka.shaverno.ru/privacy-policy" target="_blank" class="footer-policy">Политика конфиденциальности</a>
    </div>
      </div>
    </div>
    <div class="copyright">Шаверно 2025 &copy;</div>
  </footer>
    </div>
  </template>
  
  <style >
  .header {
    background-color: #F8F6F4;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .logo img {
    height: 45px;
    width: 175px;
    padding: 7px 0;
  }
  
  .nav {
    display: flex;
  }
  
  .nav-link {
    color: #000;
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.3s ease;
    font-size: 19px;
    font-family: 'ШапкаЗаголовки', sans-serif;
    font-weight: bolder;
  }
  
  .nav-link:hover {
    color: #EB4200;
  }
  


/* Стили для подвала */
.footer {
  border-top: 3px solid black;
  padding: 20px 0;
  background-color: #E9E0DA; /* Добавляем цвет фона */
  color: #333;
  font-size: 16px; /* Увеличиваем размер шрифта */
}

.footer-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-title {
  color: #EB4200;
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 20px;
  margin-top: 0px;
}

.footer-policy {
  color: #EB4200; /* Цвет как у .footer-title */
  font-weight: bold; /* Жирный шрифт как у .footer-title */
  font-size: 1.5em; /* Размер шрифта как у .footer-title */
  text-decoration: none;
}

.footer-policy:hover {
  text-decoration: underline;
}


.footer-link {
  display: block;
  color: #333;
  font-size: 1.4em;
  text-decoration: none;
  margin-bottom: 10px;
}

.footer-link:hover {
  text-decoration: underline;
}

.copyright {
  text-align: center;
  color: #EB4200;
  margin-top: 20px;
  font-size: 1.2em;
}

.app-links {
  display: flex; /* Располагаем изображения в ряд */
  align-items: center;
  gap: 15px; /* Добавляем отступ между элементами */
  margin-bottom: 10px;
  text-decoration: none;
}

.app-image {
  width: 130px;
  height: auto;
}
/* Стили для бургера */
.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.burger-menu div {
  width: 30px;
  height: 3px;
  background-color: #000;
  transition: 0.4s;
}
/* Адаптивные стили */
@media (max-width: 768px) {
  .container {
    padding: 0 0px;
  }

  .nav {
    position: fixed; /* Change to fixed */
    width: 100%;
    background-color: #F8F6F4;
    flex-direction: column;
    align-items: center;
    padding: 20px 0; /* Add some padding to avoid overlapping the header */
    display: none;
    z-index: 101; /* High z-index to be on top */
    justify-content: flex-start; /* Align items to the start */
  }

  .nav.mobile-nav {
    display: flex;
  }

  .nav-link {
    margin: 10px 0;
    font-size: 1.2em;
  }
  .burger-menu {
      display: flex; /* Показывать всегда */
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 102; /* Чтобы был над логотипом */
    }

    .nav {
      display: none; /* Скрываем обычное меню */
    }

    .container {
      position: relative; /* Чтобы бургер позиционировался относительно контейнера */
    }
    /*футер*/
  .footer-container {
    flex-direction: column; /* Располагаем элементы вертикально */
    text-align: center; /* Центрируем текст */
  }

  .footer-title {
    margin-top: 5px; /* Уменьшаем отступ сверху */
    font-size: 1.3em; /* Уменьшаем размер шрифта */
  }

  .footer-link {
    font-size: 1.2em; /* Уменьшаем размер шрифта */
  }

  .app-links {
    justify-content: center; /* Центрируем иконки приложений */
  }

  .app-image {
    width: 100px; /* Уменьшаем размер иконок */
  }

  .footer-policy{
    font-size: 1.3em;
  }

  .copyright {
    font-size: 1.1em; /* Уменьшаем размер шрифта */
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .footer {
    font-size: 15px; /* Slightly smaller base font size */
  }

  .footer-container {
    justify-content: space-around; /* Spread items more evenly */
  }

  .footer-title {
    font-size: 1.4em; /* Slightly smaller title */
    margin-bottom: 15px;
  }

  .footer-link {
    font-size: 1.3em;
  }

  .app-links {
    gap: 10px; /* Smaller gap */
  }

  .footer-policy{
    font-size: 1.4em;
  }

  .app-image {
    width: 120px; /* Smaller images */
  }

  .copyright {
    font-size: 1.1em;
  }
}
   
</style>

<script>
export default {
  mounted() {
    if (process.client) {
      import('smooth-scroll').then((smoothScroll) => {
        smoothScroll.default('a[href*="#"]', {
          // Options
          speed: 800,
          easing: 'easeInOutCubic',
          offset: 60, // adjust for header height if needed
        });
      });
    }
  },
  
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};

import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const baseUrl = 'https://shaverno-rho.vercel.app/';
const title = 'Шаверно - Шаверма, за которой возвращаются';
const description = 'Городская сеть шаверм, в которых в лучшем виде сочетаются быстрая скорость обслуживания, доступные цены и высокое качество блюд.';
const imageUrl = `${baseUrl}/public/graph.webp`;

onMounted(() => {  // Переносим код в onMounted
  const route = useRoute(); // Получаем route внутри onMounted

  useHead({
    title: title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: `${baseUrl}${route.path}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Шаверно' },
    ],
    link: [
      { rel: 'canonical', href: `${baseUrl}${route.path}` }
    ]
  });
});
</script>