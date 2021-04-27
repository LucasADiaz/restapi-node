const Clientes = require("../models/Clientes");

// agregar nu nuevo cliente

exports.nuevoCliente = async (req, res) => {
    const cliente = new Clientes(req.body);
    try {
        //almacenar el registro
        await cliente.save();
        res.json({ mensaje: "Se agrego un nuevo cliente" });
    } catch (error) {
        console.log(error);
        next(); // para que no se detenga, que se vaya al siguiente middelware
    }
};
