const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Crear el servidor
const app = express();

//habilitamos body parser para leer json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//rutas de la app
app.use("/", routes());

// Definimos el puerto
app.listen(5000);
