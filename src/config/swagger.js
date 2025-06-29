const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API AquaMA',
        version: '1.0.0',
        description: 'Documentação da API para o projeto AquaMA, uma plataforma colaborativa para monitoramento de alagamentos.',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Servidor de Desenvolvimento',
        },
    ],
    // Define os 'modelos' de dados que a API utiliza
    components: {
        schemas: {
            UserRegister: {
                type: 'object',
                required: ['name', 'email', 'password'],
                properties: {
                    name: { type: 'string', example: 'João Silva' },
                    email: { type: 'string', format: 'email', example: 'joao@exemplo.com' },
                    password: { type: 'string', format: 'password', example: 'senha123' },
                },
            },
            UserLogin: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: { type: 'string', format: 'email', example: 'joao@exemplo.com' },
                    password: { type: 'string', format: 'password', example: 'senha123' },
                },
            },
            NewReport: {
                type: 'object',
                required: ['description', 'severity', 'location'],
                properties: {
                    description: { type: 'string', example: 'Rua completamente alagada perto da escola.' },
                    severity: { type: 'string', enum: ['low', 'medium', 'high', 'critical'], example: 'high' },
                    location: {
                        type: 'object',
                        properties: {
                            coordinates: {
                                type: 'array',
                                items: { type: 'number' },
                                example: [-44.3028, -2.5297]
                            }
                        }
                    },
                    address: { type: 'string', example: 'Rua das Flores, 123, Bairro Centro' },
                    photoUrl: { type: 'string', example: 'http://exemplo.com/foto.jpg' }
                }
            },
            Report: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    user: { type: 'object', properties: { _id: { type: 'string' }, name: { type: 'string' } } },
                    description: { type: 'string' },
                    severity: { type: 'string' },
                    location: { type: 'object' },
                    address: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                }
            }
        },
        // Define o esquema de segurança para o nosso token
        securitySchemes: {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'x-auth-token',
            },
        },
    },
};

const options = {
    swaggerDefinition,
    // Caminho para os ficheiros que contêm as anotações da API
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;