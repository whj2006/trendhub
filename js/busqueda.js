const params = new URLSearchParams(window.location.search);
const query = params.get("buscar") ? params.get("buscar").toLowerCase() : "";

const contenedor = document.getElementById("contenedor-resultados");
const titulo = document.getElementById("titulo-busqueda");

function gestionarResultados() {
    if (!contenedor || !query) {
        if (titulo) titulo.innerText = "No se ha realizado ninguna búsqueda.";
        return;
    }

    titulo.innerText = `Resultados para: "${query}"`;

    // Filtramos en tu lista de 'datos'
    const filtrados = datos.filter(item => 
        item.nombre.toLowerCase().includes(query)
    ).sort((a, b) => {
        const nA = a.nombre.toLowerCase();
        const nB = b.nombre.toLowerCase();
        // El más parecido (empieza por...) va primero
        if (nA.startsWith(query) && !nB.startsWith(query)) return -1;
        if (!nA.startsWith(query) && nB.startsWith(query)) return 1;
        return nA.localeCompare(nB);
    });

    if (filtrados.length === 0) {
        contenedor.innerHTML = `<p>No se encontraron resultados para "${query}"</p>`;
        return;
    }

    // Pintamos las tarjetas
    let html = "";
    filtrados.forEach(item => {
        html += `
            <figure class="card" data-id="${item.id}">
                <img src="${item.foto}" alt="${item.nombre}">
                <figcaption>
                    <strong>${item.nombre}</strong><br>
                    ${item.genero} | ${item.ano}
                </figcaption>
            </figure>`;
    });
    contenedor.innerHTML = html;

    // Eventos para ir al detalle
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            window.location.href = `detalle.html?id=${card.dataset.id}`;
        });
    });
}

gestionarResultados();