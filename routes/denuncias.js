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
    const { tipoViolenciaId, descricao } = req.body; // Modifique para tipoViolenciaId
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('tipoViolenciaId', sql.Int, tipoViolenciaId) // Modifique para tipoViolenciaId
            .input('descricao', sql.NVarChar, descricao)
            .query('INSERT INTO Denuncias (tipoviolenciaid, descricao) VALUES (@tipoViolenciaId, @descricao)'); // Modifique para tipoviolenciaid
        res.status(201).send('Denúncia criada com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para atualizar uma denúncia existente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { tipoViolenciaId, descricao } = req.body; // Modifique para tipoViolenciaId
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('tipoViolenciaId', sql.Int, tipoViolenciaId) // Modifique para tipoViolenciaId
            .input('descricao', sql.NVarChar, descricao)
            .query('UPDATE Denuncias SET tipoviolenciaid = @tipoViolenciaId, descricao = @descricao WHERE id = @id'); // Modifique para tipoviolenciaid
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
