document.getElementById("generated").addEventListener("click", () => {
  try {
    fetch(
      "/country/api/v1?country=" + document.getElementById("paises").value,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    ).then((res) => {
      if (!res.ok) {
        console.log("Upps.. ah ocurrido un error inesperado.");
      } else {
        res.json().then((data) => {
          let info = document.getElementById("info");
          let bandera = document.getElementById("bandera");
          let wikipedia = document.getElementById("wikipedia");

          info.style.display = "block";
          info.animate(
            [{ transform: "translateX(100%)" }, { transform: "translateX(0)" }],
            {
              duration: 500, // 0.5 segundos
              easing: "ease-in-out",
              fill: "forwards",
            }
          );

          const gastronomia = data[0].Basicos.gastronomia;
          const capital = data[0].Basicos.capital;
          const independencia = data[0].Basicos.independecia;
          const area = data[0].Basicos.area;
          const latitud = data[2].latitud;
          const longitud = data[1].longitud;

          generatedMapView(data[1].longitud, data[2].latitud);

          document.getElementById("gastronomia").textContent = gastronomia;
          document.getElementById("country").textContent =
            document.getElementById("paises").value;
          wikipedia.href = data[0].Basicos.linkWikipedia;
          bandera.src = data[0].Basicos.linkBandera;       
          document.getElementById("capital").textContent = capital;
          document.getElementById("independencia").textContent = independencia;
          document.getElementById("area").textContent = area;
          document.getElementById("latitud").textContent = latitud;
          document.getElementById("longitud").textContent = longitud;

          // agregar eventos importantes
          const eventosImportantes = data[3].eventosImportantes;
          const eventosLista = document.getElementById("eventos-importantes");
          eventosLista.innerHTML = "";
          eventosLista.appendChild(
            document.createElement("li")
          ).textContent = `${eventosImportantes.año}: ${eventosImportantes.evento}`;

          // agregar presidentes importantes
          const presidentesImportantes = data[4].presidentesImportantes;
          const presidentesLista = document.getElementById(
            "presidentes-importantes"
          );
          presidentesLista.innerHTML = "";
          presidentesLista.appendChild(
            document.createElement("li")
          ).textContent = `${presidentesImportantes.nombre} (${presidentesImportantes.mandato})`;

          // agregar inventos y descubrimientos
          const inventosDescubrimientos = data[5].inventosYDescubrimientos;
          const inventosLista = document.getElementById(
            "inventos-descubrimientos"
          );
          inventosLista.innerHTML = "";
          inventosLista.appendChild(
            document.createElement("li")
          ).textContent = `${inventosDescubrimientos.año}: ${inventosDescubrimientos.invento}`;

          // agregar contribuciones al mundo
          const contribucionesMundo = data[6].contribucionesAlMundo;
          const contribucionesLista = document.getElementById(
            "contribuciones-mundo"
          );
          contribucionesLista.innerHTML = "";
          contribucionesLista.appendChild(
            document.createElement("li")
          ).textContent = `${contribucionesMundo.área}: ${contribucionesMundo.contribución}`;
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
});

document.getElementById("paises").addEventListener("change", () => {
  document.getElementById("generated").disabled = false;
});

let globalLatitud = null;
let globalLongitud = null;

let map;

map = L.map("map").setView([18.73, -70.16], 5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const generatedMapView = (longitud, latitud) => {
  let lat = latitud || 18.73;
  let lon = longitud || -70.16;

  map.eachLayer((layer) => {
    if (layer instanceof L.Circle || layer instanceof L.Popup) {
      map.removeLayer(layer);
    }
  });

  var circle = L.circle([lat, lon], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 30000,
  }).addTo(map);

  var popup = L.popup()
    .setLatLng([lat, lon])
    .setContent(
      "Bienvenido a " + document.getElementById("paises").value,
      `https://www.countryflags.com/wp-content/uploads/${
        document.getElementById("paises").value
      }-flag-png-large.png`
    )
    .openOn(map);

  map.setView([lat, lon], 4);
};

generatedMapView();

var circle = L.circle([18.73, -70.16], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 30000,
}).addTo(map);

var popup = L.popup()
  .setLatLng([18.73, -70.16])
  .setContent(
    `Bienvenido a Republica Dominicana`,
    `https://www.countryflags.com/wp-content/uploads/dominican-republic-flag-png-large.png`
  )
  .openOn(map);
