let fondo = document.querySelector(".body");

function bg(event) {
  let x = event.keyCode;
  //console.log(x);

  if (x === 114) {
    fondo.classList.remove("bgMorado");
    fondo.classList.add("bgRojo");
  }
  if (x === 109) {
    fondo.classList.remove("bgRojo");
    fondo.classList.add("bgMorado");
  }
}

fondo.addEventListener("keypress", bg);
