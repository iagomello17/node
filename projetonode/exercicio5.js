
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo!</h1>');
});

app.get('/api/data', (req, res) => {
    res.json({
        nome: 'Seu Nome',
        profissao: 'Desenvolvedor',
        email: 'exemplo@dominio.com'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
