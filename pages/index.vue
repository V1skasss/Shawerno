<template>
    <div>
      <section class="first-block">
        <div class="first-block-content">
          <h1>Мы готовим шаверму, <br> за которой возвращаются</h1>
          <NuxtLink to="/menu" class="menu-button">Меню</NuxtLink>
        </div>
      </section>
  
      <section class="section">
        <h2 class="title">О нас</h2>
        <div class="container">
          <div class="about-content">
            <p>
              Добро пожаловать в <span>"Шаверно"</span> — место, где традиции встречаются с современными вкусами! Мы гордимся тем, что предлагаем нашим гостям лучшие шавермы в городе, приготовленные с любовью и заботой о качестве.
            </p>
            <NuxtLink to="/about" class="read-more-button">Читать подробнее</NuxtLink>
          </div>
          <div class="about-image">
            <img src="public/blokABOUT.webp" alt="блок о нас" />
          </div>
        </div>
      </section>
  
    <section class="section">
    <h2 class="title">Акции</h2>
    <div class="container actions-container">
      <div class="actions-wrapper">
        <div
          v-for="slide in slides"
          :key="slide.id"
          class="action-item" 
          @click="openModal(slide)" >
          <img :src="slide.image" :alt="slide.title" />
          <h3>{{ slide.title }}</h3>
          <p class="price">{{ slide.price }}</p>
        </div>
      </div>
      <p class="disclaimer">*Акция действует только при заказе в заведении</p>
    </div>

   <!-- Модальное окно -->
    <div class="actions-modal" v-if="isModalOpen">
      <div class="actions-modal-content">
        <span class="actions-modal-close" @click="closeModal">&times;</span>
        <div class="actions-modal-left-side">
          <img
            :src="selectedSlide.image"
            :alt="selectedSlide.title"
            class="actions-modal-image"
          />
        </div>
        <div class="actions-modal-right-side">
          <h4 class="actions-modal-name">{{ selectedSlide.title }}</h4>
          <p class="actions-modal-weight">{{ selectedSlide.weight }}</p>
          <p class="actions-modal-description">{{ selectedSlide.description }}</p>
          <p class="actions-modal-price">{{ selectedSlide.price }}</p>
        </div>
      </div>
    </div>
  </section>

    <section class="section">
    <h2 class="title">Галерея</h2>
    <div class="container">
      <div class="gallery-wrapper">
        <div class="gallery">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="gallery-item"
            @click="openGalleryModal(image)"
          >
            <img :src="image" :alt="`Галерея ${index + 1}`" />
          </div>
        </div>
        <NuxtLink to="/menu" class="menu-button">Перейти в меню</NuxtLink>
      </div>
    </div>

    <!-- Модальное окно для галереи -->
    <div class="gallery-modal" v-if="isGalleryModalOpen">
      <div class="gallery-modal-content">
        <span class="gallery-modal-close" @click="closeGalleryModal">&times;</span>
        <img :src="selectedImage" alt="Полный размер" class="gallery-modal-image" />
      </div>
    </div>
  </section>

    <section class="section">
      <h2 class="title">Работа</h2>
      <div class="container">
        <div class="work-container">
          <div class="work-content">
            <h3 class="work-title">Приглашаем на работу в ШАВЕРНО</h3>
            <p class="work-salary">ДОХОД ОТ 75000 ₽</p>
            <NuxtLink to="/work" class="work-button">Узнать подробнее</NuxtLink>
          </div>
          <div class="work-image">
            <img src="public/RabotaGL.webp" alt="Работа в ШАВЕРНО" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="title">Тайный гость</h2>
      <div class="container">
        <div class="secret-guest-wrapper">
          <img src="public/gost.webp" alt="Тайный гость" class="secret-guest-image" />
          <NuxtLink to="/secret" class="read-more-button">Стать участником</NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <section class="section">
    <h2 class="title">Наши адреса</h2>
    <div class="container">
      <ClientOnly>  <!-- Оборачиваем компонент в ClientOnly -->
        <ShavernoMapClientOnly />
        <template #fallback>
          <div>Загрузка карты...</div>  <!-- Отображается во время SSR -->
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import 'assets/css/pages/index.css';
import ShavernoMapClientOnly from '~/components/ShavernoMapClientOnly.vue';


const slides = ref([
  {
    id: 1,
    image: '/1sl.webp',
    title: 'МИНИ КОМБО',
    price: '299р.',
    weight: '1000г',
    description: 'Мини шаверма, хрустящий картофель фри, соус и любимый напиток - всё, что нужно для приятного перерыва!',
  },
  {
    id: 2,
    image: '/2sl.webp',
    title: 'СЫТНОЕ КОМБО',
    price: '399р.',
    weight: '1000г',
    description: 'Вкусный напиток, мини шаверма с любимым домашним блюдом - для тех, кто ценит время.',
  },
  {
    id: 4,
    image: '/4sl.webp',
    title: 'СТАНДАРТНОЕ КОМБО',
    price: '369р.',
    weight: '1000г',
    description: 'Сочная шаверма стандарт, картофель фри с соусом и ваш любимый напиток. Полноценный обед или ужин в одном комбо!',
  },
]);

const isModalOpen = ref(false);
const selectedSlide = ref(null);

const openModal = (slide) => {
  console.log('openModal', slide);
  selectedSlide.value = slide;
  isModalOpen.value = true;
};

const closeModal = () => {
  console.log('closeModal');
  isModalOpen.value = false;
};

const images = [
  '/gal1.webp',
  '/gal2.webp',
  '/gal3.webp',
  '/gal6.webp',
  '/gal5.webp',
  '/gal4.webp',
];

const isGalleryModalOpen = ref(false);
const selectedImage = ref(null);

const openGalleryModal = (image) => {
  selectedImage.value = image;
  isGalleryModalOpen.value = true;
};

const closeGalleryModal = () => {
  selectedImage.value = null;
  isGalleryModalOpen.value = false;
};
</script>



<style scoped>
.price {
  color: #EB4200;
  font-size: 23px;
  font-weight: bold;
  margin-top: -10px;
}
</style>