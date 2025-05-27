<template>
  <div v-if="isClient" class="map-container">
    <div id="map"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isClient = ref(false); // Добавляем реактивную переменную
const apiKey = 'e7059ba3-c662-40aa-a1ca-0cbc82eafa22';

onMounted(() => {
  isClient.value = true;
  loadYmaps();
});

const loadYmaps = () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.onload = initMap;
    document.head.appendChild(script);
  }
};

const initMap = () => {
  ymaps.ready(() => {
    const map = new ymaps.Map('map', {
      center: [60.02553, 30.35123],
      zoom: 12,
      controls: ['zoomControl', 'fullscreenControl'],
    });

    const shavernoLocations = [
      { name: 'Россия, Санкт-Петербург, Гражданский проспект, 107к4', lat: 60.02873, lng: 30.41462 },
      { name: 'Санкт-Петербург, Богатырский пр., 7к9', lat: 60.00066, lng: 30.28746 },
      { name: 'Ленинградская область, Мурино, улица Шувалова, 18/8', lat: 60.05904, lng: 30.43105 },
      { name: 'Санкт-Петербург, Гражданский проспект, 66к1', lat: 60.01395, lng: 30.39609 },
      { name: 'Санкт-Петербург, Парфёновская ул., 7к1', lat: 59.90551, lng: 30.31332 },
      { name: 'Санкт-Петербург, пр. Большевиков, 21', lat: 59.90954, lng: 30.48721 },
      { name: 'Санкт-Петербург, ул. Фёдора Абрамова, 8к1', lat: 60.07803, lng: 30.33834 },
      { name: 'Санкт-Петербург, Комендантский пр., 56', lat: 60.04134, lng: 30.23124 },
      { name: 'Санкт-Петербург, ул. Королёва, 7', lat: 60.01263, lng: 30.28990 },
      { name: 'Санкт-Петербург, пр. Энгельса, 141/36', lat: 60.05602, lng: 30.33728 },
      { name: 'Санкт-Петербург, пр. Просвещения, 37к1', lat: 60.05293, lng: 30.35410 },
      { name: 'Санкт-Петербург, пр. Просвещения, 15', lat: 60.05704, lng: 30.32767 },
      { name: 'Санкт-Петербург, Муринская дор., 84', lat: 60.04025, lng: 30.44920 },
      { name: 'Ленинградская область, Мурино, б-р Менделеева, 10', lat: 60.05963, lng: 30.42754 },
      { name: 'Санкт-Петербург, Кудрово, Областная ул., 7', lat: 59.92103, lng: 30.51041 },
      { name: 'Санкт-Петербург, ул. Ильюшина, 5к1', lat: 60.01174, lng: 30.25045 },
      { name: 'Санкт-Петербург, Политехническая ул., 17к1', lat: 60.00333, lng: 30.36580 },
      { name: 'Санкт-Петербург, Кондратьевский пр., 68к4', lat: 59.98943, lng: 30.39567 },
      { name: 'Санкт-Петербург, пр. Науки, 19к3', lat: 60.01723, lng: 30.39258 },
      { name: 'Санкт-Петербург, пр. Художников, 11А', lat: 60.03884, lng: 30.34383 },
      { name: 'Санкт-Петербург, пр. Энгельса, 124к1', lat: 60.04240, lng: 30.32554 }
    ];

    shavernoLocations.forEach(location => {
      const placemark = new ymaps.Placemark([location.lat, location.lng], {
        balloonContent: `<b>${location.name}</b>`
      }, {
        iconColor: '#EB4200'
      });
      map.geoObjects.add(placemark);
    });
  });
};
</script>

<style scoped>
/* Контейнер с картой */
.map-container {
  position: relative;
  width: 100%;
  padding-bottom: 45%;
  overflow: hidden;
}

#map {
  position: absolute;
  width: 100%; /* Добавлено */
  height: 100%; /* Добавлено */
}

.ymaps-2-1-79-balloon__content {
  font-size: 16px;  /* Задаем размер шрифта по умолчанию */
}

@media (max-width: 768px) {
  /* Адаптация контейнера под телефоны и планшеты */
  .map-container {
    padding-bottom: 70%; /* Изменяем соотношение сторон для экранов поменьше (4:3) */
  }

  /* Уменьшаем размер шрифта для лучшей читаемости */
  .ymaps-2-1-79-balloon__content {
    font-size: 13px;
  }

  .ymaps-2-1-79-zoom__button {
    display: inline-block;
    width: 45px;
    height: 45px;
    font-size: 22px;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  /* Адаптация контейнера под планшеты */
  .map-container {
    position: relative; /*  нужно для позиционирования */
    width: 90%;
    padding-bottom: 50%; /* Изменяем соотношение сторон для планшетов (примерно 16:10) */
    margin: 0 auto; /* Центрируем контейнер по горизонтали */
  }

  /* Уменьшаем размер шрифта для лучшей читаемости */
  .ymaps-2-1-79-balloon__content {
    font-size: 15px;
  }

}
</style>