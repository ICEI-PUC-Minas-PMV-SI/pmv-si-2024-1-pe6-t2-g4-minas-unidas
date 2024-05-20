require('dotenv').config();
const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Conexão com o banco de dados Azure SQL estabelecida');
    return pool;
  })
  .catch(err => console.log('Erro ao conectar ao banco de dados', err));

module.exports = { sql, poolPromise, config };

