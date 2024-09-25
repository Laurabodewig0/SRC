const {Evento} = require('../models/event')

async function listarEventos(){
try {
    const eventos = await Evento.find();
    res.status(200).json(eventos);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao listar eventos:', erro: erro.message });
  }}


  async function criarEvento(req, res){
    try {
      const { nomeEvento, artista, data, horario } = req.body;
      const novoEvento = await (new Evento({ nomeEvento, artista, data, horario })).save();
      res.status(201).json({ mensagem: "Evento criado com sucesso", criado: novoEvento });
    } catch (erro) {
      res.status(500).json({ mensagem: "Erro ao criar evento", erro: erro.message });
    };
  };

  async function atualizarEvento(req,res) {
    try {
      const {id} = req.params;
      const {nomeEvento, artista, data, horario} = req.body;
      const eventoAtualizado = await Evento.findByIdAndUpdate(
        id,
        { nomeEvento, artista, data, horario },
        { new: true, runValidators: true },
      );
      if (eventoAtualizado) {
        res.status(200).json({ mensagem: 'Evento atualizado com sucesso', atualizado: eventoAtualizado });
      } else {
        res.status(404).json({ mensagem: 'Evento não encontrado' });
      };
} catch (erro) {
res.status(500).json({ mensagem: 'Erro ao atualizar evento', erro: erro.message });
};
};

 
  async function deletarEvento(req,res) {
    const { id } = req.params;
    try {
      const eventoDeletado = await Evento.findByIdAndDelete(id);
      if (eventoDeletado) {
      res.status(200).json({ mensagem: "Evento deletado com sucesso", deletado: eventoDeletado });
    } else {
      res.status(404).json({ mensagem: "Evento não encontrado" });
    };
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao deletar evento", erro: erro.message });
  };
};

module.exports = {listarEventos, criarEvento, atualizarEvento, deletarEvento}