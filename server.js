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
app.use(express.static(path.join(__dirname, '/frontend')));

// Serve index.html quando a URL raiz é acessada
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '/frontend/pages/', 'index.html');
  res.sendFile(indexPath);
});

// Função para configurar as rotas dinâmicas das páginas
function setupPageRoutes(pages) {
  pages.forEach(page => {
    app.get(page.path, (req, res) => {
      const pagePath = path.join(__dirname, '/frontend/pages/', page.name);
      res.sendFile(pagePath);
    });
  });
}

// Definição das páginas e seus caminhos
const pages = [
  { name: 'index.html', path: '/index.html' },
  { name: 'cadastro-usuario.html', path: '/cadastro-usuario.html' },
  { name: 'dashboard-denuncias.html', path: '/dashboard-denuncias.html' },
  { name: 'dashboard-usuarios.html', path: '/dashboard-usuarios.html' },
  { name: 'denuncie-online.html', path: '/denuncie-online.html' },
  { name: 'denuncie-presencial.html', path: '/denuncie-presencial.html' },
  { name: 'denuncie.html', path: '/denuncie.html' },
  { name: 'depoimentos-cadastro.html', path: '/depoimentos-cadastro.html' },
  { name: 'depoimentos.html', path: '/depoimentos.html' },
  { name: 'legislacao.html', path: '/legislacao.html' },
  { name: 'login.html', path: '/login.html' },
  { name: 'quem-somos.html', path: '/quem-somos.html' },
  { name: 'questionario.html', path: '/questionario.html' },
  { name: 'redes-apoio.html', path: '/redes-apoio.html' }
];

// Chamada da função para configurar as rotas das páginas
setupPageRoutes(pages);

// Rotas
app.use('/denuncias', denunciasRoutes); // Rotas para denúncias
app.use('/depoimentos', depoimentosRoutes); // Rotas para depoimentos
app.use('/usuarios', usuariosRoutes); // Rotas para usuários
app.use('/authentication', authenticationRoutes); // Rotas para autenticação

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
