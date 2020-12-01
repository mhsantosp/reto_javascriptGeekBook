//Mi primer click, ¡ole yo y la mujer que me parió!

const text = document.querySelector('p');
const button = document.querySelector('button');
let msn = "Mi primer click, ¡ole yo y la mujer que me parió!";

// handler
const mensaje = () => console.log('Mi primer click, ¡ole yo y la mujer que me parió!');

// listener
//button.addEventListener('click', mensaje);

button.addEventListener('click', () => console.log(text.innerHTML=msn));