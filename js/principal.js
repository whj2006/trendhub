const mezclar = (array) => array.sort(() => Math.random() - 0.5);

function pintarPrincipal() {
    const secciones = [
        { id: "musica", tipo: "musica" },
        { id: "juego",  tipo: "juego" },
        { id: "series", tipo: "serie" },
        { id: "anime",  tipo: "anime" },
        { id: "pelis",  tipo: "pelicula" }
    ];

    secciones.forEach(seccionInfo => {
        const bloque = document.getElementById(seccionInfo.id);
        if (!bloque) return;

        const contenedor = bloque.querySelector(".agruparCard");
        
        let items = datos.filter(item => item.tipo === seccionInfo.tipo);
        items = mezclar(items);
        
        
        const seleccion = items.slice(0, 6);

        let html = "";
        seleccion.forEach(item => {
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
    });

   
    vincularClicks();
}

function vincularClicks() {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            window.location.href = `detalle.html?id=${card.dataset.id}`;
        });
    });
}


pintarPrincipal();