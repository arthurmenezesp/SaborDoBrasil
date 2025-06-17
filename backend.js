// Exemplo básico de backend Node.js lendo CSV
// Instale dependências: npm install express csv-parser
const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();

app.get('/api/publicacoes', (req, res) => {
  const results = [];
  fs.createReadStream('public/docs/publicacao.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json({ success: true, publicacoes: results });
    });
});

app.listen(3000, () => console.log('Backend rodando na porta 3000'));