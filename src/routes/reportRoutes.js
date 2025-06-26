const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createReport, getReports, getReportById, deleteReport } = require('../controllers/reportController');

// @route   POST api/reports
// @desc    Criar um novo relato
// @access  Privado
router.post('/', authMiddleware, createReport);

// @route   GET api/reports
// @desc    Listar todos os relatos
// @access  Público
router.get('/', getReports);

// @route   GET api/reports/:id
// @desc    Buscar um relato por ID
// @access  Público
router.get('/:id', getReportById);

// @route   DELETE api/reports/:id
// @desc    Deletar um relato
// @access  Privado
router.delete('/:id', authMiddleware, deleteReport);

module.exports = router;