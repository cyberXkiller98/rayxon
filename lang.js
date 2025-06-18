const translations = {
    en: {
      headline: "Burxoniddin & Rayxona",
      navHome: "Home",
      navStory: "Our Story",
      navMoments: "Our Moments",
      eventDate: "July 6, 2025 • Tashkent, Uzbekistan",
      countdownText: "Days To Go!",
      storyText: "Once upon a time in Tashkent, two hearts met and promised forever. Join us to celebrate their journey of love.",
      locationLink: "📍 Elbrus",
      momentsTitle: "Our Moments",
      moment1Date: "March 15, 2021",
      moment1Line1: "We met under spring sunshine",
      moment1Line2: "A smile changed everything",
      moment2Date: "June 20, 2022",
      moment2Line1: "First trip together",
      moment2Line2: "We knew we were meant to be",
      moment3Date: "December 25, 2023",
      moment3Line1: "Engaged on Christmas Eve",
      moment4Date: "July 6, 2025",
      moment4Line1: "The day we say 'I do'",
      moment4Line2: "With love, forever begins",
      footer: "© 2025 Burxoniddin & Rayxona. All rights reserved."
    },
    uz: {
      headline: "Burxoniddin & Rayxona",
      navHome: "Bosh sahifa",
      navStory: "Bizning hikoya",
      navMoments: "Bizning lahzalar",
      eventDate: "6 Iyul, 2025 • Toshkent, Oʻzbekiston",
      countdownText: "Qolgan kunlar",
      storyText: "Toshkentda bir kun ikki yurak uchrashdi va abadiylikka va'da berdi. Biz bilan ularning sevgi safarini nishonlang.",
      locationLink: "📍 Elbrus",
      momentsTitle: "Bizning lahzalar",
      moment1Date: "15 Mart, 2021",
      moment1Line1: "Bahor quyoshi ostida uchrashdik",
      moment1Line2: "Tabassum hammasini o‘zgartirdi",
      moment2Date: "20 Iyun, 2022",
      moment2Line1: "Birinchi sayohat birga",
      moment2Line2: "Biz bir-birimiz uchun yaratilgan edik",
      moment3Date: "25 Dekabr, 2023",
      moment3Line1: "Rojdestvo kechasi unashtik",
      moment4Date: "6 Iyul, 2025",
      moment4Line1: "Biz 'ha' deb aytamiz",
      moment4Line2: "Muhabbat bilan abadiyat boshlanadi",
      footer: "© 2025 Burxoniddin & Rayxona. Barcha huquqlar himoyalangan."
    },
    ru: {
      headline: "Бурхониддин и Райхона",
      navHome: "Главная",
      navStory: "Наша история",
      navMoments: "Наши моменты",
      eventDate: "6 июля 2025 • Ташкент, Узбекистан",
      countdownText: "Осталось дней",
      storyText: "Однажды в Ташкенте встретились два сердца и пообещали быть вместе навсегда. Присоединяйтесь к празднованию их любви.",
      locationLink: "📍 Эльбрус",
      momentsTitle: "Наши моменты",
      moment1Date: "15 марта 2021",
      moment1Line1: "Мы встретились под весенним солнцем",
      moment1Line2: "Одна улыбка изменила всё",
      moment2Date: "20 июня 2022",
      moment2Line1: "Первая поездка вместе",
      moment2Line2: "Мы поняли — мы созданы друг для друга",
      moment3Date: "25 декабря 2023",
      moment3Line1: "Помолвка в канун Рождества",
      moment4Date: "6 июля 2025",
      moment4Line1: "День, когда мы скажем 'Да'",
      moment4Line2: "С любовью начинается вечность",
      footer: "© 2025 Бурхониддин и Райхона. Все права защищены."
    }
  };
  
  function applyTranslations(lang) {
    const strings = translations[lang] || translations.en;
  
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (strings[key]) {
        el.textContent = strings[key];
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language.toLowerCase();
    let langKey = "en";
  
    if (userLang.startsWith("uz")) langKey = "uz";
    else if (userLang.startsWith("ru")) langKey = "ru";
    else langKey = "en";
  
    applyTranslations(langKey);
  });