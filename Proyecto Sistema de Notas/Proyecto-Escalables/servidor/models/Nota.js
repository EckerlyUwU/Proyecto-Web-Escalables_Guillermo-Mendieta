const mongoose = require('mongoose');

const NotaSchema = mongoose.Schema({
    categoria: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    informacion: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Nota', NotaSchema);