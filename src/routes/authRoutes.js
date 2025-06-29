const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Endpoints para registo e login de utilizadores
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registar um novo utilizador
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRegister'
 *     responses:
 *       '201':
 *         description: Utilizador registado com sucesso. Retorna um token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       '400':
 *         description: 'Erro na requisição (ex: email já existe)'
 *       '500':
 *         description: Erro no servidor
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Autenticar um utilizador
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       '200':
 *         description: Login bem-sucedido. Retorna um token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       '400':
 *         description: Credenciais inválidas
 *       '500':
 *         description: Erro no servidor
 */
router.post('/login', login);

module.exports = router;