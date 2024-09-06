const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Adicionar o middleware CORS

// Configuração do banco de dados usando variáveis de ambiente
const db = mysql.createConnection({
  host: process.env.DB_HOST,     // Usando variável de ambiente para o host
  user: process.env.DB_USER,     // Usando variável de ambiente para o usuário
  password: process.env.DB_PASSWORD, // Usando variável de ambiente para a senha
  database: process.env.DB_NAME, // Usando variável de ambiente para o nome do banco de dados
});

// Conectar ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para receber os dados do formulário
app.post('/enviar-contato', (req, res) => {
  const { nome, email, mensagem } = req.body;

  const query = 'INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)';
  db.query(query, [nome, email, mensagem], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).json({ error: 'Erro ao enviar a mensagem.' });
      return;
    }
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
