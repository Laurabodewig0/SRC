const mongoose = require('mongoose');




const esquemaEvento = new mongoose.Schema({
    nomeEvento: { type: String, required: true },
    artista: { type: String, required: true },
    data: { type: String, required: true },
    horario: { type: String, required: true },
  });

const Evento = mongoose.model('Evento', esquemaEvento);





module.exports = Evento;









