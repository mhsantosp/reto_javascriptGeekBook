var arr = [];
function agregar(arr) {
  arr.push(
    document.querySelector("#obra1").value +
      "," +
      document.querySelector("#obra2").value
  );
  for (const movie of arr) {
    var aux = movie.split(",");
    console.log("¡A mí también me encantó " + aux[0]);
    console.log("¡A mí también me encantó " + aux[1]);
  }
}
