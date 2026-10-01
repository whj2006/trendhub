# TrendHub

[中文](README.md) | [Español](README.es.md) | [English](README.en.md)

TrendHub is a static recommendation website featuring curated picks for music, games, TV shows, anime, and movies.

## Features

- Homepage with recommendations across categories
- Browse by category: Music / Games / TV Shows / Anime / Movies
- Search to filter by name, artist, and genre
- Detail page with full info for each item
- Suggestions page for submitting your own recommendations
- One-click language toggle between Spanish and English

## Tech Stack

- Plain HTML5 / CSS3 / Vanilla JavaScript
- No frameworks, no build tools
- Data stored in `js/datos.js`
- i18n support: `js/i18n.js`

## Project Structure

```
web/
├── html/           # Pages
│   ├── principal.html      # Home
│   ├── musica.html         # Music
│   ├── juego.html          # Games
│   ├── videos.html         # TV Shows/Anime/Movies
│   ├── detalle.html        # Detail
│   ├── buscador.html       # Search results
│   └── surgerencias.html   # Suggestions
├── css/            # Styles
├── js/             # Scripts & data
│   ├── i18n.js             # i18n module
│   ├── datos.js            # Recommendation data
│   ├── principal.js        # Home logic
│   ├── buscador.js         # Search logic
│   └── ...
└── img/            # Images
    ├── musica/
    ├── juegos/
    ├── series/
    ├── anime/
    └── pelis/
```

## Local Development

Open `html/principal.html` directly in your browser, or start a local server:

```bash
cd web
python -m http.server 8000
# Visit http://localhost:8000/html/principal.html
```

## Author

**Hejun Wang** © 2026
