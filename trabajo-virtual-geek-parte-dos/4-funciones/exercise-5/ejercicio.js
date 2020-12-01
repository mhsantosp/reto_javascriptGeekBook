var precio = 10;
var iva = 2.1;
var calculo = (precio, iva) => {
  var acum = (precio * iva) / 10 + precio;
  return "precio sin iva= " + precio + " ,  iva= " + iva + " ,  total= " + acum;
};

document.writeln(calculo(precio, iva));
