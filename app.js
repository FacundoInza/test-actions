const express = require("express");
const cors = require("cors");

const { json, utlencoded } = express;
const app = express();
const port = 8080;

app.set("trust proxy", 1);

app.use(json());
app.use(utlencoded({ extended: false }));

const corsOptions = { origin: "*", optionSuccessStatus: 200 };
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
