
let filtroGenero = "todos";
let filtroAno = "todos";

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

        if (btn.dataset.genero !== undefined) {
            filtroGenero = btn.dataset.genero;
        }

        if (btn.dataset.ano !== undefined) {
            filtroAno = btn.dataset.ano;
        }

        aplicar();
    });
});

function aplicar() {
    const resultado = datos.filter(item => {
        
        let okGenero;
        if (filtroGenero === "todos") {
            okGenero = true;
        } else {
            okGenero = (item.genero === filtroGenero);
        }

        let okAno = false;

        if (filtroAno === "todos") {
            okAno = true;
        } 
        else if (filtroAno === "2020") {
            okAno = (item.ano >= 2020);
        } 
        else if (filtroAno === "2010") {
            okAno = (item.ano >= 2010 && item.ano < 2020);
        } 
        else if (filtroAno === "antes") {
            okAno = (item.ano < 2000);
        }

        return item.tipo === "juego" && okGenero && okAno;
    });

    pintar(resultado);
}


pintar(datos.filter(x => x.tipo === "juego"));