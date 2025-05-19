<template>
  <section class="section">
    <h2 class="title">Меню</h2>
  </section>
    
  <section class="menu-navigation">
    <div class="container">
      <div class="menu-categories">
        <a href="#shaverma" 
           class="menu-category-button" 
           :class="{ 'active': activeSection === 'shaverma' }"
           @click="scrollToSection('shaverma')">Шаверма</a>
        <a href="#hot-dishes" 
           class="menu-category-button"
           :class="{ 'active': activeSection === 'hot-dishes' }"
           @click="scrollToSection('hot-dishes')">Готовая еда</a>
        <a href="#snacks" 
           class="menu-category-button"
           :class="{ 'active': activeSection === 'snacks' }"
           @click="scrollToSection('snacks')">Закуски</a>
        <a href="#cold-drinks"
           class="menu-category-button"
           :class="{ 'active': activeSection === 'cold-drinks' }"
           @click="scrollToSection('cold-drinks')">Холодные напитки</a>
        <a href="#hot-drinks" 
           class="menu-category-button"
           :class="{ 'active': activeSection === 'hot-drinks' }"
           @click="scrollToSection('hot-drinks')">Горячие напитки</a>
      </div>
    </div>
  </section>

    <section id="shaverma" class="menu-section">
    <div class="menu-section-header">
      <h3 class="menu-section-title">Шаверма</h3>
    </div>
    <div class="menu-items">
      <div class="menu-item" v-for="item in menuItems" :key="item.id" @click="openModal(item)">
        <img :src="item.image" :alt="item.name" class="menu-item-image" />
        <h4 class="menu-item-name">{{ item.name }}</h4>
        <p class="menu-item-description">{{ item.description }}</p>
        <p class="menu-item-price">{{ item.price }}</p>
      </div>
    </div>
  </section>

    <section id="hot-dishes" class="menu-section">
    <div class="menu-section-header">
      <h3 class="menu-section-title">Горячие блюда</h3>
    </div>
    <div class="menu-items">
      <div class="menu-item" v-for="hotDish in hotDishes" :key="hotDish.id" @click="openModal(hotDish)">
        <img :src="hotDish.image" :alt="hotDish.name" class="menu-item-image" />
        <h4 class="menu-item-name">{{ hotDish.name }}</h4>
        <p class="menu-item-description">{{ hotDish.description }}</p>
        <p class="menu-item-price">{{ hotDish.price }}</p>
      </div>
    </div>
  </section>

  <section id="snacks" class="menu-section">
    <div class="menu-section-header">
      <h3 class="menu-section-title">Закуски</h3>
    </div>
    <div class="menu-items">
      <div class="menu-item" v-for="snack in snacks" :key="snack.id" @click="openModal(snack)">
        <img :src="snack.image" :alt="snack.name" class="menu-item-image" />
        <h4 class="menu-item-name">{{ snack.name }}</h4>
        <p class="menu-item-description">{{ snack.description }}</p>
        <p class="menu-item-price">{{ snack.price }}</p>
      </div>
    </div>
  </section>

  <section id="cold-drinks" class="menu-section">
    <div class="menu-section-header">
      <h3 class="menu-section-title">Холодные напитки</h3>
    </div>
    <div class="menu-items">
      <div class="menu-item" v-for="drink in drinks" :key="drink.id" @click="openModal(drink)">
        <img :src="drink.image" :alt="drink.name" class="menu-item-image" />
        <h4 class="menu-item-name">{{ drink.name }}</h4>
        <p class="menu-item-description">{{ drink.description }}</p>
        <p class="menu-item-price">{{ drink.price }}</p>
      </div>
    </div>
  </section>

  <section id="hot-drinks" class="menu-section">
    <div class="menu-section-header">
      <h3 class="menu-section-title">Горячие напитки</h3>
    </div>
    <div class="menu-items">
      <div class="menu-item" v-for="hotDrink in hotDrinks" :key="hotDrink.id" @click="openModal(hotDrink)">
        <img :src="hotDrink.image" :alt="hotDrink.name" class="menu-item-image" />
        <h4 class="menu-item-name">{{ hotDrink.name }}</h4>
        <p class="menu-item-description">{{ hotDrink.description }}</p>
        <p class="menu-item-price">{{ hotDrink.price }}</p>
      </div>
    </div>
  </section>

    <!-- Модальное окно -->
    <div class="modal" v-if="isModalOpen">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <div class="modal-left-side">
          <img :src="selectedItem.image" :alt="selectedItem.name" class="modal-image" />
        </div>
        <div class="modal-right-side">
          <h4 class="modal-name">{{ selectedItem.name }}</h4>
          <p class="modal-weight">{{ selectedItem.weight }}</p>
          <p class="modal-description">{{ selectedItem.description }}</p>
          <p class="modal-calories">{{ selectedItem.calories }}</p>
          <p class="modal-price">{{ selectedItem.price }}</p>
          <p class="order-text">Заказать в приложении:</p>
          <div class="order-images">
            <a href="https://play.google.com/store/apps/details?id=starter.shaverno.client&pli=1" target="_blank">
              <img src="public/google.webp" alt="Google Play" class="order-image" />
            </a>
            <a href="https://apps.apple.com/us/app/%D1%88%D0%B0%D0%B2%D0%B5%D1%80%D0%BD%D0%BE/id6736944453" target="_blank">
              <img src="public/appSt.webp" alt="App Store" class="order-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import 'assets/css/pages/menu.css'; 

  import { ref } from 'vue';

  const menuItems = ref([
  {
    id: 1,
    image: "/sh1.webp",
    name: "Баварская",
    description: "Лаваш, альпийская колбаска, свежие овощи(китайская капуста, лук, огурцы и помидоры), картофель фри,кетчуп, чесночный соус и соус релиш.",
    price: "289 ₽",
    weight: "395г.",
    calories: "157 ккал  4.3 белки  2.6 жиры  28.2 углеводы"
  },
  {
    id: 2,
    image: "/sh2.webp",
    name: "Шаверма грибная",
    description: "Лаваш, обжаренное на гриле сочное филе курицы, шампиньоны, свежие овощи(китайская капуста, лук, огурцы и помидоры), чесночный соус.",
    price: "329 ₽",
    weight: "420г.",
    calories: "180 ккал  5.1 белки  3.5 жиры  30.3 углеводы"
  },
  {
    id: 3,
    image: "/sh3.webp",
    name: "Шаверма острая",
    description: "Лаваш, обжаренное на гриле сочное филе курицы, свежие овощи(китайская капуста, лук, огурцы и помидоры), острый соус.",
    price: "309 ₽",
    weight: "380г.",
    calories: "165 ккал  4.5 белки  2.5 жиры  29.2 углеводы"
  }
]);
const hotDishes = ref([
  {
    id: 4,
    image: "/g1.webp", // Replace with actual image path
    name: "Борщ со сметаной",
    description: "Ароматный и густой, приготовленный по традиционному рецепту борщ с говядиной.",
    price: "249 ₽",
    weight: "300г.",
    calories: "186 ккал  4.9 белки  19.3 жиры  32.7 углеводы"
  },
  {
    id: 5,
    image: "/g2.webp", // Replace with actual image path
    name: "Солянка мясная",
    description: "Мясной, наваристый, сытный суп, в котором используется мясо курицы и колбасные изделия.",
    price: "269 ₽",
    weight: "300г.",
    calories: "206 ккал  8.1 белки  21.7 жиры  41.2 углеводы"
  },
  {
    id: 6,
    image: "/g3.webp", // Replace with actual image path
    name: "Том Ям",
    description: "Традиционное тайское блюдо - остро-кислый суп с морепродуктами(креветками и мидиями).",
    price: "299 ₽",
    weight: "300г.",
    calories: "378 ккал  23.1 белки  25.5 жиры  14.4 углеводы"
  }
]);
const snacks = ref([
  {
    id: 7,
    image: "/s1.webp", // Замените на путь к изображению
    name: "Картофель фри",
    description: "Классическое закусочное блюдо, состоящее из кусочков картофеля, обжаренных до золотистой корочки.",
    price: "99 ₽",
    weight: "100г.",
    calories: "274 ккал 2.9 белки 13.4 жиры 34.2 углеводы"
  },
  {
    id: 8,
    image: "/s2.webp", // Замените на путь к изображению
    name: "Картофель айдахо",
    description: "Ароматный, хрустящий снаружи и мягкий внутри картофель с розмарином и специями.",
    price: "119 ₽",
    weight: "100г.",
    calories: "131 ккал 2.1 белки 4.3 жиры 19.2 углеводы"
  },
  {
    id: 9,
    image: "/s3.webp", // Замените на путь к изображению
    name: "Наггетсы 5 шт.",
    description: "Нежное мясо в хрустящей панировке.",
    price: "139 ₽",
    weight: "100г.",
    calories: "164 ккал 9.2 белки 6.1 жиры 17.6 углеводы"
  }
]);
const drinks = ref([
  {
    id: 10,
    image: "/Hn.webp", // Замените на путь к изображению
    name: "Морс Чёрная смородина 0,5",
    description: "Натуральный домашний морс из чёрной смородины.",
    price: "129 ₽",
    weight: "500мл.",
    calories: "49 ккал  11 углеводы"
  },
  {
    id: 11,
    image: "/Hn2.webp", // Замените на путь к изображению
    name: "Компот Сухофрукты 0,5",
    description: "Натуральный компот из яблока, сливы и абрикоса.",
    price: "129 ₽",
    weight: "500мл.",
    calories: "30 ккал  7 углеводы"
  },
  {
    id: 12,
    image: "/Hn3.webp", // Замените на путь к изображению
    name: "Компот Клубника 0,5",
    description: "Натуральный компот из клубники, сливы и черноплодной рябины.",
    price: "139 ₽",
    weight: "500мл.",
    calories: "44 ккал  9 углеводы"
  }
]);
const hotDrinks = ref([
  {
    id: 13,
    image: "/Gn1.webp", // Замените на путь к изображению
    name: "Чёрный чай с чабрецом пак.",
    description: "Чай чёрный байховый с чабрецом.",
    price: "55 ₽",
    weight: "200мл.",
  },
  {
    id: 14,
    image: "/Gn2.webp", // Замените на путь к изображению
    name: "Капучино",
    description: "Молоко питьевое ультрапастеризованное 2,5%, вода питьевая, купаж арабики из Бразилии и вьетнамской робусты высшего качества.",
    price: "129 ₽",
    weight: "300мл.",
    calories: "11 ккал  1 углеводы"
  },
  {
    id: 15,
    image: "/Gn3.webp", // Замените на путь к изображению
    name: "Латте",
    description: "Молоко питьевое ультрапастеризованное 2,5%, вода питьевая, купаж арабики из Бразилии и вьетнамской робусты высшего качества.",
    price: "129 ₽",
    weight: "300мл.",
    calories: "11 ккал  1 углеводы"
  }
]);
const activeSection = ref('');

const scrollToSection = (sectionId) => {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

onMounted(() => {
  // При загрузке страницы проверяем хеш и активируем нужную секцию
  const hash = window.location.hash;
  if (hash) {
    activeSection.value = hash.substring(1);
    scrollToSection(activeSection.value);
  }
});

const isModalOpen = ref(false);
const selectedItem = ref(null);

const openModal = (item) => {
  selectedItem.value = item;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
  </script>