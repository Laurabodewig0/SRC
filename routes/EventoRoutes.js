const express = require('express');
const router = express.Router();
const controllerEventos = require('../Controllers/controllerEventos');

router.post('/',controllerEventos.criarEvento);
router.get('/',controllerEventos.listarEventos);
router.put('/',controllerEventos.atualizarEvento);
router.delete('/',controllerEventos.deletarEvento);

module.exports = router;