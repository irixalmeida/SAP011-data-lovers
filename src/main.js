import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/ghibli/ghibli.js";
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

console.log(data.films[0].title);
console.log(data.films[0].description);
document.querySelector("#title").textContent = data.films[0].title;

document.querySelector("#description").textContent = data.films[0].description;

document.querySelector("#poster").setAttribute("src", data.films[0].poster);
