const express = require('express');
const router = express.Router();
const productoController = require('../controllers/notaController');

router.post('/' , productoController.crearNota);
router.get('/' , productoController.obtenerNotas);
router.put('/:id' , productoController.actualizarNota);
router.get('/:id' , productoController.obtenerNota);
router.delete('/:id' , productoController.eliminarNota);

module.exports = router;