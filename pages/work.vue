<template>
    <section class="section">
    <h2 class="title">Наши вакансии</h2>
    <div class="container">
      <div class="vacancies">
        <div class="vacancy-item">
          <div class="vacancy-image-container">
            <img src="public/fon.webp" alt="Сборщик блюд" class="vacancy-image" />
            <div class="vacancy-overlay"></div>
            <div class="vacancy-title">Сборщик блюд</div>
            <ul class="vacancy-description">
              <li>Собирать блюда из ингредиентов</li>
              <li>Поддерживать чистоту и порядок на рабочем месте</li>
            </ul>
          </div>
        </div>

        <div class="vacancy-item">
          <div class="vacancy-image-container">
            <img src="public/fon.webp" alt="Кассир" class="vacancy-image" />
            <div class="vacancy-overlay"></div>
            <div class="vacancy-title">Кассир</div>
            <ul class="vacancy-description">
              <li>Принимать заказы и осуществлять расчеты с гостями</li>
              <li>Поддерживать порядок в зоне кассы</li>
            </ul>
          </div>
        </div>

        <div class="vacancy-item">
          <div class="vacancy-image-container">
            <img src="public/fon.webp" alt="Помощник" class="vacancy-image" />
            <div class="vacancy-overlay"></div>
            <div class="vacancy-title">Помощник</div>
            <ul class="vacancy-description">
              <li>Помощь в подготовке ингредиентов</li>
              <li>Поддержание чистоты и порядка на кухне</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="title">Условия сотрудничества</h2>
    <div class="container">
      <div class="work-container">
        <div class="work-content">
          <div class="job-item" v-for="item in jobItems" :key="item.id">
            <span class="job-number" :style="{ borderColor: item.borderColor }">{{ item.number }}</span>
            <div class="job-text">
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="work-image">
          <img src="public/vac.webp" alt="Условия сотрудничества" class="job-image" />
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <p class="contact-text">
        Если тебя заинтересовала одна из вакансий, свяжись с нами! Мы с удовольствием ответим на твои вопросы и расскажем о дальнейших шагах. В
        <span class="shaverno-text">“Шаверно”</span> тебя ждет дружный коллектив, достойная оплата и возможности для роста. Не упусти свой шанс!
      </p>
    </div>
  </section>

  <section class="section">
    <div class="contact-section">
      <div class="contact-blocks">
        <p class="contact-block">Нам важен <span class="black-text">ТЫ</span>, а не опыт!</p>
        <p class="contact-block">
          +7 939 758-90-21 <br />
          <span class="black-text">Отдел кадров</span>
        </p>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
  import 'assets/css/pages/work.css';

  const jobItems = [
  { id: 1, number: '1', text: 'Фиксированная ставка 250 р/час'},
  { id: 2, number: '2', text: 'Премия от выручки'},
  { id: 3, number: '3', text: 'Обучение и оплачиваемая стажировка'},
  { id: 4, number: '4', text: 'Питание, форма и медкнижка за наш счет'},
  { id: 5, number: '5', text: 'Работа рядом с домом'},
];
  </script>