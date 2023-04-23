const boton = document.getElementById("buton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Haz hecho clic en el botón!";
});
//

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("text").value;
  alert(`El nombre ingresado es: ${name}`);
});

const color = document.getElementById("color");
const element = document.getElementById("element");
console.log(element);
let estado = true;
color.addEventListener("click", function () {
  // element.style.backgroundColor = "";
  if (estado) {
    element.style.backgroundColor = "red";
    estado = false;
  } else {
    element.style.backgroundColor = "blue";
    estado = true;
  }
});
// ejercicio 