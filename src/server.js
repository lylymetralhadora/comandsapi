// importar pacote express
const express = require('express');
// instalar express na variavel app
const app = express();
// importar o pacote dotenv
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3333;

//testar servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`))