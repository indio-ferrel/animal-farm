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

function renderAnimalDetails(animal) {
    const div = document.createElement('div');
    const head = document.createElement('h1');
    const text = document.createElement('p');
    const img = document.createElement('img');
    img.src = `/assets/${animal.type}.svg`;
    head.textContent = animal.name;
    text.textContent = animal.says;
    div.append(head, text, img);
    return div;
}

const animalDiv = renderAnimalDetails(animal);
MediaDeviceInfo.append(animal);