const input = document.querySelector("input");
const boton = document.querySelector("button");

function impNombre() {
  const nombre = input.value;

  console.log(`Hola ${nombre}`);
}

boton.addEventListener("click", impNombre);
