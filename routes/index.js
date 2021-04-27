const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const elementoController = require("../controllers/elementoController");

module.exports = function () {
    // router.get("/", (req, res) => {
    //     res.send("inicio");
    // });
    // router.get("/nosotros", (req, res) => {
    //     res.send("Nosotros");
    // });

    //agrega nuevos clientes via POST
    router.post("/clientes", clienteController.nuevoCliente);
    router.post("/elementos", elementoController.nuevoElemento);

    return router;
};
