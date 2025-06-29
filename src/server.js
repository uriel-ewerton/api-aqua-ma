require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

// Conectar ao Banco de Dados
connectDB();

const app = express();

// Middlewares essenciais
app.use(cors()); 
app.use(express.json()); 

// Rota de teste principal
app.get('/', (req, res) => {
  res.send('API AquaMA está no ar!');
});

// Rotas da API 
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));

// Rota da Documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));