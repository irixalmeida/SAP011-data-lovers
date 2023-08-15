// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export function filterByDirector(selectByDirector, data) {

  const filteredFilmsByDirector = data.films.filter(film => {
    return film.director === selectByDirector;
  });

  return filteredFilmsByDirector;
}

// Função para retornar um novo array filtrado
function getFilteredFilms() {
  const selectByDirector = directorSelect.value;

  if (selectByDirector) {
    return data.films.filter(film => film.director === selectByDirector);
  } else {
    return data.films;
  }
}


