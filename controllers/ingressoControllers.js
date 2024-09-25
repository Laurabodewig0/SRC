const {Ingresso} = require('../models/event')

async function listarIngressos() {
    try {
        const ingressos = await listarIngressos();
      res.status(200).json(ingressos);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao listar ingressos:', erro: erro.message });
  };
};

async function criarIngresso(req, res) {
    try {
        const { ID_evento, nomeUtilizador, idade, tipo } = req.body;
      const novoIngresso = new Ingresso({ ID_evento, nomeUtilizador, idade, tipo });
      res.status(201).json({ mensagem: "Ingresso criado com sucesso", criado: novoIngresso });
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao criar ingresso", erro: erro.message });
  };
};

async function atualizarIngresso(req, res) {
    try {
        const { id } = req.params;
        const { ID_evento, nomeUtilizador, idade, tipo } = req.body;
      const ingressoAtualizado = await Ingresso.findByIdAndUpdate(
        id,
        { ID_evento, nomeUtilizador, idade, tipo },
        { new: true, runValidators: true },
      );
      if (ingressoAtualizado) {
        res.status(200).json({ mensagem: 'Ingresso atualizado com sucesso', atualizado: ingressoAtualizado });
      } else {
        res.status(404).json({ mensagem: 'Ingresso não encontrado' });
      };
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao atualizar ingresso', erro: erro.message });
    };
  };

  async function deletarIngresso(req, res) {
    const { id } = req.params;
    try {
      const ingressoDeletado = await Ingresso.findByIdAndDelete(id);
      if (ingressoDeletado) {
        res.status(200).json({ mensagem: "Ingresso deletado com sucesso", deletado: ingressoDeletado });
      } else {
        res.status(404).json({ mensagem: "Ingresso não encontrado" });
      };
    } catch (erro) {
      res.status(500).json({ mensagem: "Erro ao deletar ingresso", erro: erro.message });
    };
  };

  module.exports = {listarIngressos, criarIngresso, atualizarIngresso, deletarIngresso}
  
