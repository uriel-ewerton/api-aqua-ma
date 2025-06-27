
# 🌊 AquaMA - API de Monitoramento de Alagamentos

API desenvolvida para apoiar o sistema **AquaMA**, que visa o monitoramento, prevenção e conscientização sobre alagamentos em São Luís/MA.

---

## 📁 Estrutura do Repositório

```
/src
├── controllers/    # Lógica das funcionalidades da API
├── routes/         # Definição das rotas/endpoints
├── models/         # Modelos de dados (ex: mongoose, sequelize)
├── middlewares/    # Autenticação, validações e tratamento de erros
└── config/         # Conexões e variáveis de ambiente
```

---

## 🛠️ a) Instruções de Instalação

### Pré-requisitos:
- Node.js instalado
- MongoDB ou outro banco de dados disponível
- Git

### Passos:

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/aquama-api.git
cd aquama-api
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz com as seguintes variáveis:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/aquama
JWT_SECRET=suaChaveSecretaAqui
```

---

## ▶️ b) Instruções para Execução Local

### Rodar o servidor:

```bash
npm run dev
```

> Isso iniciará o servidor em `http://localhost:3000`

---

## 📖 c) Documentação da API

### 🌐 Base URL:
```
http://localhost:3000/api
```

---

### 🔄 POST `/api/report`

> Cadastra um novo relatório de alagamento.

#### Requisição (JSON):
```json
{
  "bairro": "Anil",
  "descricao": "Alagamento na principal próximo à escola",
  "latitude": -2.53,
  "longitude": -44.30
}
```

#### Resposta:
```json
{
  "message": "Relatório enviado com sucesso."
}
```

---

### 📋 GET `/api/reports`

> Retorna todos os relatórios cadastrados.

#### Resposta:
```json
[
  {
    "bairro": "Anjo da Guarda",
    "descricao": "Rua tomada pela água",
    "latitude": -2.54,
    "longitude": -44.28,
    "createdAt": "2025-06-26T13:00:00Z"
  }
]
```

---

### ✅ (Opcional) GET `/api/status`

> Rota para testar se o servidor está online.

#### Resposta:
```json
{
  "status": "online"
}
```

---

### 🔐 (Se houver autenticação) POST `/api/auth/login`

> Gera token de acesso.

#### Body:
```json
{
  "email": "usuario@exemplo.com",
  "senha": "123456"
}
```
