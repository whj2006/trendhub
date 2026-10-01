# TrendHub

[中文](README.md) | [Español](README.es.md) | [English](README.en.md)

[![Descargar](https://img.shields.io/badge/Descargar-ZIP-brightgreen?style=for-the-badge&logo=github)](https://github.com/whj2006/trendhub/archive/refs/heads/main.zip)

TrendHub es un sitio web estático de recomendaciones de música, juegos, series, anime y películas.

## Características

- Página de inicio con recomendaciones por categorías
- Navegación por categoría: Música / Juegos / Series / Anime / Películas
- Buscador para filtrar por nombre, autor y género
- Página de detalle con información completa de cada elemento
- Página de sugerencias para enviar recomendaciones
- Cambio de idioma entre Español e Inglés con un clic

## Tecnologías

- HTML5 / CSS3 / JavaScript puro
- Sin frameworks ni herramientas de construcción
- Datos almacenados en `js/datos.js`
- Internacionalización: `js/i18n.js`

## Estructura del proyecto

```
web/
├── html/           # Páginas
│   ├── principal.html      # Inicio
│   ├── musica.html         # Música
│   ├── juego.html          # Juegos
│   ├── videos.html         # Series/Anime/Películas
│   ├── detalle.html        # Detalle
│   ├── buscador.html       # Resultados de búsqueda
│   └── surgerencias.html   # Sugerencias
├── css/            # Estilos
├── js/             # Scripts y datos
│   ├── i18n.js             # Módulo de idiomas
│   ├── datos.js            # Datos de recomendaciones
│   ├── principal.js        # Lógica del inicio
│   ├── buscador.js         # Lógica de búsqueda
│   └── ...
└── img/            # Imágenes
    ├── musica/
    ├── juegos/
    ├── series/
    ├── anime/
    └── pelis/
```

## Ejecución local

Abre directamente `html/principal.html` en el navegador, o inicia un servidor local:

```bash
cd web
python -m http.server 8000
# Visita http://localhost:8000/html/principal.html
```

## Autor

**Hejun Wang** © 2026
