let cards = [
  //создаем переменную для массива
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

const cardList = document.querySelector(".directors-list"); //находим разметку в DOM, куда нужно поместить список режиссеров
const cardList2 = document.querySelector(".top_rated_film"); //находим разметку в DOM, куда нужно поместить список фильмов

const createCard = (obj) => {
  // создаем функцию, которая создает разметку и помещает туда элементы из массива (список режиссеров)
  const block = document.createElement("div"); // создаем переменную с разметкой
  block.className = "directors-list_item"; // задаем класс
  const item = document.createElement("div");
  item.className = "item-info";
  const name = document.createElement("p");
  name.className = "name";
  name.textContent = obj.name; //добавляем текстовое содержимое, вставляем объект из массива
  const career = document.createElement("p");
  career.className = "career";
  career.textContent = obj.career;
  const films = document.createElement("a");
  films.className = "films";
  films.href = obj.films;
  films.textContent = "Фильмография";

  const top_rated_film = document.createElement("p");
  top_rated_film.className = "top_rated_film";
  top_rated_film.textContent = obj.top_rated_film;

  item.append(name); // вставляем уже созданные выше элементы в нужные нам элементы разметки
  item.append(career);
  block.append(item);
  block.append(films);

  return block; // возвращаем готовый блок с разметкой и заполненный элементами из массива
};

const addCard = (objItem, container) => {
  // создаем функцию, которая будет добавлять новые блоки к уже созданным
  const item = createCard(objItem);
  container.append(item);
};

document.addEventListener("DOMContentLoaded", () => {
  // создаем функцию, которая будет перебирать объекты массива по очереди и добавлять их в разметку Html
  cards.forEach((element) => {
    addCard(element, cardList);
  });
});

const cards2 = cards.map(function (obj) {
  // создаем новый массив из объектов уже существующего (top_rated_film)
  return obj.top_rated_film;
});

document.addEventListener("DOMContentLoaded", () => {
  // создаем функцию, которая будет перебирать объекты массива по очереди и добавлять их в разметку Html
  cardList2.textContent = cards2.join(", ");
});
