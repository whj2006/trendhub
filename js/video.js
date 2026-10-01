let filtroTipo = "todos";
let filtroGenero = "todos";
let filtroAno = "todos";

const tiposPermitidos = ["pelicula", "serie", "anime"];


function pintar(lista) {
    const contenedor = document.getElementById("contenedor");
    
    contenedor.innerHTML = ""; 

    let html = ""; 

    lista.forEach(item => {
        html += `
            <figure class="card" data-id="${item.id}">
                <img src="${item.foto}" alt="${item.nombre}">
                <figcaption>
                    <strong>${item.nombre}</strong><br>
                    ${t("genre." + item.genero)}
                </figcaption>
            </figure>
        `;
    });

    contenedor.innerHTML = html;

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            window.location.href = `detalle.html?id=${card.dataset.id}`;
        });
    });
}


document.querySelectorAll(".tag").forEach(btn => {

    btn.addEventListener("click", () => {

        if (btn.dataset.tipo !== undefined) {
            filtroTipo = btn.dataset.tipo;
        }

        if (btn.dataset.genero !== undefined) {
            filtroGenero = btn.dataset.genero;
        }

        if (btn.dataset.ano !== undefined) {
            filtroAno = btn.dataset.ano;
        }

        aplicarFiltros();
    });
});


function aplicarFiltros() {
    const resultado = datos.filter(item => {

        let okTipo;

        if (filtroTipo === "todos") {
            okTipo = tiposPermitidos.includes(item.tipo);
        } else {
            okTipo = (item.tipo === filtroTipo);
        }

        
        let okGenero;

        if (filtroGenero === "todos") {
            okGenero = true;
        } else {
            okGenero = (item.genero === filtroGenero);
        }

       
        let okAno;

        if (filtroAno === "todos") {
            okAno = true;
        } else if (filtroAno === "2020") {
            okAno = (item.ano >= 2020);
        } else if (filtroAno === "2010") {
            okAno = (item.ano >= 2010 && item.ano < 2020);
        } else if (filtroAno === "2000") {
            okAno = (item.ano >= 2000 && item.ano < 2010);
        } else if (filtroAno === "antes") {
            okAno = (item.ano < 2000);
        }
        return okTipo && okGenero && okAno;
    });

    pintar(resultado);
}

pintar(datos.filter(item => 
    item.tipo === "pelicula" ||
    item.tipo === "serie" ||
    item.tipo === "anime"
));