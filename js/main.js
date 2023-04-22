const boton = document.getElementById("buton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Haz hecho clic en el botón!";
});
