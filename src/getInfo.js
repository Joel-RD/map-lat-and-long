import e from "express";

const randonNum = (long) => {
  const n1 = long.length;
  const n2 = parseInt(Math.random(0, n1) * n1);
  return n2;
};

export const unitedStates = {
  longitud: "-95.71",
  altitud: "37.09",
  datosBasicos: [
    {
      capital: "Washington D.C.",
      gastronomia: ["Hamburguesas", "Pizzas", "Tacos", "Sándwiches de pavo"],
      independecia: "4 de julio de 1776",
      linkWikipedia: "https://es.wikipedia.org/wiki/Estados_Unidos",
      linkBandera:
        "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
      historia: [
        "Colonia británica",
        "Guerra de Independencia",
        "Guerra Civil",
        "Segunda Guerra Mundial",
      ],
      area: "9.833.517 km²",
    },
  ],
  datos: {
    eventosImportantes: [
      { año: 1776, evento: "Declaración de Independencia" },
      { año: 1861, evento: "Guerra Civil Estadounidense" },
      { año: 1929, evento: "Crash del Mercado de Valores" },
      { año: 1963, evento: "Asesinato del presidente John F. Kennedy" },
      { año: 1969, evento: "Alunizaje del Apolo 11" },
      { año: 2001, evento: "Atentados del 11 de septiembre" },
    ],
    presidentesImportantes: [
      { nombre: "George Washington", mandato: "1789-1797" },
      { nombre: "Abraham Lincoln", mandato: "1861-1865" },
      { nombre: "Franklin D. Roosevelt", mandato: "1933-1945" },
      { nombre: "John F. Kennedy", mandato: "1961-1963" },
      { nombre: "Barack Obama", mandato: "2009-2017" },
    ],
    inventosYDescubrimientos: [
      { año: 1876, invento: "Teléfono (Alexander Graham Bell)" },
      { año: 1903, invento: "Avión (Hermanos Wright)" },
      { año: 1946, invento: "Computadora electrónica (ENIAC)" },
      { año: 1958, invento: "Microchip" },
      { año: 1991, invento: "World Wide Web (Tim Berners-Lee)" },
    ],
    contribucionesAlMundo: [
      { área: "Tecnología", contribución: "Internet" },
      {
        área: "Medicina",
        contribución: "Vacuna contra la poliomielitis (Jonas Salk)",
      },
      { área: "Exploración espacial", contribución: "Alunizaje del Apolo 11" },
      { área: "Cine y televisión", contribución: "Hollywood" },
      { área: "Música", contribución: "Jazz, blues, rock and roll" },
      {
        área: "Deporte",
        contribución: "Baloncesto (inventado por James Naismith)",
      },
      {
        área: "Economía",
        contribución: "Sistema de banca central (Reserva Federal)",
      },
      {
        área: "Educación",
        contribución:
          "Universidades de investigación (como Harvard y Stanford)",
      },
    ],
  },
};

export const argentina = {
  longitud: "-63.61",
  altitud: "-38.41",
  datosBasicos: [
    {
      capital: "Buenos Aires",
      gastronomia: ["Asado", "Empanadas", "Choripán", "Milanesa"],
      independecia: "25 de mayo de 1810",
      linkWikipedia: "https://es.wikipedia.org/wiki/Argentina",
      linkBandera:
        "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-1536x963.jpg",
      historia: [
        "Colonia española",
        "Guerra de la Independencia",
        "Guerra de la Triple Alianza",
        "Período de inmigración masiva",
      ],
      area: "2.780.400 km²",
    },
  ],
  datos: {
    eventosImportantes: [
      { año: 1816, evento: "Declaración de Independencia" },
      { año: 1853, evento: "Adopción de la Constitución Nacional" },
      { año: 1880, evento: "Federalización de Buenos Aires" },
      { año: 1946, evento: "Elección de Juan Domingo Perón como presidente" },
      { año: 1976, evento: "Golpe de Estado y dictadura militar" },
      { año: 1983, evento: "Restauración de la democracia" },
    ],
    presidentesImportantes: [
      { nombre: "José de San Martín", mandato: "1814-1821" },
      { nombre: "Domingo Faustino Sarmiento", mandato: "1868-1874" },
      { nombre: "Hipólito Yrigoyen", mandato: "1916-1922" },
      { nombre: "Juan Domingo Perón", mandato: "1946-1955" },
      { nombre: "Raúl Alfonsín", mandato: "1983-1989" },
    ],
    inventosYDescubrimientos: [
      { año: 1906, invento: "Radio (Guglielmo Marconi)" },
      { año: 1941, invento: "Cemento armado (Francisco Salamone)" },
      { año: 1950, invento: "Pilas de combustible (Enrique Mosconi)" },
      { año: 1960, invento: "Antibióticos (Salvador Mazza)" },
    ],
    contribucionesAlMundo: [
      {
        área: "Ciencia",
        contribución: "Descubrimiento del elemento químico Argon (1902)",
      },
      {
        área: "Tecnología",
        contribución:
          "Desarrollo de la industria aeronáutica (Fábrica Argentina de Aviones)",
      },
      {
        área: "Medicina",
        contribución:
          "Desarrollo de la vacuna contra la fiebre amarilla (1920)",
      },
      {
        área: "Cine y televisión",
        contribución:
          "Cine argentino (películas como 'La casa está vacía' y 'El secreto de sus ojos')",
      },
      { área: "Música", contribución: "Tango (género musical y danza)" },
      {
        área: "Deporte",
        contribución: "Fútbol ( selección argentina de fútbol)",
      },
      {
        área: "Gastronomía",
        contribución: "Asado argentino (tradición culinaria)",
      },
    ],
  },
};

