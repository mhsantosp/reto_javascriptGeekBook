const activableSection = document.querySelector('.tittle');
const activableSection2 = document.querySelector('.parrafo');

if (activableSection.classList.contains('tittle')) {
  // Elimina la clase
  activableSection.classList.remove('tittle');
  activableSection2.classList.remove('parrafo');
  activableSection.classList.add('warning');
  activableSection2.classList.add('warning');
}

if (activableSection.classList.contains("warning")) {
  activableSection.innerHTML = "AVISO";
  activableSection2.innerHTML = "Tenga cuidado";
}
if (activableSection.classList.contains("error")) {
  activableSection.innerHTML = "ERROR";
  activableSection2.innerHTML = "Ha surgido un error";
}
if (activableSection.classList.contains("success")) {
  activableSection.innerHTML = "CORRECTO";
  activableSection2.innerHTML = "Los datos son correctos";
}
