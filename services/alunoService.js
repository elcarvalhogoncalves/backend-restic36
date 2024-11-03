const alunoRepository = require('../repositories/alunoRepository');
const { v4: uuidv4 } = require('uuid');

const listarAlunos = () => {
    return alunoRepository.getAllAlunos()
};
const buscarAlunoId = (id) => {
    return alunoRepository.getAlunoId(id);
};
const criarAluno = (dados) => {
    const novoAluno = { id: uuidv4(), ...dados };
    alunoRepository.createAluno(novoAluno);
    return novoAluno;
};
const atualizarAluno = (id, dadosAtualizados) => {
    return alunoRepository.updateAluno(id, dadosAtualizados);
};
const deletarAluno = (id) => {
    return alunoRepository.deleteAluno(id);
};

module.exports = { listarAlunos, buscarAlunoId, criarAluno, atualizarAluno, deletarAluno };
