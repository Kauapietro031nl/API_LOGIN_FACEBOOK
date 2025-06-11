# 🔐 API de Login com Facebook

Este projeto é uma API REST que permite autenticar usuários utilizando o **Login com o Facebook**. Após o login, os dados básicos do usuário são salvos em um banco de dados **MySQL**.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Passport.js
- Passport-Facebook
- MySQL
- Sequelize

---

## ⚙️ Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

---

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/Kauapietro031nl/API_LOGIN_FACEBOOK.git

# Acesse a pasta do projeto
cd API_LOGIN_FACEBOOK

# Instale as dependências
npm install
🔧 Configuração do Facebook Login
Acesse o site Meta for Developers e crie um aplicativo.

No painel do app, vá até Configurações > Básico e copie o App ID e App Secret.

Ative o Facebook Login como produto do seu app.

Em "Configurações do Facebook Login", adicione a seguinte URL como URI de Redirecionamento OAuth Válido:

bash
Copiar
Editar
http://localhost:3000/auth/facebook/callback
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

env
Copiar
Editar
FACEBOOK_CLIENT_ID=SEU_APP_ID
FACEBOOK_CLIENT_SECRET=SEU_APP_SECRET
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/callback

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
🧪 Executando o Projeto
bash
Copiar
Editar
# Inicie o servidor
npm start
O servidor será iniciado em http://localhost:3000.

🔄 Rotas da API
👉 Login com Facebook
http
Copiar
Editar
GET /auth/facebook
Redireciona o usuário para autenticação com o Facebook.

🔁 Callback do Facebook
http
Copiar
Editar
GET /auth/facebook/callback
Rota de retorno após autenticação bem-sucedida. Salva o usuário no banco de dados.

🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
