const alunos = require('../models/alunoModel');

const getAllAlunos = () => {
    return alunos;
};
const getAlunoId = (id) => {
    return alunos.find(aluno => aluno.id === id);
};
const createAluno = (aluno) => {
    return alunos.push(aluno);
};
const updateAluno = (id, updatedAluno) => {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
        alunos[index] = { ...alunos[index], ...updatedAluno };
    };
};
const deleteAluno = (id) => {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
        alunos.splice(index, 1)
    };
};

module.exports = { getAllAlunos, getAlunoId, createAluno, updateAluno, deleteAluno };
