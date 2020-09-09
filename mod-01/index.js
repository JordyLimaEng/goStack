const express = require('express');

const server = express();

server.use(express.json()) //especifica para o node que os bodys das req's serão recebido em json

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "nome": "Jordy", "email": "jordylima51@gmail.com"}

// CRUD => Create Read Update Delete

const users = ['Paulo', 'Rafael', 'Flávio']

//Create
server.post('/users', (req,res)=>{
  const  {name} = req.body
  users.push(name)
  return res.json(users)
})

//Read
server.get('/users', (req,res) => {
  return res.json(users)
})

// localhost:3000/teste
server.get('/users/:index', (req, res) => { //:id para especificar que é um route params
  
  const { index } = req.params //chaves aqui serve de desestruturação, já pega o id do params direto
  
  return res.json(users[index])
});

//Put
server.put('/users/:index', (req, res) =>{
  const { index } = req.params
  const { name } = req.body

  users[index] = name

  return res.json(users)
})

//Delete
server.delete('/users/:index',(req,res) => {
  const {index} = req.params
  users.splice(index,1)
  return res.send()
})

server.listen(3000); 