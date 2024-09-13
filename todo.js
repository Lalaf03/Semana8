//Ternario
/*
let edad = 12;
let mensaje = edad > 10 ? "Eres un puberto" : "Eres un niño todavía";
document.write(mensaje);
*/

//interval
/*
const saludo = () => {
  document.write("<li>hola UAO</li>");
};

setInterval(saludo, 3000);
*/

//timeout
/*
const evaluar = () => {
  const edad = prompt("Cuál es tu edad?");
  if (edad >= 18) {
    alert("mayor de edad!");
  } else {
    alert("menor de edad!");
  }
};
setTimeout(evaluar, 5000);
*/

//Template-string
/*
const nombre = "Laura";
const email = "laura.fernandez_gom@uao.edu.co";
const mensaje2 = `hola ${nombre}, tu correo es ${email}`;
document.write(mensaje2);
*/

//promesa
/*
const sumar = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 < 0 || num2 < 0) {
      reject("Esto no es válido");
    } else {
      resolve(num1 + num2);
    }
  });
};

const result = sumar(45, 54)
  .then((res) => {
    document.write(res);
  })
  .catch((error) => {
    document.write(error);
  });
  */

//Fetch
/*
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
  */
