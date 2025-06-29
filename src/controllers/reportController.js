const Report = require('../models/Report');

// Criar Relato
exports.createReport = async (req, res) => {
    const { description, severity, location, address, photoUrl } = req.body;
    try {
        const newReport = new Report({
            user: req.user.id, // ID vem do middleware de autenticação
            description,
            severity,
            location,
            address,
            photoUrl
        });
        const report = await newReport.save();
        res.status(201).json(report);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

// Listar todos os Relatos
exports.getReports = async (req, res) => {
    try {
        const reports = await Report.find().sort({ createdAt: -1 }).populate('user', 'name');
        res.json(reports);
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
};

// Obter Relato por ID
exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id).populate('user', 'name');
        if (!report) {
            return res.status(404).json({ msg: 'Relato não encontrado' });
        }
        res.json(report);
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
};

// Deletar Relato
exports.deleteReport = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ msg: 'Relato não encontrado' });
        }
        // Verifica se o usuário que está deletando é o dono do relato
        if (report.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Usuário não autorizado' });
        }
        await report.deleteOne();
        res.json({ msg: 'Relato removido' });
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
};