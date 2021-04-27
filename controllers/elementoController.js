const Elementos = require("../models/Elementos");

//agregar un nuevo elemento

exports.nuevoElemento = async (req, res) => {
    const elemento = new Elementos(req.body);
    try {
        // se crea un elemento nuevo
        elemento.save();
        res.json({ mensaje: "Se creo un nuevo elmento" });
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.elementos = async (req, res) => {
    const elemento = new Elementos();
    res.json(elemento.get());
};
