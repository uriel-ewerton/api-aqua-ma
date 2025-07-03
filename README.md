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

1. Clone o repositório
```bash
git clone https://github.com/uriel-ewerton/api-aqua-ma.git
cd api-aqua-ma
