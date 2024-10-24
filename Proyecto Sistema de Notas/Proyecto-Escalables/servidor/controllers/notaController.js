const Nota = require("../models/Nota");

exports.crearNota = async (req,res) => {
    try {
        let nota;

        nota = new Nota(req.body);

        await nota.save();
        res.send(nota);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerNotas = async (req,res) => {
    try {
        const notas = await Nota.find();
        res.json(notas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarNota = async (req,res) => {
    try {
        const { categoria, nombre, fecha, informacion } = req.body;
        let nota = await Nota.findById(req.params.id);

        if(!nota){
            res.status(404).json({ msg: "No existe la nota" })
        }

        nota.categoria = categoria;
        nota.nombre = nombre;
        nota.fecha = fecha;
        nota.informacion = informacion ;

        nota = await Nota.findOneAndUpdate({ _id: req.params.id }, nota, {new: true})
        res.json(nota);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerNota = async (req,res) => {
    try {
        let nota = await Nota.findById(req.params.id);

        if(!nota){
            res.status(404).json({ msg: "No existe la nota" })
        }

        res.json(nota);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarNota = async (req,res) => {
    try {
        let nota = await Nota.findById(req.params.id);

        if(!nota){
            res.status(404).json({ msg: "No existe la nota" })
        }

        await Nota.findOneAndRemove({_id: req.params.id})
        res.json({ msg: "Nota eliminada con exito"});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}