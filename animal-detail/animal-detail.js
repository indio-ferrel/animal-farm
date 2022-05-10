import { findById } from '/utils.js';
import { animals } from '/data.js';

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('id'));

const animal = findById(searchParams.get('id'), animals);
console.log(animal);

const animalName = document.getElementById('animal-name');
animalName.textContent = animal.name;

const animalImage = document.getElementById('animal-image');
animalImage.src = `/assets/${animal.type}.svg`;
