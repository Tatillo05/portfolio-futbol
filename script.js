const botonVerde = document.getElementById("estilo1");
const botonAzul = document.getElementById("estilo2");
const tema = document.getElementById("tema");

botonVerde.addEventListener("click", function() {
    tema.href = "./estilo1.css";
    localStorage.setItem("diseño", "verde");
});

botonAzul.addEventListener("click", function() {
    tema.href = "./estilo2.css";
    localStorage.setItem("diseño", "azul");
});

const diseñoGuardado = localStorage.getItem("diseño");

if (diseñoGuardado === "verde") {
    tema.href = "./estilo1.css";
} else {
    tema.href = "./estilo2.css";
}