export const chile = {
  longitud: "-71.54",
  altitud: "-35.67",
  datosBasicos: [
    {
      capital: "Santiago",
      gastronomia: [
        "Asado",
        "Pescado frito",
        "Chimichurri",
        "Ají de gallina",
        "Churrasquita",
      ],
      independecia: "1818",
      linkWikipedia: "https://es.wikipedia.org/wiki/Chile",
      linkBandera:
        "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png",
      historia: [
        "Colonia española",
        "Guerra de la Independencia",
        "Guerra del Pacífico",
        "Período de inmigración masiva",
      ],
      area: "756.102 km²",
    },
  ],
  datos: {
    eventosImportantes: [
      { año: 1810, evento: "Grito de la Independencia" },
      { año: 1818, evento: "Proclamación de la República" },
      { año: 1891, evento: "Guerra del Pacífico" },
      { año: 1973, evento: "Golpe de Estado de los Generales" },
      { año: 1990, evento: "Restauración de la democracia" },
    ],
    presidentesImportantes: [
      { nombre: "José Joaquín Pérez", mandato: "1861-1871" },
      { nombre: "Federico Errázuriz", mandato: "1871-1876" },
      { nombre: "Aníbal Pinto", mandato: "1876-1881" },
      { nombre: "Domingo Santa María", mandato: "1881-1886" },
      { nombre: "Gabriel González Videla", mandato: "1946-1952" },
      { nombre: "Carlos Ibáñez del Campo", mandato: "1952-1958" },
      { nombre: "Jorge Alessandri Rodríguez", mandato: "1958-1964" },
      { nombre: "Eduardo Frei Montalva", mandato: "1964-1970" },
      { nombre: "Salvador Allende", mandato: "1970-1973" },
      { nombre: "Augusto Pinochet", mandato: "1973-1990" },
      { nombre: "Patricio Aylwin", mandato: "1990-1994" },
    ],
    inventosYDescubrimientos: [
      { año: 1906, invento: "Teléfono (Guglielmo Marconi)" },
      { año: 1941, invento: "Cemento armado (Francisco Salamone)" },
      { año: 1950, invento: "Pilas de combustible (Enrique Mosconi)" },
      { año: 1960, invento: "Antibióticos (Salvador Mazza)" },
    ],
    contribucionesAlMundo: [
      {
        área: "Ciencia",
        contribución: "Descubrimiento del elemento químico Copernicio (1994)",
      },
      {
        área: "Tecnología",
        contribución:
          "Desarrollo de la industria aeronáutica (Fábrica de Aviones de Chile)",
      },
      {
        área: "Medicina",
        contribución:
          "Desarrollo de la vacuna contra la fiebre amarilla (1920)",
      },
      {
        área: "Cine y televisión",
        contribución:
          "Cine chileno (películas como 'La casa está vacía' y 'El secreto de sus ojos')",
      },
      { área: "Música", contribución: "Folclore chileno (género musical)" },
      { área: "Deporte", contribución: "Fútbol (selección chilena de fútbol)" },
      {
        área: "Gastronomía",
        contribución:
          "Cuisine chilena (pastel de choclo, chupe de mariscos, etc.)",
      },
    ],
  },
};

