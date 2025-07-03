# 🌊 AquaMA - API de Monitoramento de Alagamentos

API desenvolvida para apoiar o sistema **AquaMA**, uma plataforma educativa e colaborativa voltada para o monitoramento participativo e a conscientização sobre alagamentos em São Luís/MA.

---

## 📁 Estrutura do Repositório

/src
├── config/ # Conexão com o banco de dados
├── controllers/ # Lógica de negócio (cadastro, login, CRUD de relatos)
├── middlewares/ # Autenticação, validações e tratamento de erros
├── models/ # Schemas do banco de dados (Usuário, Relato)
├── routes/ # Definição dos endpoints da API
└── server.js # Arquivo principal que inicia o servidor

yaml
Copiar
Editar

---

## 🛠️ Instruções de Instalação

### Pré-requisitos:
- Node.js instalado
- MongoDB (local ou Atlas)
- Git

### Passos:

1. Clone o repositório:
```bash
git clone https://github.com/uriel-ewerton/api-aqua-ma.git
cd api-aqua-ma
Instale as dependências:

bash
Copiar
Editar
npm install
Crie um arquivo .env na raiz com o seguinte conteúdo:

env
Copiar
Editar
PORT=3000
MONGO_URI=mongodb://localhost:27017/aquama
JWT_SECRET=suaChaveSecretaAqui
▶️ Execução Local
Para rodar o servidor em modo de desenvolvimento:

bash
Copiar
Editar
npm run dev
Acesse: http://localhost:3000

📄 Execução em Produção
bash
Copiar
Editar
npm install
node src/server.js
🌐 Base URL
bash
Copiar
Editar
http://localhost:3000/api
📖 Endpoints da API
🧑‍💻 Autenticação
🔐 POST /api/auth/register
Cadastra um novo usuário.

Body:
json
Copiar
Editar
{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "password": "123456"
}
🔐 POST /api/auth/login
Autentica o usuário e retorna um token JWT.

Body:
json
Copiar
Editar
{
  "email": "joao@exemplo.com",
  "password": "123456"
}
Resposta:
json
Copiar
Editar
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
}
📌 Relatos de Alagamento
✅ POST /api/reports (Privado - requer token JWT)
Cria um novo relato de alagamento.

Body:
json
Copiar
Editar
{
  "descricao": "Rua completamente alagada após a chuva",
  "severity": "high",
  "location": {
    "type": "Point",
    "coordinates": [-44.30, -2.53]
  }
}
Resposta:
json
Copiar
Editar
{
  "message": "Relatório enviado com sucesso."
}
📋 GET /api/reports
Retorna todos os relatos cadastrados.

🔎 GET /api/reports/:id
Retorna um relato específico pelo ID.

🗑️ DELETE /api/reports/:id (Privado - apenas o autor pode remover)
Remove um relato do banco de dados.

🧪 GET /api/status
Verifica se o servidor está online.

Resposta:
json
Copiar
Editar
{
  "status": "online"
}
🧩 Modelos de Dados
User
js
Copiar
Editar
{
  name: String,
  email: String (único),
  password: String (criptografada com bcryptjs)
}
Report
js
Copiar
Editar
{
  user: ObjectId (referência ao autor),
  description: String,
  severity: String ('low', 'medium', 'high', 'critical'),
  location: {
    type: "Point",
    coordinates: [longitude, latitude]
  },
  createdAt: Date
}
📘 Documentação Interativa (Swagger)
Você pode visualizar todos os endpoints de forma interativa em:

Local: http://localhost:5000/api-docs

Produção (Render): https://<seu-servico>.onrender.com/api-docs

🚀 Tecnologias Utilizadas
Node.js

Express

MongoDB + Mongoose

JWT (JSON Web Tokens)

bcryptjs (criptografia de senhas)

dotenv (variáveis de ambiente)

Swagger UI Express (documentação interativa)

📄 Licença
Este projeto está licenciado sob a licença MIT.
Feito com 💙 para o programa Trilhas Inova Maranhão.

yaml
Copiar
Editar
