const express = require("express");
const cors_proxy = require("cors-anywhere");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With");
  next();
});

app.use(cors_proxy());

const port = 8080; // Puedes cambiar el puerto si lo deseas

app.listen(port, () => {
  console.log(`Proxy CORS-Anywhere escuchando en http://localhost:${port}`);
});
