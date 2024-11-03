// /routes/alunoRoutes.js
const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/list', alunoController.listarAlunos);
router.get('/:id', alunoController.buscarAlunoId);
router.post('/new', alunoController.criarAluno);
router.put('/:id', alunoController.atualizarAluno);
router.delete('/:id', alunoController.deletarAluno);

module.exports = router;
