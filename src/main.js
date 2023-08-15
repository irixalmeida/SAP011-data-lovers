import {filterByDirector, handleOrderChange} from "./data.js";
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

//Função que é executada sempre que houver uma alteração no elemento HTML com o ID directorSelect
function handleDirectorSelectionChange() {
  const filteredFilms = filterByDirector(directorSelect.value, data);
  updateFilmList(filteredFilms);
}

// Isso garante que a lista de filmes seja atualizada de acordo com a seleção do diretor
directorSelect.addEventListener("change", handleDirectorSelectionChange);



//updatedFilmListBasedOnOrder(sortedFilms)

function updatedFilmListBasedOnOrder(sortedFilms){
  filmList.innerHTML = "";

  sortedFilms.forEach(film => {
    const filmItem = createFilmItem(film);
    filmList.innerHTML += filmItem;
  });
}

function handleOrderSelectionChange() {
  const filmOrderChange = handleOrderChange(orderSelect.value, data);
  updatedFilmListBasedOnOrder(filmOrderChange);
}

orderSelect.addEventListener("change", handleOrderSelectionChange);









