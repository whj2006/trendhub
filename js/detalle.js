// sacar id de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// buscar el objeto en el array
const item = datos.find(x => x.id === id);

// pintar datos en el HTML
function pintarDetalle() {
    if (item) {
        document.getElementById("nombre").textContent = item.nombre;
        document.getElementById("tipo").textContent = t("type." + item.tipo);
        document.getElementById("genero").textContent = t("genre." + item.genero);
        document.getElementById("ano").textContent = item.ano;
        document.getElementById("autor").textContent = item.autor;
        document.getElementById("desc").textContent = item.desc;
        document.getElementById("foto").src = item.foto;
    }
}

pintarDetalle();
