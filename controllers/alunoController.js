const alunoService = require('../services/alunoService');

const listarAlunos = (req, res) => {
  const alunos = alunoService.listarAlunos();
  res.status(200).json(alunos);
};

const buscarAlunoId = (req, res) => {
    const aluno = alunoService.buscarAlunoId(req.params.id);
    if (aluno) {
        res.status(200).json(aluno);
    } else {
        res.status(404).json({ message: 'Aluno não encontrado' });
    }
};

const criarAluno = (req, res) => {
    try {
        const novoAluno = alunoService.criarAluno(req.body);
        res.status(201).json(novoAluno);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const atualizarAluno = (req, res) => {
    try {
        const aluno = alunoService.buscarAlunoId(req.params.id);
        if (aluno) {
          alunoService.atualizarAluno(req.params.id, req.body);
          res.status(200).json({ message: 'Aluno atualizado com sucesso' });
        } else {
          res.status(404).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

const deletarAluno = (req, res) => {
    try {
        const aluno = alunoService.buscarAlunoId(req.params.id);
        if (aluno) {
          alunoService.deletarAluno(req.params.id);
          res.status(200).json({ message: 'Aluno deletado com sucesso' });
        } else {
          res.status(404).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

module.exports = { listarAlunos, buscarAlunoId, criarAluno, atualizarAluno, deletarAluno };