export const colombia = {
  longitud: "-74.29",
  altitud: "4.57",
  datosBasicos: [
    {
      capital: "Bogotá",
      gastronomia: [
        "Ajiaco",
        "Bandeja paisa",
        "Empanadas",
        "Lechona",
        "Sancocho",
      ],
      independecia: "20 de julio de 1810",
      linkWikipedia: "https://es.wikipedia.org/wiki/Colombia",
      linkBandera:
        "https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png",
      historia: [
        "Colonia española",
        "Guerra de la Independencia",
        "Guerra de los Mil Días",
        "Período de inmigración masiva",
      ],
      area: "1.138.910 km²",
    },
  ],
  datos: {
    eventosImportantes: [
      { año: 1810, evento: "Grito de Independencia" },
      {
        año: 1819,
        evento: "Batalla de Boyacá y consolidación de la independencia",
      },
      { año: 1851, evento: "Abolición de la esclavitud" },
      { año: 1903, evento: "Separación de Panamá" },
      { año: 1948, evento: "El Bogotazo" },
      { año: 1991, evento: "Promulgación de la nueva Constitución" },
    ],
    presidentesImportantes: [
      { nombre: "Simón Bolívar", mandato: "1819-1830" },
      { nombre: "Rafael Núñez", mandato: "1880-1882, 1884-1886, 1887-1894" },
      { nombre: "Alfonso López Pumarejo", mandato: "1934-1938, 1942-1945" },
      { nombre: "Carlos Lleras Restrepo", mandato: "1966-1970" },
      { nombre: "Álvaro Uribe Vélez", mandato: "2002-2010" },
    ],
    inventosYDescubrimientos: [
      {
        año: 1966,
        invento: "Válvula de Hakim para tratar la hidrocefalia (Salomón Hakim)",
      },
      {
        año: 1970,
        invento: "Incubadora de bajo costo para neonatos (Leonor Borrás)",
      },
      {
        año: 2000,
        invento:
          "Método Madre Canguro para bebés prematuros (Dr. Edgar Rey Sanabria)",
      },
      { año: 2013, invento: "Sistema Helmy para protección de motociclistas" },
    ],
    contribucionesAlMundo: [
      {
        área: "Medicina",
        contribución:
          "Desarrollo del Método Madre Canguro para el cuidado de bebés prematuros",
      },
      { área: "Música", contribución: "Géneros como la cumbia y el vallenato" },
      {
        área: "Literatura",
        contribución:
          "Realismo mágico, representado por Gabriel García Márquez",
      },
      {
        área: "Deporte",
        contribución: "Ciclistas destacados en competencias internacionales",
      },
      {
        área: "Gastronomía",
        contribución: "Platos típicos como la arepa y el sancocho",
      },
    ],
  },
};

export const peru = {
  longitud: "-75.01",
  altitud: "-9.18",
  datosBasicos: [
    {
      capital: "Lima",
      gastronomia: [
        "Ceviche",
        "Lomo saltado",
        "Anticuchos",
        "Aji de gallina",
        "Cuy",
      ],
      independecia: "28 de julio de 1821",
      linkWikipedia: "https://es.wikipedia.org/wiki/Per%C3%BA",
      linkBandera:
        "https://www.countryflags.com/wp-content/uploads/peru-flag-png-large.png",
      historia: [
        "Imperio incaico",
        "Colonia Española",
        "Guerra de la Independencia",
        "Guerra del Pacífico",
      ],
      area: "1.285.216 km²",
    },
  ],
  datos: {
    eventosImportantes: [
      {
        año: 1821,
        evento: "Proclamación de la Independencia por José de San Martín",
      },
      {
        año: 1824,
        evento: "Batalla de Ayacucho, consolidación de la independencia",
      },
      { año: 1879, evento: "Inicio de la Guerra del Pacífico contra Chile" },
      {
        año: 1884,
        evento: "Firma del Tratado de Ancón, fin de la Guerra del Pacífico",
      },
      { año: 1992, evento: "Autogolpe de Estado de Alberto Fujimori" },
      {
        año: 2000,
        evento: "Renuncia de Alberto Fujimori y restauración de la democracia",
      },
    ],
    presidentesImportantes: [
      { nombre: "Ramón Castilla", mandato: "1845-1851 y 1855-1862" },
      { nombre: "Manuel Pardo y Lavalle", mandato: "1872-1876" },
      { nombre: "Fernando Belaúnde Terry", mandato: "1963-1968 y 1980-1985" },
      { nombre: "Alberto Fujimori", mandato: "1990-2000" },
      { nombre: "Alejandro Toledo", mandato: "2001-2006" },
    ],
    inventosYDescubrimientos: [
      { año: 1880, invento: "Reloj mecánico monumental (Pedro Ruiz Gallo)" },
      {
        año: 1900,
        invento: "Estudios pioneros en propulsión a chorro (Pedro Paulet)",
      },
      {
        año: 1913,
        invento:
          "Descubrimiento del agente causal de la enfermedad de Carrión (Alberto Barton)",
      },
      {
        año: 1920,
        invento:
          "Investigaciones sobre la fisiología de la altura (Carlos Monge Medrano)",
      },
    ],
    contribucionesAlMundo: [
      {
        área: "Ciencia",
        contribución:
          "Investigaciones sobre la biología andina y la fisiología de la altura (Carlos Monge Medrano)",
      },
      {
        área: "Gastronomía",
        contribución:
          "Platos emblemáticos como el ceviche, la causa y el lomo saltado",
      },
      {
        área: "Música",
        contribución: "Géneros como la marinera, el huayno y la cumbia peruana",
      },
      {
        área: "Arqueología",
        contribución:
          "Civilizaciones antiguas como la Inca, Nazca y Moche, y sitios arqueológicos como Machu Picchu",
      },
      {
        área: "Literatura",
        contribución:
          "Escritores destacados como Mario Vargas Llosa, ganador del Premio Nobel de Literatura",
      },
    ],
  },
};

