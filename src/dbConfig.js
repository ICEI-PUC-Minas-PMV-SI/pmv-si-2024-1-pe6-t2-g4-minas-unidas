const sql = require('mssql');
const configData = require('./config.json');

const config = configData.dbConfig;

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Conexão com o banco de dados Azure SQL estabelecida');
    return pool;
  })
  .catch(err => console.log('Erro ao conectar ao banco de dados', err));

module.exports = { sql, poolPromise, config };
