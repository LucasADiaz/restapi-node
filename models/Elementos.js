const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const elementoSchema = new Schema({
    tipo: {
        type: String,
        trim: true,
    },
    nombre: {
        type: String,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model("Elementos", elementoSchema);
