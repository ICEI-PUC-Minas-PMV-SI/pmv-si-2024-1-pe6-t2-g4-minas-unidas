const express = require('express');
const bodyParser = require('body-parser');
const { sql, poolPromise } = require('./dbConfig');
const cors = require('cors'); // Importa o pacote cors

// Importa as rotas
const denunciasRoutes = require('./routes/denuncias');
const depoimentosRoutes = require('./routes/depoimentos');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const port = 3000;

// Middleware para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Middleware CORS
app.use(cors());

// Rotas para Denúncias
app.use('/denuncias', denunciasRoutes);

// Rotas para Depoimentos
app.use('/depoimentos', depoimentosRoutes);

// Rotas para Usuários
app.use('/usuarios', usuariosRoutes);

app.listen(port, () => {
    console.log(`Servidor Minas Unidas rodando em http://localhost:${port}`);
});
