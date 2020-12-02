var array = [];
function escalera(numero) {
  var linea = "";
  var acum;
  // bucle que define cada uno de los elementos del array
  for (let i = 1; i <= numero; i++) {
    linea = " ".repeat(numero - i);
    if (i === 1) {
      array.push(linea + "★");
      acum = linea;
    }
    linea += "▲".repeat(i);

    // añadimos la linea al array
    array.push(linea);
  }
  array.push(acum + "|");

  return array;
}
function escalera2(numero) {
  var linea = "";
  // bucle que define cada uno de los elementos del array
  for (let i = 1; i <= numero; i++) {
    linea = "▲".repeat(i);
    linea += " ".repeat(numero - i);
    // añadimos la linea al array
    array[i] += linea;
  }

  return array;
}
escalera(5);
escalera2(5);
console.log(array);
