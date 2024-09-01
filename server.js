const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configuração do middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota para enviar a mensagem do formulário
app.post('/send-message', (req, res) => {
    console.log('Mensagem recebida:', req.body);
    res.json({ message: 'Mensagem enviada com sucesso!' });
});

// Início do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
