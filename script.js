
function updateRemoveButtonsVisibility() {
  const rows = document.querySelectorAll('.cond-row');
  rows.forEach((row, i) => {
    const btn = row.querySelector('.removeBtn');
    if (btn) btn.classList.toggle('hidden', rows.length === 1);
  });
}

const conditionerTypes = [
  "Настенный",
  "Кассетный",
  "Канальный",
  "Калонный",
  "Мульти сплит",
  "Промышленный",
  "Другое"
];

document.getElementById('addBtn').addEventListener('click', () => {
  const container = document.getElementById('conditionerContainer');
  const row = document.createElement('div');
  row.className = 'cond-row';

  // Создаём селект со всеми опциями
  const select = document.createElement('select');
  select.name = 'type';
  conditionerTypes.forEach(type => {
    const option = document.createElement('option');
    option.textContent = type;
    select.appendChild(option);
  });

  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.name = 'quantity';
  quantityInput.min = '1';
  quantityInput.value = '1';

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'removeBtn';
  removeBtn.innerHTML = '&times;';

  row.appendChild(select);
  row.appendChild(quantityInput);
  row.appendChild(removeBtn);
  container.appendChild(row);

  updateRemoveButtonsVisibility();
});


document.getElementById('conditionerContainer').addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    e.target.parentElement.remove();
    updateRemoveButtonsVisibility();
  }
});

document.getElementById('phone').addEventListener('input', (e) => {
  let val = e.target.value.replace(/\D/g, '');
  if (val.startsWith('998')) val = val.slice(3);
  val = val.slice(0, 9);
  let result = '+998';
  if (val.length > 0) result += ' ' + val.slice(0, 2);
  if (val.length > 2) result += ' ' + val.slice(2, 5);
  if (val.length > 5) result += ' ' + val.slice(5, 7);
  if (val.length > 7) result += ' ' + val.slice(7, 9);
  e.target.value = result;
});
const translations = {
  ru: {
    title: "Кондиционеры от",
    add: "Добавить кондиционер",
    phoneLabel: "Телефон:",
    cityLabel: "Город:",
    commentLabel: "Комментарий:",
    submit: "Отправить заявку",
    types: {
      wall: "Настенный",
      cassette: "Кассетный",
      duct: "Канальный",
      column: "Калонный",
      multi: "Мульти сплит",
      industrial: "Промышленный",
      other: "Другое"
    },
    cities: {
      tashkent: "Ташкент",
      samarkand: "Самарканд",
      bukhara: "Бухара",
      namangan: "Наманган",
      andijan: "Андижан",
      fergana: "Фергана",
      karshi: "Карши",
      nukus: "Нукус",
      navoi: "Навои",
      jizzakh: "Джиззак",
      gulistan: "Гулистан",
      urgench: "Ургенч"
    }
  },
  uz: {
    title: "Konditsionerlar",
    add: "Konditsioner qo‘shish",
    phoneLabel: "Telefon:",
    cityLabel: "Shahar:",
    commentLabel: "Izoh:",
    submit: "Buyurtma yuborish",
    types: {
      wall: "Devoriy",
      cassette: "Kasseta",
      duct: "Kanal",
      column: "Ustunli",
      multi: "Multi split",
      industrial: "Sanoat",
      other: "Boshqa"
    },
    cities: {
      tashkent: "Toshkent",
      samarkand: "Samarqand",
      bukhara: "Buxoro",
      namangan: "Namangan",
      andijan: "Andijon",
      fergana: "Farg‘ona",
      karshi: "Qarshi",
      nukus: "Nukus",
      navoi: "Navoiy",
      jizzakh: "Jizzax",
      gulistan: "Guliston",
      urgench: "Urganch"
    }
  },
  en: {
    title: "Air Conditioners by",
    add: "Add Conditioner",
    phoneLabel: "Phone:",
    cityLabel: "City:",
    commentLabel: "Comment:",
    submit: "Submit Order",
    types: {
      wall: "Wall-mounted",
      cassette: "Cassette",
      duct: "Duct",
      column: "Column",
      multi: "Multi split",
      industrial: "Industrial",
      other: "Other"
    },
    cities: {
      tashkent: "Tashkent",
      samarkand: "Samarkand",
      bukhara: "Bukhara",
      namangan: "Namangan",
      andijan: "Andijan",
      fergana: "Fergana",
      karshi: "Karshi",
      nukus: "Nukus",
      navoi: "Navoi",
      jizzakh: "Jizzakh",
      gulistan: "Gulistan",
      urgench: "Urgench"
    }
  }
};

const translation = {
  ru: {
    title: "Кондиционеры от",
    add: "Добавить кондиционер",
    phoneLabel: "Телефон:",
    cityLabel: "Город:",
    commentLabel: "Комментарий:",
    submit: "Отправить заявку"
  },
  uz: {
    title: "Konditsionerlar",
    add: "Konditsioner qo‘shish",
    phoneLabel: "Telefon:",
    cityLabel: "Shahar:",
    commentLabel: "Izoh:",
    submit: "Buyurtma yuborish"
  },
  en: {
    title: "Air Conditioners by",
    add: "Add Conditioner",
    phoneLabel: "Phone:",
    cityLabel: "City:",
    commentLabel: "Comment:",
    submit: "Submit Order"
  }
};

let currentLang = 'ru';
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'ru' ? 'uz' : currentLang === 'uz' ? 'en' : 'ru';
  translate();
});

function translate() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

const langToggle = document.getElementById('langToggle');
const langMenu = document.getElementById('langMenu');

langToggle.addEventListener('click', () => {
  langMenu.classList.toggle('hidden');
});

// Скрыть меню при клике вне его
document.addEventListener('click', (e) => {
  if (!langMenu.contains(e.target) && e.target !== langToggle) {
    langMenu.classList.add('hidden');
  }
});

// Обработка выбора языка
document.querySelectorAll('.lang-option').forEach(option => {
  option.addEventListener('click', () => {
    const selectedLang = option.dataset.lang;
    changeLanguage(selectedLang); // <-- если у тебя уже есть функция
    langMenu.classList.add('hidden');
  });
});



function translate() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translation[currentLang][key]) {
      el.textContent = translation[currentLang][key];
    }
  });

  // Переводим option'ы кондиционеров
  document.querySelectorAll('select[name="type"] option').forEach(opt => {
    const key = opt.dataset.i18nOption;
    if (key && translation[currentLang].types[key]) {
      opt.textContent = translation[currentLang].types[key];
    }
  });

  // Переводим города
  document.querySelectorAll('#city option').forEach(opt => {
    const key = opt.dataset.i18nOption;
    if (key && translation[currentLang].cities[key]) {
      opt.textContent = translation[currentLang].cities[key];
    }
  });
}


function translate() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  translateOptions(); // <-- добавили вызов здесь
}


updateRemoveButtonsVisibility();
