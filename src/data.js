// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export function filterByDirector(selectByDirector, data) {

  const filteredFilmsByDirector = data.films.filter(film => {
    return film.director === selectByDirector;
  });

  return filteredFilmsByDirector;
}

// Função que retorna um novo array de filmes filtrados com base no diretor selecionado
function getFilteredFilms() {
  const selectByDirector = directorSelect.value;

  if (selectByDirector) {
    return data.films.filter(film => film.director === selectByDirector);
  } else {
    return data.films;
  }
}

export function handleOrderChange(orderSelect, data){

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
