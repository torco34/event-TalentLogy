// ejercicio 1

const boton = document.getElementById("buton");
const mensaje = document.getElementById("mensaje");
let contador = true;
boton.addEventListener("click", () => {
  if (contador) {
    mensaje.textContent = "¡Haz hecho clic en el botón!";
    contador = false;
  } else {
    mensaje.textContent = "¡De nuevo haz vuelto hacer click en el botón";
    contador = true;
  }
});
//
// Ejercicio 2
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("text").value;
  alert(`El nombre ingresado es: ${name}`);
  form.reset();
});
// ejercicio  3
const color = document.getElementById("color");
const element = document.getElementById("element");
console.log(element);
let estado = true;
color.addEventListener("click", function () {
  if (estado) {
    element.style.backgroundColor = "#917FB3";
    element.style.color = "#ffff";
    estado = false;
  } else {
    element.style.backgroundColor = "#2A2F4F";
    estado = true;
  }
});
// ejercicio 4
const boton3 = document.getElementById("boton3");
const bloque = document.getElementById("bloque");
boton3.addEventListener("click", function () {
  bloque.classList.toggle("bloque");
});

// ejercicio 5
const btn5 = document.getElementById("btn-5");
const lista = document.getElementById("agreLista");
btn5.addEventListener("click", function () {
  const nuevoElementoLi = document.createElement("li");
  nuevoElementoLi.textContent = "Nuevo elemento de lista";
  lista.appendChild(nuevoElementoLi);
});
// ejercicio 6
const items = document.querySelectorAll('[id^="item"]');
items.forEach(function (item) {
  item.addEventListener("click", function () {
    items.forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
    // this.classList.add('activo');
  });
});
// ejercicio 7
// Obtén el elemento con ID "menu"
const menu = document.getElementById("menu");

1;
// Agrega un controlador de eventos de desplazamiento a la ventana
window.addEventListener("scroll", () => {
  if (window.scrollY > 1200) {
    menu.style.backgroundColor = "#3A4F7A";
    menu.style.color = "#fff";
  } else {
    menu.style.backgroundColor = "";
  }
});
// ejercicio 8
const img = document.getElementById("img");
let estados = true;
img.addEventListener("mouseover", function () {
  const descripcion = document.getElementById("descripcion");
  if (estados) {
    descripcion.textContent = "Texto descriptivo de la imagen.";
    estados = false;
  } else {
    descripcion.textContent = "";
    estados = true;
  }
});

// ejercicio 9
const btn9 = document.getElementById("btn9");

btn9.addEventListener("click", function () {
  const element = document.getElementById("element");
  // console.log(`no se qie`);
  // console.log(` ${element}`);
  const confirmar = confirm(
    `¿Estás seguro de que deseas eliminar el elemento?`
  );
  if (confirmar) {
    element.style.display = "none";
    element.remove();
    console.log(`estoy dentro del di`);
  }
});
// ejercicio 10

const select = document.getElementById("select");
const valor = document.getElementById("valor");
select.addEventListener("change", (e) => {
  valor.textContent = e.target.value;
});

// ejercicio 11

const image = document.getElementById("image");
const texto = document.getElementById("texto");

image.addEventListener("dragstart", function (event) {
  texto.innerHTML = "Arrastrando la imagen";
});

image.addEventListener("dragend", function (event) {
  // Cambiar el texto del mensaje después de soltar la imagen
  texto.innerHTML = "La imagen se soltó.";
});
