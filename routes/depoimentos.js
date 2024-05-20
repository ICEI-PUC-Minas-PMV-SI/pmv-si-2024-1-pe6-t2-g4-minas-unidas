const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../dbConfig');

// Rota para listar todos os depoimentos
router.get('/', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM depoimento');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para buscar um depoimento específico por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM depoimento WHERE id = @id');
        if (result.recordset.length === 0) {
            res.status(404).send('Depoimento não encontrado');
        } else {
            res.json(result.recordset[0]);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para criar um novo depoimento
router.post('/', async (req, res) => {
    const { descricao } = req.body;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('descricao', sql.NVarChar, descricao)
            .query('INSERT INTO depoimento (descricao) VALUES (@descricao)');
        res.status(201).send('Depoimento criado com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para atualizar um depoimento existente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('descricao', sql.NVarChar, descricao)
            .query('UPDATE depoimento SET descricao = @descricao WHERE id = @id');
        res.send('Depoimento atualizado com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para excluir um depoimento existente
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM depoimento WHERE id = @id');
        res.send('Depoimento excluído com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
