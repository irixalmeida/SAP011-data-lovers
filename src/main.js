import { filterByDirector } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/ghibli/ghibli.js";
// import data from './data/rickandmorty/rickandmorty.js';

const directorSelect = document.querySelector("#director");
const orderSelect = document.querySelector("#order");
const filterForm = document.querySelector("form");
const filmList = document.querySelector("#list");

function createFilmItem(film) {
  const filmItem = `
      <div class="film-item">
          <div class="film-item-front">
              <img src="${film.poster}" class="film-poster">
              <h3>${film.title}</h3>
          </div>
          <div class="film-item-back hide">
              <p>${film.release_date}</p>
              <p>${film.director}</p>
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


function updateFilmList(films) {
  filmList.innerHTML = ""; // Limpar o conteúdo atual

  films.forEach(film => {
    const filmItem = createFilmItem(film);
    filmList.innerHTML += filmItem;
  });
}
function handleDirectorSelectChange() {
  const filteredFilms = filterByDirector(directorSelect.value, data);
  updateFilmList(filteredFilms);
}

directorSelect.addEventListener("change", handleDirectorSelectChange);



orderSelect.addEventListener("change", handleOrderChange);

function handleOrderChange() {
  const selectedOption = orderSelect.value;

  const sortedFilms = data.films.slice(); // Copia o array original para não modificá-lo diretamente

  if (selectedOption === "A-Z") {

    sortedFilms.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  } else if (selectedOption === "Z-A") {

    sortedFilms.sort(function (a, b) {
      return b.title.localeCompare(a.title);
    });
  }
  console.log(sortedFilms);
}

//updateFilmList(sortedFilms)





