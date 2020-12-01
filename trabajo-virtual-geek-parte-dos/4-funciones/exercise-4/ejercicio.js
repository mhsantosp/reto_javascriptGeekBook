var tipoBorderbox = true;
var ancho = 500;
var padding = 20;
var borde = 5;
function calcularancho(tipo, ancho, padding, borde) {
  var acum = 0;
  if (tipoBorderbox === true) {
    acum = ancho + padding + borde;
  } else {
    acum = ancho;
  }
  return acum;
}
document.writeln(
  "el ancho es  " + calcularancho(tipoBorderbox, ancho, padding, borde)
);
