const bags = [
  "Тоут",
  "Шоппер",
  "Хобо",
  "Мессенджер",
  "Планшет",
  "Дипломат",
  "Купол",
  "Сэдл",
  "Мешок",
  "Кисет",
  "Ведро",
  "Торба",
  "Клатч",
  "Конверт",
  "Минодьер",
  "Фолдовер",
  "Ридикюль",
  "Таблетка",
  "Бокс",
  "Корзинка",
  "Сэтчел",
  "Рюкзак",
  "Слинг",
  "Уикендер",
  "Чемодан",
  "Саквояж",
  "Дафл",
  "Бельтбэг",
  "Муфта",
  "Багет"
];
const lastNames = [
  "Моне",
  "Винчи",
  "Гога",
  "Пикассо",
  "Рубенса",
  "Ренуара",
  "Санти",
  "Рейна",
  "Дали",
  "Боттичелли",
  "Гогена",
  "Буанаротти",
  "Климта",
  "Мунка",
  "Сезанна",
  "Мане",
  "Босха",
  "Матисса",
  "Кало",
  "Гойя"
];

const btn = document.querySelector(".btn-action");
const form = document.querySelector(".form-name");

const getRandomNum = arr => {
  return Math.floor(Math.random() * arr.length);
};

btn.addEventListener("click", e => {
  const currentBag = bags[getRandomNum(bags)];
  const currentName = lastNames[getRandomNum(lastNames)];
  const fullName = `${currentBag} ${currentName}`;

  form.value = fullName;
  e.preventDefault();
});
