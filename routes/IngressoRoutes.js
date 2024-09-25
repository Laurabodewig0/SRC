const express = require('express');
const router = express.Router();
const controllerIngressos = require('../Controllers/controllerIngressos');

router.post('/',controllerIngressos.criarIngresso);
router.get('/',controllerIngressos.listarIngresso);
router.put('/',controllerIngressos.atualizarIngresso);
router.delete('/',controllerIngressos.deletarIngresso);

module.exports = router;