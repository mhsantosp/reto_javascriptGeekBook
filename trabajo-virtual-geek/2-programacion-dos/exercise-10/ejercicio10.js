let edadActual = document.querySelector(".edad").innerHTML;
const edadConvertida = parseInt(edadActual);

let horaDia = 24;
let diasAño = 365;

let horasVividas;

horasVividas = horaDia * diasAño * edadConvertida;
console.log("Yo he vivido " + horasVividas + " horas.");

document.querySelector('p').innerHTML = `Mi edad actual es ${edadConvertida} y he vivido durante ${horasVividas} horas.`;