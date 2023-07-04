const cors_proxy = require("cors-anywhere");

const host = "localhost"; // Puedes cambiarlo a tu dirección IP o dejarlo como está
const port = 8101; // Puedes cambiar el puerto si lo deseas

cors_proxy
  .createServer({
    originWhitelist: [], // Deja vacío para permitir todos los orígenes
    requireHeader: ["origin", "x-requested-with"], // Requerir encabezados 'origin' y 'x-requested-with'
  })
  .listen(port, host, () => {
    console.log(`Proxy CORS-Anywhere escuchando en http://${host}:${port}`);
  });
