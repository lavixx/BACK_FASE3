const express = require('express');
const path = require('path');
const app = express();

// Arquivos estáticos (CSS)
app.use(express.static('public'));

// Middleware obrigatório
app.use((req, res, next) => {
    console.log("Rota acessada:", req.url);
    next();
});

// ROTAS

// Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Aluno 1 (Dafny)
app.get('/aluno1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about_dafy.html'));
});

// Aluno 2 (Lavinia)
app.get('/aluno2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about_lavi.html'));
});

// Página de erro
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'erro.html'));
});

// Servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});