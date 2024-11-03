const express = require('express');
const app = express();
const alunoRoutes = require('./routes/alunoRoutes');

app.use(express.json());
app.use('/alunos', alunoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});