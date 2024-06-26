const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../dbConfig');
const bcrypt = require('bcrypt');

// Rota para listar todos os usuários
async function findOne(email) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM usuario WHERE email = @email');
        return result.recordset[0];
    } catch (err) {
        throw new Error('Error fetching user from the database');
    }
}

// Route to list all users
router.get('/', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM usuario');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para buscar um usuário específico por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM usuario WHERE id = @id');
        if (result.recordset.length === 0) {
            res.status(404).send('Usuário não encontrado');
        } else {
            res.json(result.recordset[0]);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to create a new user
router.post('/', async (req, res) => {
    const { nome, email, senha, data_nascimento, cidade, estado, perfil_id } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(senha, 10); // Hash the password
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nome', sql.NVarChar, nome)
            .input('email', sql.NVarChar, email)
            .input('senha', sql.NVarChar, hashedPassword) // Use hashed password
            .input('data_nascimento', sql.Date, data_nascimento)
            .input('cidade', sql.NVarChar, cidade)
            .input('estado', sql.NVarChar, estado)
            .input('perfil_id', sql.Int, perfil_id)
            .query('INSERT INTO usuario (nome, email, senha, data_nascimento, cidade, estado, perfil_id) VALUES (@nome, @email, @senha, @data_nascimento, @cidade, @estado, @perfil_id)');
        res.status(201).send('Usuário criado com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para atualizar um usuário existente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, data_nascimento, cidade, estado, perfil_id } = req.body;
    try {
        const pool = await poolPromise;
        const hashedPassword = await bcrypt.hash(senha, 10); // Hash password
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('nome', sql.NVarChar, nome)
            .input('email', sql.NVarChar, email)
            .input('senha', sql.NVarChar, hashedPassword) // Save hashed password
            .input('data_nascimento', sql.Date, data_nascimento)
            .input('cidade', sql.NVarChar, cidade)
            .input('estado', sql.NVarChar, estado)
            .input('perfil_id', sql.Int, perfil_id)
            .query('UPDATE usuario SET nome = @nome, email = @email, senha = @senha, data_nascimento = @data_nascimento, cidade = @cidade, estado = @estado, perfil_id = @perfil_id WHERE id = @id');
        res.send('Usuário atualizado com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para excluir um usuário existente
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM usuario WHERE id = @id');
        res.send('Usuário excluído com sucesso!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = {
    router,
    findOne
};
