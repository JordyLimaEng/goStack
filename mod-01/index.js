const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "nome": "Jordy", "email": "jordylima51@gmail.com"}


// localhost:3000/teste
server.get('/users/:id', (req, res) => { //:id para especificar que é um route params
  //console.log("TESTE")
  //return res.send('Fala Mundo');
  // return res.json({message:'Fala Mundo'})

  const { id } = req.params //chaves aqui serve de desestruturação, já pega o id do params direto

  const nome = req.query.nome
  return res.json({message: `Buscando usuario ${id}`})
});

server.listen(3000); 