export const mexico = {
  longitud: "-102.55",
  altitud: "23.63",
  datosBasicos: [
    {
      capital: "Ciudad de México",
      poblacion: "129.2 millones (2023)",
      idiomaOficial: "Español",
      moneda: "Peso mexicano (MXN)",
      gentilicio: "Mexicano/a",
      gastronomia: [
        "Tacos al pastor",
        "Mole poblano",
        "Pozole",
        "Tamales",
        "Chiles en nogada",
        "Enchiladas",
        "Cochinita pibil",
        "Carnitas",
        "Sopes",
        "Tlacoyos",
        "Barbacoa",
        "Menudo",
      ],
      independencia: "16 de septiembre de 1810",
      linkWikipedia: "https://es.wikipedia.org/wiki/Mexico",
      linkBandera:
        "https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png",
      historia: [
        "Civilizaciones prehispánicas: Olmeca, Maya, Mexica (Azteca), Tolteca, Zapoteca",
        "Conquista Española (1519-1521)",
        "Virreinato de Nueva España (1521-1821)",
        "Guerra de Independencia (1810-1821)",
        "Primer Imperio Mexicano (1821-1823)",
        "Primera República Federal (1824-1835)",
        "Intervención de EE.UU. (1846-1848) y pérdida de territorios",
        "Segundo Imperio Mexicano con Maximiliano I (1864-1867)",
        "Restauración de la República con Benito Juárez (1867-1872)",
        "Porfiriato (1876-1911)",
        "Revolución Mexicana (1910-1920)",
        "Consolidación del México moderno (siglo XX)",
      ],
      area: "1,964,375 km²",
      estados: 32,
    },
  ],
  datos: {
    eventosImportantes: [
      { año: 1325, evento: "Fundación de México-Tenochtitlán" },
      { año: 1519, evento: "Llegada de Hernán Cortés a México" },
      { año: 1521, evento: "Caída de Tenochtitlán y conquista de México" },
      { año: 1810, evento: "Grito de Dolores e inicio de la Independencia" },
      { año: 1821, evento: "Consumación de la Independencia de México" },
      {
        año: 1848,
        evento:
          "Tratado de Guadalupe Hidalgo, México pierde la mitad de su territorio",
      },
      { año: 1862, evento: "Batalla de Puebla contra Francia" },
      { año: 1910, evento: "Inicio de la Revolución Mexicana" },
      { año: 1938, evento: "Expropiación petrolera por Lázaro Cárdenas" },
      { año: 1968, evento: "Juegos Olímpicos en Ciudad de México" },
      { año: 1985, evento: "Terremoto en Ciudad de México" },
      {
        año: 1994,
        evento:
          "Entrada en vigor del Tratado de Libre Comercio de América del Norte (TLCAN)",
      },
    ],
    presidentesImportantes: [
      {
        nombre: "Benito Juárez",
        mandato: "1858-1872",
        logros: ["Reformas liberales", "Restauración de la República"],
      },
      {
        nombre: "Porfirio Díaz",
        mandato: "1876-1880 y 1884-1911",
        logros: ["Modernización del país", "Desarrollo de ferrocarriles"],
      },
      {
        nombre: "Lázaro Cárdenas",
        mandato: "1934-1940",
        logros: ["Expropiación petrolera", "Reparto agrario"],
      },
      {
        nombre: "Adolfo López Mateos",
        mandato: "1958-1964",
        logros: [
          "Creación del ISSSTE",
          "Nacionalización de la industria eléctrica",
        ],
      },
      {
        nombre: "Vicente Fox",
        mandato: "2000-2006",
        logros: ["Alternancia política", "Reformas económicas"],
      },
    ],
    inventosYDescubrimientos: [
      {
        año: 1946,
        invento: "Píldora anticonceptiva (Luis Ernesto Miramontes)",
        impacto: "Revolucionó la planificación familiar a nivel mundial.",
      },
      {
        año: 1940,
        invento: "Televisión a color (Guillermo González Camarena)",
        impacto:
          "Fue el primer sistema de televisión en color funcional y sentó las bases de las transmisiones modernas.",
      },
      {
        año: 1960,
        invento: "Tridilosa (Heberto Castillo)",
        impacto:
          "Sistema estructural innovador que redujo el uso de materiales y mejoró la resistencia de edificios y puentes.",
      },
      {
        año: 1970,
        invento: "Sistema de detección sísmica",
        impacto:
          "Ayudó a mejorar la prevención y seguridad en zonas de alta actividad sísmica.",
      },
      {
        año: 2005,
        invento: "Concreto translúcido (Joel Sosa Gutiérrez)",
        impacto:
          "Innovación en la arquitectura y la construcción con aplicaciones en diseño ecológico.",
      },
      {
        año: 1985,
        invento: "Sistema de alerta sísmica temprana",
        impacto:
          "Primer sistema en el mundo en dar advertencias previas a sismos en grandes ciudades.",
      },
      {
        año: 1951,
        invento: "Fluoruro de plata para la caries (Federico Gómez Santos)",
        impacto:
          "Ayudó a prevenir la caries dental en comunidades de bajos recursos.",
      },
      {
        año: 2011,
        invento: "Maíz biofortificado",
        impacto:
          "Creado para mejorar la nutrición en zonas marginadas, con mayor contenido de nutrientes.",
      },
    ],
    contribucionesAlMundo: [
      {
        área: "Ciencia",
        contribución: "Descubrimientos en nanotecnología y biomedicina.",
      },
      {
        área: "Gastronomía",
        contribución:
          "La cocina mexicana es Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.",
      },
      {
        área: "Música",
        contribución:
          "Creación de géneros como el mariachi, la ranchera y el son jarocho.",
      },
      {
        área: "Arqueología",
        contribución:
          "Grandes descubrimientos en Teotihuacán, Palenque y Monte Albán.",
      },
      {
        área: "Literatura",
        contribución: "Octavio Paz, Premio Nobel de Literatura en 1990.",
      },
      {
        área: "Deporte",
        contribución:
          "México ha sido sede de los Juegos Olímpicos de 1968 y dos Copas Mundiales de Fútbol (1970 y 1986).",
      },
      {
        área: "Cine",
        contribución:
          "Directores como Guillermo del Toro, Alfonso Cuarón y Alejandro González Iñárritu han ganado premios Oscar.",
      },
    ],
  },
};

export const filterCountry = (country) => {
  try {
    let listCountry = {
      united_states: unitedStates,
      colombia: colombia,
      peru: peru,
      chile: chile,
      argentina: argentina,
      mexico: mexico,
    };
    Object.keys(listCountry).forEach((countryArr) => {
      if (country === countryArr) {
        listCountry = listCountry[countryArr];
      }
    });
    return listCountry;
  } catch (error) {
    res
      .status(404)
      .send(`Upps... ${country} no se encuentra en la base de datos`);
    console.log(error);
  }
};

export const filterDataCountry = (basicData, longitud, altitud, datos) => {
  try {
    const newObj = [basicData, longitud, altitud];
    for (const key in datos) {
      const randomNumGenerated = randonNum(datos[key]);
      newObj.push({ [key]: datos[key][randomNumGenerated] });
    }

    return newObj;
  } catch (error) {
    res
      .status(404)
      .send(`Upps... ${country} no se encuentra en la base de datos`);
    console.log(error);
  }
};
