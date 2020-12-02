let text1 = document.querySelector("#chica1");
let text2 = document.querySelector("#chica2");

const geekGirl1 = {
  nombre: "Susana",
  edad: 34,
  profesion: "Periodista",
};
let chicaGeek1 = `Mi nombre es ${geekGirl1.nombre}, tengo ${geekGirl1.edad} años y soy ${geekGirl1.profesion}`;
text1.innerHTML = chicaGeek1;

console.log(
  `Mi nombre es ${geekGirl1.nombre}, tengo ${geekGirl1.edad} años y soy ${geekGirl1.profesion}`
);

const geekGirl2 = {
  nombre: "Rocio",
  edad: 25,
  profesion: "Actriz",
};
let chicaGeek2 = `Mi nombre es ${geekGirl2.nombre}, tengo ${geekGirl2.edad} años y soy ${geekGirl2.profesion}`;
text2.innerHTML = chicaGeek2;

console.log(
  `Mi nombre es ${geekGirl2.nombre}, tengo ${geekGirl2.edad} años y soy ${geekGirl2.profesion}`
);
