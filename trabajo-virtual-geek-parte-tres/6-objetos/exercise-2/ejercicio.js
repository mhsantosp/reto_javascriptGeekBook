let text1 = document.querySelector("#chica1");
let text2 = document.querySelector("#chica2");

const geekGirl1 = {};
  geekGirl1.nombre = "Susana";
  geekGirl1.edad = 34;
  geekGirl1.profesion = "Periodista";

  geekGirl1.run = (run) => `${run}`;
  console.log(geekGirl1.run('Estoy corriendo'));

  let distance = 50;
  geekGirl1.runAMarathon = (distance) => `${distance}`;
  console.log(geekGirl1.runAMarathon(`Estoy corriendo una distancia de ${distance} kilómetros`));


let chicaGeek1 = `Mi nombre es ${geekGirl1.nombre}, tengo ${geekGirl1.edad} años y soy ${geekGirl1.profesion}`;
text1.innerHTML = chicaGeek1;

const geekGirl2 = {
  nombre: "Rocio",
  edad: 25,
  profesion: "Actriz",
};

let chicaGeek2 = `Mi nombre es ${geekGirl2.nombre}, tengo ${geekGirl2.edad} años y soy ${geekGirl2.profesion}`;
text2.innerHTML = chicaGeek2;
