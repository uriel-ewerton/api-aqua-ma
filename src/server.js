require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Conectar ao Banco de Dados
connectDB();

const app = express();

// Middlewares essenciais
app.use(cors()); 
app.use(express.json()); 

// Rotas da API 
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));