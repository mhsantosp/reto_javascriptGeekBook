let precioKiwis = 5, compraKiwi =2;
let precioPeras = 2, compraPera = 3;
let precioUvas = 4, compraUva = 0.5;

let precios, compras , compra1, compra2, compra3 ,totalCompra;

precios = " Precio del Kiwi 5€/kg \n Precio de las Peras 2€/kg \n Precio de las Uvas 4€/kg";
console.log(precios);

compra1 = compraKiwi * precioKiwis;
compra2 = compraPera * precioPeras;
compra3 = compraUva * precioUvas;

compras = " Se compro 2 Kilos de Kiwis por " + compra1 + " euros \n Se compro 3 kilos de Peras por " + compra2 + " euros \n y se compro 1/2 Kilo de Uvas por " + compra3 + " euros";

console.log(compras);

totalCompra = compra1 + compra2 + compra3;
console.log("El total gastado en la compra fue de " + totalCompra + " euros.");