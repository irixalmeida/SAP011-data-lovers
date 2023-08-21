// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export function filterByDirector(selectByDirector, data) {
  if (!selectByDirector) return data.films;

  const filteredFilmsByDirector = data.films.filter((film) => {
    return film.director === selectByDirector;
  });

  return filteredFilmsByDirector;
}

export function handleOrderChange(orderSelect, data) {
  const sortedFilms = data.films.slice(); // Copia o array original para não modificá-lo diretamente

  if (orderSelect === "A-Z") {
    sortedFilms.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  } else if (orderSelect === "Z-A") {
    sortedFilms.sort(function (a, b) {
      return b.title.localeCompare(a.title);
    });
  }
  return sortedFilms;
}

export function filterByReleaseDate(selectByDate, data) {
  const filteredFilmsByReleaseDate = data.films.filter((film) => {
    return film.release_date === selectByDate;
  });
  return filteredFilmsByReleaseDate;
}

// Função que calcula a porcentagem de personagens de um filme específico
function getTotalCharacters(data) {
  return data.films.reduce((acc, film) => acc + film.people.length, 0);
}

function getCharactersForFilm(filmId, data) {
  const film = data.films.find((f) => f.id === filmId);
  return film ? film.people.length : 0;
}

export function computeStats(filmId, data) {
  const totalCharacters = getTotalCharacters(data);
  const charactersForFilm = getCharactersForFilm(filmId, data);
  const percentage = (charactersForFilm / totalCharacters) * 100;
  return percentage.toFixed(2);
}

export function filterBySearch(searchText, data){
  const filteredFilmsBySearch = data.films.filter((film) => {
    return film.title.toLowerCase() === searchText.toLowerCase();
  });
    return filteredFilmsBySearch;
}


