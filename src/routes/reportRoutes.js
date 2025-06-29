const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createReport, getReports, getReportById, deleteReport } = require('../controllers/reportController');

/**
 * @swagger
 * tags:
 *   name: Relatos
 *   description: API para gerir os relatos de alagamento
 */

/**
 * @swagger
 * /api/reports:
 *   get:
 *     summary: Listar todos os relatos
 *     tags: [Relatos]
 *     responses:
 *       '200':
 *         description: Lista de relatos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Report'
 *       '500':
 *         description: Erro no servidor
 *   post:
 *     summary: Criar um novo relato de alagamento
 *     tags: [Relatos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewReport'
 *     responses:
 *       '201':
 *         description: Relato criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       '401':
 *         description: Não autorizado (token inválido ou não fornecido)
 *       '500':
 *         description: Erro no servidor
 */
router.route('/')
  .get(getReports)
  .post(authMiddleware, createReport);

/**
 * @swagger
 * /api/reports/{id}:
 *   get:
 *     summary: Obter um relato específico por ID
 *     tags: [Relatos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do relato
 *     responses:
 *       '200':
 *         description: Dados do relato
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       '404':
 *         description: Relato não encontrado
 *       '500':
 *         description: Erro no servidor
 *   delete:
 *     summary: Apagar um relato
 *     tags: [Relatos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do relato a ser apagado
 *     responses:
 *       '200':
 *         description: Relato apagado com sucesso
 *       '401':
 *         description: Não autorizado
 *       '404':
 *         description: Relato não encontrado
 *       '500':
 *         description: Erro no servidor
 */
router.route('/:id')
  .get(getReportById)
  .delete(authMiddleware, deleteReport);

module.exports = router;