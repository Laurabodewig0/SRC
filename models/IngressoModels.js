const mongoose = require("mongoose");

const esquemaIngresso = new mongoose.Schema({
    ID_evento: { type: String, required: true },
    nomeUtilizador: { type: String, required: true },
    idade: { type: Number, required: true },
    tipo: { type: String, required: true },
  });

  const Ingresso = mongoose.model('Ingresso', esquemaIngresso);

  module.exports = Ingresso;