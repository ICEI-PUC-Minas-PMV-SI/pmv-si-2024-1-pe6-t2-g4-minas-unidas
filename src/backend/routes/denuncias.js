const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../dbConfig');

// Rota para listar todas as denúncias
router.get('/', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Denuncias');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para buscar uma denúncia específica por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Denuncias WHERE id = @id');
        if (result.recordset.length === 0) {
            res.status(404).send('Denúncia não encontrada');
        } else {
            res.json(result.recordset[0]);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para criar uma nova denúncia
router.post('/', async (req, res) => {
    const { nome, data_nascimento, cidade, estado, email, telefone, tipoViolenciaId, descricao } = req.body;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nome', sql.NVarChar, nome)
            .input('data_nascimento', sql.Date, data_nascimento)
            .input('cidade', sql.NVarChar, cidade)
            .input('estado', sql.NVarChar, estado)
            .input('email', sql.NVarChar, email)
            .input('telefone', sql.NVarChar, telefone)
            .input('tipoViolenciaId', sql.Int, tipoViolenciaId)
            .input('descricao', sql.NVarChar, descricao)
            .query('INSERT INTO Denuncias (nome, data_nascimento, cidade, estado, email, telefone, tipoViolenciaId, descricao) VALUES (@nome, @data_nascimento, @cidade, @estado, @email, @telefone, @tipoViolenciaId, @descricao)');
        res.status(201).send('Denúncia criada com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para atualizar uma denúncia existente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, data_nascimento, cidade, estado, email, telefone, tipoViolenciaId, descricao } = req.body;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('nome', sql.NVarChar, nome)
            .input('data_nascimento', sql.Date, data_nascimento)
            .input('cidade', sql.NVarChar, cidade)
            .input('estado', sql.NVarChar, estado)
            .input('email', sql.NVarChar, email)
            .input('telefone', sql.NVarChar, telefone)
            .input('tipoViolenciaId', sql.Int, tipoViolenciaId)
            .input('descricao', sql.NVarChar, descricao)
            .query('UPDATE Denuncias SET nome = @nome, data_nascimento = @data_nascimento, cidade = @cidade, estado = @estado, email = @email, telefone = @telefone, tipoViolenciaId = @tipoViolenciaId, descricao = @descricao WHERE id = @id');
        res.send('Denúncia atualizada com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para excluir uma denúncia existente
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Denuncias WHERE id = @id');
        res.send('Denúncia excluída com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
