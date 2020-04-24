//a aplicacao starta aqui
//aqui fara a chamada de rotas
//contera os metodos necessarios para a aplicação rodar como json, routes e express

const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());

app.use(routes);
app.listen(3333);