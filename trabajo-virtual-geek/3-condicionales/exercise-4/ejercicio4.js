let edadPerro = 12; //edad del perro

let primerAno = 15; //Primer año del perro equivalen a 15 años humanos
let segundoAno = primerAno + 9; //El segundo año del perro gana solo 9 años humanos mas

//A partir del tercer año del perro gana solo 5 años humanos más.
let masCumples = 5;
let resultado;

if (edadPerro === 1) {
  console.log(`Tu perro tiene ${primerAno} años humanos`);
} else if (edadPerro === 2) {
  console.log(`Tu perro tiene nueve años más, es decir tiene ${segundoAno} años humanos`);
} else if (edadPerro >= 3) {
  resultado = (edadPerro - 2) * masCumples;
  resultado = resultado + segundoAno;
  console.log(`Tu perro tiene ${resultado} años humanos`);
}

document.querySelector('p').innerHTML = `Tu perro tiene ${resultado} años humanos`;