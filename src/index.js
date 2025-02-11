import express from "express";
import rateLimit from "express-rate-limit";
import path from "node:path";
import { filterDataCountry, filterCountry } from "./getInfo.js";

const limitter = rateLimit({
  windowMs: 3 * 1000,
  limit: 3,
  statusCode: 404,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: `Too many requests, please try again later`,
});

const port = 8000;
const app = express();

app.use(express.static(path.join(process.cwd(), "src", "views")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limitter);

app.get("/home", (req, res) => {
  res.sendFile(path.join(process.cwd(), "src", "views", "index.html"));
});

app.post("/country/api/v1", (req, res) => {
  let { country } = req.query;

  const infoCountry = filterCountry(country.toLowerCase());
  const data = filterDataCountry(
    { Basicos: infoCountry.datosBasicos[0] },
    { longitud: infoCountry.longitud },
    { latitud: infoCountry.altitud },
    infoCountry.datos
  );
  res.json(data).status(200);
});

app.all("*", (req, res) => {
  res
    .status(404)
    .sendFile(path.join(process.cwd(), "src", "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Port running on: http://localhost:${port}`);
});
