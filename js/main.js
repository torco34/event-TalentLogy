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
const boton3 = document.getElementById("boton3");
const bloque = document.getElementById("bloque");
boton3.addEventListener("click", function () {
  bloque.classList.toggle("bloque");
});

// ejercico 5
const btn5 = document.getElementById("btn-5");
const lista = document.getElementById("agreLista");

btn5.addEventListener("click", function () {
  const nuevoElementoLi = document.createElement("li");
  nuevoElementoLi.textContent = "Nuevo elemento de lista";
  lista.appendChild(nuevoElementoLi);
});
// ejercicio 6
const items = document.querySelectorAll('[id^="item"]');
console.log(items);
items.forEach(function (item) {
  item.addEventListener("click", function() {
    items.forEach(function(item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
    // this.classList.add('activo');
  });
});
