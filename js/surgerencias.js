function menuPrincipal(opcion) {
    // Ocultamos todas las secciones grandes primero
    document.getElementById("tipoError").style.display = "none";
    document.getElementById("detalleError").style.display = "none";
    document.getElementById("tipoSugerencias").style.display = "none";
    document.getElementById("detalleSugerencias").style.display = "none";

    if (opcion === 'error') {
        document.getElementById("tipoError").style.display = "block";
        document.getElementById("detalleError").style.display = "block";
    } else if (opcion === 'sugerencia') {
        document.getElementById("tipoSugerencias").style.display = "block";
        document.getElementById("detalleSugerencias").style.display = "block";
    }
}

function mostrarGenero(idGenero) {
    // Ocultar las filas de géneros dentro de la tabla
    document.getElementById("generoVideo").style.display = "none";
    document.getElementById("generoMusica").style.display = "none";
    document.getElementById("generoJuego").style.display = "none";

    // Mostrar el género correspondiente
    document.getElementById(idGenero).style.display = "table-row";
}

function resetGeneros() {
    //resetear todo
    document.getElementById("tipoError").style.display = "none";
    document.getElementById("detalleError").style.display = "none";
    document.getElementById("tipoSugerencias").style.display = "none";
    document.getElementById("detalleSugerencias").style.display = "none";
    document.getElementById("generoVideo").style.display = "none";
    document.getElementById("generoMusica").style.display = "none";
    document.getElementById("generoJuego").style.display = "none";
}
