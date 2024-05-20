const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findOne } = require('./usuarios');

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the email exists in the database
        const user = await findOne(email);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.senha); // Assuming the hashed password is stored in the field 'senha'

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha incorreta.' });
        }

        // Generate authentication token
        const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' }); // Assuming the user id is stored in the field 'id'

        res.json({ token });
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).json({ message: 'Erro ao autenticar usuário.' });
    }
});

module.exports = router;
