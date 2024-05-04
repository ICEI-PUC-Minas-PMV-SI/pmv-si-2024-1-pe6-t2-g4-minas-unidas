const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sql, poolPromise } = require('./dbConfig');

// Import routes
const denunciasRoutes = require('./routes/denuncias');
const depoimentosRoutes = require('./routes/depoimentos');
const { router: usuariosRoutes, findOne } = require('./routes/usuarios');
const authenticationRoutes = require('./routes/authentication');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// CORS middleware
app.use(cors());

// Routes for Denuncias
app.use('/denuncias', denunciasRoutes);

// Routes for Depoimentos
app.use('/depoimentos', depoimentosRoutes);

// Routes for Users
app.use('/usuarios', usuariosRoutes);

// Authentication routes
app.use('/authentication', authenticationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
