const express = require("express");
const { createServer } = require("cors-anywhere");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With");
  next();
});

const proxy = createServer({
  originWhitelist: [], // Deja vacío para permitir todos los orígenes
  requireHeader: ["origin", "x-requested-with"], // Requerir encabezados 'origin' y 'x-requested-with'
});

app.use("/", (req, res) => {
  req.url = req.url.replace("/", ""); // Eliminar la barra inicial para evitar problemas de redirección
  proxy.emit("request", req, res);
});

const port = 8080; // Puedes cambiar el puerto si lo deseas

app.listen(port, () => {
  console.log(`Proxy CORS-Anywhere escuchando en http://localhost:${port}`);
});
