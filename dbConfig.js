const sql = require('mssql');
const dotenv = require('dotenv');
dotenv.config();

const user = process.env.DATUSR;
const password = process.env.DATPSW;

const config = {
  user,
  password,
  server: "minas-unidas-db-server.database.windows.net",
  database: "MinasUnidasDB",
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

//const sql = require('mssql');
//const configData = require('../config.json');

//const config = configData.dbConfig;

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Conexão com o banco de dados Azure SQL estabelecida');
    return pool;
  })
  .catch(err => console.log('Erro ao conectar ao banco de dados', err));

module.exports = { sql, poolPromise, config };
