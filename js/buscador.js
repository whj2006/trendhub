// Seleccionamos el botón y el input (están en el header de todas las páginas)
const btnHeader = document.querySelector(".buscador .texto");
const inputHeader = document.getElementById("textoBuscar");

function realizarBusqueda() {
    const valor = inputHeader.value.trim();
    if (valor !== "") {
        // Nos lleva a la página de resultados pasando el texto por la URL
        window.location.href = `buscador.html?buscar=${encodeURIComponent(valor)}`;
    }
}

if (btnHeader) {
    btnHeader.addEventListener("click", realizarBusqueda);
}

if (inputHeader) {
    inputHeader.addEventListener("keyup", (e) => {
        if (e.key === "Enter") realizarBusqueda();
    });
}