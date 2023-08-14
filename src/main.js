import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/ghibli/ghibli.js";
// import data from './data/rickandmorty/rickandmorty.js';

function createFilmItem(film) {
  const filmItem = `
    <div class="film-item">
        <div class="film-item-front">
            <img src="${film.poster}" class="film-poster">
            <h3>${film.title}</h3>
        </div>
        <div class="film-item-back hide">
            <p>${film.release_date}</p>
        </div>
    </div>
  `;

  return filmItem;
}

const listFilms = data.films.map((film) => {
  const templateItem = createFilmItem(film);

  return templateItem;
});

document.querySelector("#list").innerHTML = listFilms.join("");
