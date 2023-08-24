import {
  filterByDirector,
  filterByReleaseDate,
  handleOrderChange,
  computeStats,
  filterBySearch,
} from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/ghibli/ghibli.js";
// import data from './data/rickandmorty/rickandmorty.js';

const directorSelect = document.querySelector("#director");
const orderSelect = document.querySelector("#order");
const dateSelect = document.querySelector("#releaseDate");
const filmList = document.querySelector("#list");
const searchText = document.querySelector(".search-text");
const searchLocation = document.querySelector(".search-btn");

//modal
const modal = document.getElementById("filmModal");
const span = document.getElementById("closeModal");

filmList.addEventListener("click", function (event) {
  if (event.target.closest(".film-item")) {
    const filmId = event.target.closest(".film-item").getAttribute("data-id");
    showModal(filmId);
  }
});

//Isso define a função chamada createFilmItem com um parâmetro film. A função será responsável por criar o HTML do item de filme com base nas informações fornecidas.Ela cria um elemento de filme em HTML dinamicamente. Ela recebe o objeto `film` como argumento e retorna uma string que contém o HTML formatado com base nas informações do filme.
function createFilmItem(film) {
  const filmItem = `
      <div class="film-item" data-id="${film.id}">
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

//Nessa função chamada showModal, o parâmetro filmId é passado para a função. O objetivo dela é exibir um modal com as informações do filme. Ela encontra o filme correto no dataset usando o filmId. Em seguida, preenche as informações do filme no modal. Por fim, preenche a lista de personagens.
function showModal(filmId) {
  const film = data.films.find((f) => f.id === filmId);
  //const percentage = computeStats(filmId);
  const percentage = computeStats(filmId, data);

  const modalPercentage = document.getElementById("percentage");

  modalPercentage.textContent = `O Filme ${film.title} possui ${percentage}% do total de personagens da franquia`;

  // Encontre o filme correto no dataset usando o filmId
  const selectedFilm = data.films.find((film) => film.id === filmId);

  // Preencha as informações do filme no modal
  document.getElementById("filmDetails").innerHTML = `
   <div class="wrap">
      <img src="${selectedFilm.poster}" alt="${selectedFilm.title}" class="film-poster-in-modal">
      <div>
        <h3>${selectedFilm.title}</h3>
        <p>Descrição: ${selectedFilm.description}</p>
        <p>Diretor: ${selectedFilm.director}</p>
        <p>Produtor: ${selectedFilm.producer}</p>
        <p>Data de Lançamento: ${selectedFilm.release_date}</p>
        <p>Pontuação RT: ${selectedFilm.rt_score}</p>
      </div>
    </div>
  `;

  // Preencha a lista de personagens
  const charactersCards = selectedFilm.people
    .map(
      (character) => `
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${character.img}" alt="${character.name}" style="width:100%;height:100%;">
            <p>${character.name}</p>
          </div>
          <div class="flip-card-back" >
            <h4 >${character.name}</h4>
            <p class="flip-card-description">Gênero: ${character.gender}</p>
            <p class="flip-card-description">Idade: ${character.age}</p>
            <p class="flip-card-description">Cor dos Olhos: ${character.eye_color}</p>
            <p class="flip-card-description">Cor do Cabelo: ${character.hair_color}</p>
            <p class="flip-card-description">Espécie: ${character.specie}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  document.getElementById("charactersList").innerHTML = `
       <h4>Personagens:</h4>
       ${charactersCards}
    `;

  // No futuro, você pode usar o filmId para buscar os detalhes do filme e exibir no modal
  modal.style.display = "block";
}

const listFilms = data.films.map((film) => {
  const templateItem = createFilmItem(film);

  return templateItem;
});

document.querySelector("#list").innerHTML = listFilms.join("");

function updateFilmList(films) {
  filmList.innerHTML = ""; // Limpar o conteúdo atual

  films.forEach((film) => {
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

function updatedFilmListBasedOnOrder(sortedFilms) {
  filmList.innerHTML = "";

  sortedFilms.forEach((film) => {
    const filmItem = createFilmItem(film);
    filmList.innerHTML += filmItem;
  });
}

function handleOrderSelectionChange() {
  const filmOrderChange = handleOrderChange(orderSelect.value, data);
  updatedFilmListBasedOnOrder(filmOrderChange);
}

orderSelect.addEventListener("change", handleOrderSelectionChange);

function updatedFilmListBaseOnDate(films) {
  filmList.innerHTML = "";

  films.forEach((film) => {
    const filmItem = createFilmItem(film);
    filmList.innerHTML += filmItem;
  });
}
function makeReleaseDateOptions() {
  const releaseDatesList = data.films.map((film) => film.release_date);
  // Remove os valores repetidos de um array
  const uniqueReleaseDates = [...new Set(releaseDatesList)];

  const options = uniqueReleaseDates.map(
    (date) => ` <option value="${date}">${date}</option>`
  );

  // Concatena o valor anterior do select com os novos options
  dateSelect.innerHTML += options.join("");
}

makeReleaseDateOptions();

function handleDateSelectionChange() {
  const filteredFilmsByDate = filterByReleaseDate(dateSelect.value, data);
  updatedFilmListBaseOnDate(filteredFilmsByDate);
}
dateSelect.addEventListener("change", handleDateSelectionChange);

// Quando o "X" é clicado, o modal é fechado
span.onclick = function () {
  modal.style.display = "none";
};

// Se o usuário clicar fora do conteúdo do modal, ele também será fechado
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function makeDirectorOptions() {
  const directorsList = data.films.map((film) => film.director);
  // New set remove os valores repetidos de um array
  const directorsWithoutRepeatedValues = [...new Set(directorsList)];

  const options = directorsWithoutRepeatedValues.map(
    (director) => ` <option value="${director}">${director}</option>`
  );

  // Concatena o valor anterior do select com os novos opitions
  directorSelect.innerHTML += options.join("");
}

makeDirectorOptions();

function updatedFilmListBaseOnSearch(films) {
  filmList.innerHTML = "";

  films.forEach((film) => {
    const filmItem = createFilmItem(film);
    filmList.innerHTML += filmItem;
  });
}

function handleSearchLocation(event) {
  event.preventDefault();
  const filteredFilmsBySearch = filterBySearch(searchText.value, data);
  updatedFilmListBaseOnSearch(filteredFilmsBySearch);
}

searchLocation.addEventListener("click", handleSearchLocation);

searchLocation.addEventListener("click", function (e) {
  e.preventDefault(); // Isso evitará que a página seja recarregada ao clicar na lupa

  const searchTerm = searchText.value;
  const filteredFilms = filterBySearch(searchTerm, data);

  if (filteredFilms.length === 0) {
    filmList.innerHTML = "<p>Nenhum filme encontrado com esse nome.</p>";
  } else {
    updateFilmList(filteredFilms);
  }
});
