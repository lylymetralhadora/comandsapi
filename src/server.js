// importar pacote express
const express = require('express');
// instalar express na variavel app
const app = express();
// importar o pacote dotenv
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.get('/api', (request, response) => {
    response.send('retorno de informações do banco de dados');
});

app.post('/api/:id', (request, response) => {
    response.send('metodo utilizado para salvar informações')
});

app.put('/api/:id', (request, response) => {
    response.send('metodo utilizado para editar informações')
});

app.delete('/api/:id', (request, response) => {
    response.send('metodo utilizado para deletar informações')
});

//testar servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`))
