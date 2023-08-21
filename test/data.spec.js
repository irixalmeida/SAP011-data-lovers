import {
  filterByDirector,
  handleOrderChange,
  filterByReleaseDate,
  getCharactersForFilm,
  getTotalCharacters,
  computeStats,
} from "../src/data.js";

import { data } from "./data.mock.js";

describe("Data functions", () => {
  // Testes para filterByDirector
  it("filters films by director", () => {
    const dummyData = {
      films: [
        { director: "Director A" },
        { director: "Director A" },
        { director: "Director B" },
      ],
    };

    expect(filterByDirector("Director A", dummyData)).toEqual([
      { director: "Director A" },
      { director: "Director A" },
    ]);
  });

  it("returns all films if selectByDirector is falsy", () => {
    expect(filterByDirector(null, data)).toEqual(data.films);
  });

  // Testes para handleOrderChange
  it("orders films A-Z by title", () => {
    const dummyData = {
      films: [{ title: "Title C" }, { title: "Title A" }, { title: "Title B" }],
    };

    expect(handleOrderChange("A-Z", dummyData)).toEqual([
      { title: "Title A" },
      { title: "Title B" },
      { title: "Title C" },
    ]);
  });

  it("orders films Z-A by title", () => {
    const dummyData = {
      films: [{ title: "Title C" }, { title: "Title A" }, { title: "Title B" }],
    };

    expect(handleOrderChange("Z-A", dummyData)).toEqual([
      { title: "Title C" },
      { title: "Title B" },
      { title: "Title A" },
    ]);
  });

  it("returns original film list if orderSelect is not A-Z or Z-A", () => {
    const dummyData = {
      films: [{ title: "Title C" }, { title: "Title A" }, { title: "Title B" }],
    };

    expect(handleOrderChange("Random", dummyData)).toEqual(dummyData.films);
  });

  // Testes para filterByReleaseDate
  it("filters films by release date", () => {
    const dummyData = {
      films: [
        { release_date: "2020" },
        { release_date: "2021" },
        { release_date: "2020" },
      ],
    };

    expect(filterByReleaseDate("2020", dummyData)).toEqual([
      { release_date: "2020" },
      { release_date: "2020" },
    ]);
  });

  // Testes para computeStats
  it("computes character percentage for film", () => {
    expect(computeStats("1", data)).toBe("33.33");
  });

  it("get total characters, must return 6", () => {
    expect(getTotalCharacters(data)).toBe(6);
  });

  it("get total characters, don't must return 1", () => {
    expect(getTotalCharacters(data)).not.toBe(1);
  });

  it("get characters for film 1, must return 2", () => {
    expect(getCharactersForFilm("1", data)).toBe(2);
  });

  it("returns 0 for characters of a non-existent film", () => {
    expect(getCharactersForFilm("100", data)).toBe(0);
  });
});
