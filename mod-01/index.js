const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "nome": "Jordy", "email": "jordylima51@gmail.com"}

const users = ['Diego', 'Rafael', 'Flávio']

// localhost:3000/teste
server.get('/users/:index', (req, res) => { //:id para especificar que é um route params
  
  const { index } = req.params //chaves aqui serve de desestruturação, já pega o id do params direto
  
  return res.json(users[index])
});

server.listen(3000); 