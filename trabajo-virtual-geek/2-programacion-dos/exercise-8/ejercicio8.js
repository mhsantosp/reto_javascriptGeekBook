const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

document.querySelector('ul').innerHTML = 
  `<li>${firstDogName}
    <img src="${firstDogImage}" alt="${firstDogName}">
  </li>
  <li>${secondDogName}
    <img src="${secondDogImage}" alt="${secondDogName}">
  </li>
  <li>${thirdDogName}
    <img src="${thirdDogImage}" alt="${thirdDogName}">
  </li>`;