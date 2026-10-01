const datos = [
// MUSICA
{ id:"m1", nombre:"Master of Puppets", tipo:"musica", genero:"rock", ano:1986, autor:"Metallica", foto:"../img/musica/m1.jpg", desc:"Thrash metal clásico." },
{ id:"m2", nombre:"Bohemian Rhapsody", tipo:"musica", genero:"rock", ano:1975, autor:"Queen", foto:"../img/musica/m2.jpg", desc:"Rock icónico." },

{ id:"m3", nombre:"Blinding Lights", tipo:"musica", genero:"pop", ano:2020, autor:"The Weeknd", foto:"../img/musica/m3.jpg", desc:"Pop moderno." },
{ id:"m4", nombre:"Bad Guy", tipo:"musica", genero:"pop", ano:2019, autor:"Billie Eilish", foto:"../img/musica/m4.jpg", desc:"Pop innovador." },

{ id:"m5", nombre:"Sicko Mode", tipo:"musica", genero:"hip-pop", ano:2018, autor:"Travis Scott", foto:"../img/musica/m5.jpg", desc:"Hip-hop moderno." },
{ id:"m6", nombre:"Lose Yourself", tipo:"musica", genero:"hip-pop", ano:2002, autor:"Eminem", foto:"../img/musica/m6.jpg", desc:"Rap clásico." },

{ id:"m7", nombre:"Goosebumps", tipo:"musica", genero:"trap", ano:2016, autor:"Travis Scott", foto:"../img/musica/m7.jpg", desc:"Trap popular." },
{ id:"m8", nombre:"Rockstar", tipo:"musica", genero:"trap", ano:2017, autor:"Post Malone", foto:"../img/musica/m8.jpg", desc:"Trap global." },

{ id:"m9", nombre:"Despacito", tipo:"musica", genero:"regueton", ano:2017, autor:"Luis Fonsi", foto:"../img/musica/m9.jpg", desc:"Regueton mundial." },
{ id:"m10", nombre:"Taki Taki", tipo:"musica", genero:"regueton", ano:2018, autor:"DJ Snake", foto:"../img/musica/m10.png", desc:"Regueton popular." },

{ id:"m11", nombre:"No Scrubs", tipo:"musica", genero:"r&b", ano:1999, autor:"TLC", foto:"../img/musica/m11.jpg", desc:"R&B clásico." },
{ id:"m12", nombre:"We Belong Together", tipo:"musica", genero:"r&b", ano:2005, autor:"Mariah Carey", foto:"../img/musica/m12.png", desc:"Balada R&B." },

{ id:"m13", nombre:"The Thrill is Gone", tipo:"musica", genero:"blue", ano:1969, autor:"B.B. King", foto:"../img/musica/m13.jpg", desc:"Blues clásico." },
{ id:"m14", nombre:"Crossroad", tipo:"musica", genero:"blue", ano:1936, autor:"Robert Johnson", foto:"../img/musica/m14.jpg", desc:"Blues histórico." },

{ id:"m15", nombre:"Take Five", tipo:"musica", genero:"jazz", ano:1959, autor:"Dave Brubeck", foto:"../img/musica/m15.jpg", desc:"Jazz instrumental." },
{ id:"m16", nombre:"So What", tipo:"musica", genero:"jazz", ano:1959, autor:"Miles Davis", foto:"../img/musica/m16.jpg", desc:"Jazz icónico." },

{ id:"m17", nombre:"Moonlight Sonata", tipo:"musica", genero:"clasico", ano:1801, autor:"Beethoven", foto:"../img/musica/m17.jpg", desc:"Clásica famosa." },
{ id:"m18", nombre:"Four Seasons", tipo:"musica", genero:"clasico", ano:1725, autor:"Vivaldi", foto:"../img/musica/m18.jpg", desc:"Música clásica." },

// JUEGOS

{ id:"j1", nombre:"Call of Duty", tipo:"juego", genero:"fps", ano:2020, autor:"Activision", foto:"../img/juegos/j1.png", desc:"Shooter rápido." },
{ id:"j2", nombre:"CS:GO", tipo:"juego", genero:"fps", ano:2012, autor:"Valve", foto:"../img/juegos/j2.png", desc:"FPS competitivo." },

{ id:"j3", nombre:"League of Legends", tipo:"juego", genero:"moba", ano:2009, autor:"Riot", foto:"../img/juegos/j3.jpg", desc:"MOBA famoso." },
{ id:"j4", nombre:"Dota 2", tipo:"juego", genero:"moba", ano:2013, autor:"Valve", foto:"../img/juegos/j4.jpg", desc:"MOBA estratégico." },

{ id:"j5", nombre:"Elden Ring", tipo:"juego", genero:"rpg", ano:2022, autor:"FromSoftware", foto:"../img/juegos/j5.jpg", desc:"RPG difícil." },
{ id:"j6", nombre:"Skyrim", tipo:"juego", genero:"rpg", ano:2011, autor:"Bethesda", foto:"../img/juegos/j6.jpg", desc:"RPG clásico." },

{ id:"j7", nombre:"Fortnite", tipo:"juego", genero:"battle royale", ano:2017, autor:"Epic Games", foto:"../img/juegos/j7.jpg", desc:"Battle royale popular." },
{ id:"j8", nombre:"Warzone", tipo:"juego", genero:"battle royale", ano:2020, autor:"Activision", foto:"../img/juegos/j8.jpg", desc:"Battle royale realista." },

{ id:"j9", nombre:"Minecraft", tipo:"juego", genero:"sandbox", ano:2011, autor:"Mojang", foto:"../img/juegos/j9.jpg", desc:"Creatividad total." },
{ id:"j10", nombre:"Terraria", tipo:"juego", genero:"sandbox", ano:2011, autor:"Re-Logic", foto:"../img/juegos/j10.png", desc:"Sandbox 2D." },

{ id:"j11", nombre:"Outlast", tipo:"juego", genero:"horror", ano:2013, autor:"Red Barrels", foto:"../img/juegos/j11.jpg", desc:"Terror intenso." },
{ id:"j12", nombre:"Resident Evil 7", tipo:"juego", genero:"horror", ano:2017, autor:"Capcom", foto:"../img/juegos/j12.jpg", desc:"Horror survival." },

{ id:"j13", nombre:"FIFA 23", tipo:"juego", genero:"deportes", ano:2023, autor:"EA Sports", foto:"../img/juegos/j13.jpg", desc:"Fútbol realista." },
{ id:"j14", nombre:"NBA 2K24", tipo:"juego", genero:"deportes", ano:2024, autor:"2K", foto:"../img/juegos/j14.jpg", desc:"Baloncesto." },


// PELICULAS

{ id:"vp1", nombre:"John Wick", tipo:"pelicula", genero:"accion", ano:2014, autor:"Chad", foto:"../img/pelis/1.jpg", desc:"Acción intensa." },
{ id:"vp2", nombre:"Mad Max", tipo:"pelicula", genero:"accion", ano:2015, autor:"Miller", foto:"../img/pelis/2.jpg", desc:"Acción brutal." },

{ id:"vp3", nombre:"Superbad", tipo:"pelicula", genero:"comedia", ano:2007, autor:"Greg", foto:"../img/pelis/3.jpg", desc:"Comedia juvenil." },
{ id:"vp4", nombre:"The Mask", tipo:"pelicula", genero:"comedia", ano:1994, autor:"Chuck", foto:"../img/pelis/4.jpg", desc:"Comedia clásica." },

{ id:"vp5", nombre:"The Shawshank Redemption", tipo:"pelicula", genero:"drama", ano:1994, autor:"Frank", foto:"../img/pelis/5.jpg", desc:"Drama profundo." },
{ id:"vp6", nombre:"Forrest Gump", tipo:"pelicula", genero:"drama", ano:1994, autor:"Zemeckis", foto:"../img/pelis/6.jpg", desc:"Historia emocional." },

{ id:"vp7", nombre:"The Conjuring", tipo:"pelicula", genero:"terror", ano:2013, autor:"Wan", foto:"../img/pelis/7.jpg", desc:"Terror real." },
{ id:"vp8", nombre:"It", tipo:"pelicula", genero:"terror", ano:2017, autor:"Muschietti", foto:"../img/pelis/8.jpg", desc:"Payaso terror." },

{ id:"vp9", nombre:"Titanic", tipo:"pelicula", genero:"romance", ano:1997, autor:"Cameron", foto:"../img/pelis/9.jpg", desc:"Romance clásico." },
{ id:"vp10", nombre:"La La Land", tipo:"pelicula", genero:"romance", ano:2016, autor:"Damien", foto:"../img/pelis/10.jpg", desc:"Romance moderno." },

{ id:"vp11", nombre:"Harry Potter", tipo:"pelicula", genero:"fantasia", ano:2001, autor:"Columbus", foto:"../img/pelis/11.jpg", desc:"Magia." },
{ id:"vp12", nombre:"Lord of the Rings", tipo:"pelicula", genero:"fantasia", ano:2001, autor:"Jackson", foto:"../img/pelis/12.jpg", desc:"Épica fantasía." },

{ id:"vp13", nombre:"Interstellar", tipo:"pelicula", genero:"ciencia ficcion", ano:2014, autor:"Nolan", foto:"../img/pelis/13.jpg", desc:"Espacio y ciencia." },
{ id:"vp14", nombre:"Inception", tipo:"pelicula", genero:"ciencia ficcion", ano:2010, autor:"Nolan", foto:"../img/pelis/14.jpg", desc:"Sueños complejos." },

{ id:"vp15", nombre:"Seven", tipo:"pelicula", genero:"crimen", ano:1995, autor:"Fincher", foto:"../img/pelis/15.jpg", desc:"Crimen oscuro." },
{ id:"vp16", nombre:"Zodiac", tipo:"pelicula", genero:"crimen", ano:2007, autor:"Fincher", foto:"../img/pelis/16.jpg", desc:"Investigación." },


// SERIES

{ id:"vs1", nombre:"24", tipo:"serie", genero:"accion", ano:2001, autor:"Fox", foto:"../img/series/1.jpg", desc:"Acción continua." },
{ id:"vs2", nombre:"Prison Break", tipo:"serie", genero:"accion", ano:2005, autor:"Fox", foto:"../img/series/2.jpg", desc:"Escape." },

{ id:"vs3", nombre:"Friends", tipo:"serie", genero:"comedia", ano:1994, autor:"NBC", foto:"../img/series/3.jpg", desc:"Comedia famosa." },
{ id:"vs4", nombre:"The Office", tipo:"serie", genero:"comedia", ano:2005, autor:"NBC", foto:"../img/series/4.jpg", desc:"Humor oficina." },

{ id:"vs5", nombre:"Breaking Bad", tipo:"serie", genero:"drama", ano:2008, autor:"AMC", foto:"../img/series/5.jpg", desc:"Drama intenso." },
{ id:"vs6", nombre:"The Crown", tipo:"serie", genero:"drama", ano:2016, autor:"Netflix", foto:"../img/series/6.jpg", desc:"Drama real." },

{ id:"vs7", nombre:"The Haunting", tipo:"serie", genero:"terror", ano:2018, autor:"Netflix", foto:"../img/series/7.jpg", desc:"Terror psicológico." },
{ id:"vs8", nombre:"American Horror Story", tipo:"serie", genero:"terror", ano:2011, autor:"FX", foto:"../img/series/8.jpg", desc:"Antología terror." },

{ id:"vs9", nombre:"Outlander", tipo:"serie", genero:"romance", ano:2014, autor:"Starz", foto:"../img/series/9.jpg", desc:"Romance histórico." },
{ id:"vs10", nombre:"Bridgerton", tipo:"serie", genero:"romance", ano:2020, autor:"Netflix", foto:"../img/series/10.jpg", desc:"Romance drama." },

{ id:"vs11", nombre:"Game of Thrones", tipo:"serie", genero:"fantasia", ano:2011, autor:"HBO", foto:"../img/series/11.jpg", desc:"Fantasía épica." },
{ id:"vs12", nombre:"The Witcher", tipo:"serie", genero:"fantasia", ano:2019, autor:"Netflix", foto:"../img/series/12.jpg", desc:"Monstruos." },

{ id:"vs13", nombre:"Stranger Things", tipo:"serie", genero:"ciencia ficcion", ano:2016, autor:"Netflix", foto:"../img/series/13.jpg", desc:"Sci-fi misterio." },
{ id:"vs14", nombre:"Black Mirror", tipo:"serie", genero:"ciencia ficcion", ano:2011, autor:"Netflix", foto:"../img/series/14.jpg", desc:"Tecnología oscura." },

{ id:"vs15", nombre:"Mindhunter", tipo:"serie", genero:"crimen", ano:2017, autor:"Netflix", foto:"../img/series/15.jpg", desc:"Psicología criminal." },
{ id:"vs16", nombre:"Narcos", tipo:"serie", genero:"crimen", ano:2015, autor:"Netflix", foto:"../img/series/16.jpg", desc:"Drogas." },


// ANIME

{ id:"va1", nombre:"Attack on Titan", tipo:"anime", genero:"accion", ano:2013, autor:"MAPPA", foto:"../img/anime/1.jpg", desc:"Titanes." },
{ id:"va2", nombre:"Demon Slayer", tipo:"anime", genero:"accion", ano:2019, autor:"Ufotable", foto:"../img/anime/2.jpg", desc:"Demonios." },

{ id:"va3", nombre:"Gintama", tipo:"anime", genero:"comedia", ano:2006, autor:"Sunrise", foto:"../img/anime/3.jpg", desc:"Comedia loca." },
{ id:"va4", nombre:"Konosuba", tipo:"anime", genero:"comedia", ano:2016, autor:"Studio Deen", foto:"../img/anime/4.jpg", desc:"Humor absurdo." },

{ id:"va5", nombre:"Your Lie in April", tipo:"anime", genero:"drama", ano:2014, autor:"A-1", foto:"../img/anime/5.jpg", desc:"Drama musical." },
{ id:"va6", nombre:"Clannad", tipo:"anime", genero:"drama", ano:2007, autor:"Kyoto", foto:"../img/anime/6.jpg", desc:"Drama emocional." },

{ id:"va7", nombre:"Tokyo Ghoul", tipo:"anime", genero:"terror", ano:2014, autor:"Pierrot", foto:"../img/anime/7.jpg", desc:"Oscuro." },
{ id:"va8", nombre:"Another", tipo:"anime", genero:"terror", ano:2012, autor:"PA Works", foto:"../img/anime/8.jpg", desc:"Misterio mortal." },

{ id:"va9", nombre:"Toradora", tipo:"anime", genero:"romance", ano:2008, autor:"JC Staff", foto:"../img/anime/9.jpg", desc:"Romance escolar." },
{ id:"va10", nombre:"Horimiya", tipo:"anime", genero:"romance", ano:2021, autor:"CloverWorks", foto:"../img/anime/10.jpg", desc:"Romance juvenil." },

{ id:"va11", nombre:"Spirited Away", tipo:"anime", genero:"fantasia", ano:2001, autor:"Ghibli", foto:"../img/anime/11.jpg", desc:"Mundo mágico." },
{ id:"va12", nombre:"Made in Abyss", tipo:"anime", genero:"fantasia", ano:2017, autor:"Kinema", foto:"../img/anime/12.jpg", desc:"Aventura oscura." },

{ id:"va13", nombre:"Steins Gate", tipo:"anime", genero:"ciencia ficcion", ano:2011, autor:"White Fox", foto:"../img/anime/13.jpg", desc:"Viajes en el tiempo." },
{ id:"va14", nombre:"Psycho Pass", tipo:"anime", genero:"ciencia ficcion", ano:2012, autor:"Production IG", foto:"../img/anime/14.jpg", desc:"Futuro oscuro." },

{ id:"va15", nombre:"Death Note", tipo:"anime", genero:"crimen", ano:2006, autor:"Madhouse", foto:"../img/anime/15.jpg", desc:"Crimen mental." },
{ id:"va16", nombre:"Monster", tipo:"anime", genero:"crimen", ano:2004, autor:"Madhouse", foto:"../img/anime/16.jpg", desc:"Thriller psicológico." }
];
