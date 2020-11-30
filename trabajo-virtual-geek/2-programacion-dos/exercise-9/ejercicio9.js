let companera = "Satsuma Okasaki";
let text = document.querySelector('p');

text.innerHTML = `El nombre de mi compañera es ${companera}, y está compuesto por ` + companera.length + ` caracteres.`;

console.log(text);