# Documentação da API

* Escolher local do computador para criar a pasta do proejto
* Abrir o gitbash nesta pasta

Criar a pasta
```
mkdir NOME_PROJETO
```
Acessar a pasta do projeto
```
cd NOME_PROJETO
```
Abrir a pasta no VSCode
```
code .
```
Iniciar o gerenciador de pacotes Node
```
npm init -y
```
Criar arquivo .gitignore: arquivos e pastas que não vão para o git
```
touch .gitignore
```
Criar arquivo .env: armazena variáveis do ambiente
```
touch .env
```
Instalar pacotes da API
```
npm i express nodemon dotenv
```

* express : será o servidor da api
* nodemon : atualizar os arquivos alterados sem parar o servidor
* dotenv : gerenciador de variáveis ambiente

Informar arquivos e pastas no .gitignore
```
node_modules
.env
```
Criar pasta src para estrutura do projeto
```
mkdir src
```
Criar arquivo server .js na pasta src
```
touch src/server.js
```

// importar pacote express
const express = require('express');
// instalar express na variavel app
const app = express();
// importar o pacote dotenv
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3333;

//testar servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`))

Criar comando para rodar o servidor
```
"start":"nodemon src/server.js"
```

Rodar o comando no terminal
```
npm run start
```