const API = {
  baseUrl: "http://localhost:3001",
  getFilms: "/films/list",
  getByIdFilms: "/films/get/",
  updateFilms: "/films/update/",
  createFilms: "/films/create",
  deleteFilms: "/films/delete",
  edit: "/edit/",
};

const CONTENT = {
  // App
  LOGO: "АндрюхинПоиск",
  ALL_FILMS: "Все фильмы",
  ADD_FILM: "Добавить фильм",
  // Edit, Form, List
  FILM_NAME: "Название фильма",
  FILM_GENRE: "Жанр",
  FILM_RAITING: "Рейтинг",
  MY_FILM_RAITING: "Моя оценка",
  FILM_KINOPOISK_RAITING: "Оценка кинопоиска",
  SAVE: "Сохранить",
  DELETE: "Удалить",
  UPDATE: "Изменить",
};

export { API, CONTENT };
