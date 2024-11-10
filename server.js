const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: '5.161.195.81',
  user: 'root',
  password: 'MmoAaQnBOSbyPRdvexpVDZEF',
  database: 'sys',
  port: 3306,
});

// Permitir requisições de outros domínios
app.use(cors());

// Rota para obter a quantidade de números de telefone
app.get('/phone-count', (req, res) => {
  db.query('SELECT COUNT(*) AS phoneCount FROM phone_numbers', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao consultar o banco de dados.');
      return;
    }
    res.json(results[0]);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
