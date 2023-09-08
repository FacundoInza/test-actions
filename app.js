const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
