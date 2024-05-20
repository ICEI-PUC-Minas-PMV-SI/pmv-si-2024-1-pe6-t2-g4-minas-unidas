require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { sql, poolPromise } = require('./dbConfig');

// Importação das rotas
const denunciasRoutes = require('./routes/denuncias');
const depoimentosRoutes = require('./routes/depoimentos');
const { router: usuariosRoutes, findOne } = require('./routes/usuarios');
const authenticationRoutes = require('./routes/authentication');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para análise de corpos JSON
app.use(bodyParser.json());

// Middleware de CORS
app.use(cors());

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, './frontend')));

// Rotas
app.use('/denuncias', denunciasRoutes); // Rotas para denúncias
app.use('/depoimentos', depoimentosRoutes); // Rotas para depoimentos
app.use('/usuarios', usuariosRoutes); // Rotas para usuários
app.use('/authentication', authenticationRoutes); // Rotas para autenticação

// Rota para servir a página dashboard-usuarios.html
app.get('/dashboard-usuarios.html', (req, res) => {
  const filePath = path.join(__dirname, './frontend/pages/dashboard-usuarios.html');
  res.sendFile(filePath);
});

// Rota para servir a página dashboard-denuncias.html
app.get('/dashboard-denuncias.html', (req, res) => {
  const filePath = path.join(__dirname, './frontend/pages/dashboard-denuncias.html');
  res.sendFile(filePath);
});

// Rota para servir a página index.html na raiz do site
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, './frontend/index.html');
  res.sendFile(filePath);
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
