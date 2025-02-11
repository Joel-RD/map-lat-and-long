# Datos Curiosos de paises

Proyecto que consiste en una API REST que permite manejar un listado de paises que contienen datos tanto basicos (Nombres, capitales, etc) como mas complejos (Poblacion, superficie, etc ) ademas de agregar  un listados de datos curiosos sobre el pais (presidentes mas populares, Aportes al mundo , gastronomia, etc)

## 📌 Endpoints

### GET /home
* vista por defecto del mapa

![](/imgs_proyect/default.png)

### POST home/country/api/v1?country={country}

* Datos de un pais en especifico (ejemplo `/home/country/api/v1?country=Colombia`)

![](/imgs_proyect/Colombia.png)

## Ejecutar

Para ejecutar el proyecto, se debe ejecutar el comando `npm run dev` en la terminal. Luego, se podra acceder a los endpoints de la API mediante un cliente HTTP como Postman o cURL.

## Notas

* Tener en cuenta que el proyecto utiliza Node.js como entorno de ejecucion, descargue node.js para poder ejecutar el proyecto.
* si necesita instalar las dependencias del proyecto, ejecute el comando `npm install` en la terminal luego de haber clonado el repositorio, para correr el proyecto ejecute el comando `npm run dev`.
* El proyecto utiliza Express como framework web.
* El proyecto utiliza Express Rate Limit para limitar el numero de peticiones que se pueden realizar en un determinado tiempo.
