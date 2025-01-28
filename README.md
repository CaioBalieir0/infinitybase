# To-Do List - Desafio Técnico Fullstack

Este é um projeto de lista de tarefas (To-Do List) desenvolvido com **React** , **TypeScript** e **MongoDB** . A aplicação é dividida em duas partes: o **frontend** , que é responsável pela interface do usuário, e o **backend** , que lida com as operações de dados e comunicação com o banco de dados MongoDB.

## Estrutura do Projeto

O projeto está dividido em duas pastas principais:

- `frontend`: Contém o código do cliente (interface do usuário) com **React** e **TypeScript** .
- `backend`: Contém o código do servidor com **Node.js** , **Express** e **MongoDB** para gerenciar as operações CRUD das tarefas.

## Funcionalidades

### 1. **Back-End**

- API para gerenciamento de tarefas.
- Armazenamento das tarefas no MongoDB.
- Funcionalidade de criação, edição, visualização e exclusão de tarefas.

### 2. **Front-End**

- Interface construída com **React** e **TypeScript** .
- Funcionalidades para criação, edição, visualização e exclusão de tarefas.
- Layout responsivo e intuitivo.
- Implementação de níveis de status (não iniciadas, concluidas e em andamento).
- Barra de busca para procurar tarefas por nome.
- Implementação de níveis de prioridade para as tarefas (baixa, média, alta).

## Tecnologias Utilizadas

- **Backend** : Node.js, Express, MongoDB, TypeScript, CORS
- **Frontend** : React, Next.js, Bootstrap, TypeScript

## Requisitos

Antes de começar, você precisa ter as seguintes dependências instaladas:

- **Node.js** (recomendado versão 14 ou superior)
- **npm** ou **yarn**
- **MongoDB** (localmente ou usando o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Instalação

### 1. **Clone o repositório**

Primeiro, clone o repositório para sua máquina local:

```
git clone https://github.com/CaioBalieir0/infinitybase.git
cd infinitybase
```

### 2. **Instale as dependências**

Instale as dependências na raíz do projeto:

```
npm install
```

Em seguida, instale separadamente as dependências do frontend e do backend:

- Para o **frontend** :

```
  cd frontend
  npm install
  cd ..
```

- Para o **backend** :

```
  cd backend
  npm install
  cd ..
```

Agora as dependências estarão instaladas nas respectivas pastas!

### 3. **Rodando o projeto**

Para rodar tanto o frontend quanto o backend com um único comando, use:

```
npm run dev
```

Esse comando irá iniciar os dois servidores simultaneamente:

- O frontend será executado no **Next.js** na porta `3000`.
- O backend será executado com **Node.js** na porta `5000`.

### 4. **Configuração do MongoDB**

Se deseja rodar o MongoDB localmente, siga essas instruções

#### Passo 1: Iniciar o MongoDB

#### **Windows:**

1. Abra o **Prompt de Comando** ou o **PowerShell** .
2. Navegue até a pasta onde o MongoDB foi instalado (geralmente em `C:\Program Files\MongoDB\Server\<sua-versão>\bin\`).
3. Execute o seguinte comando para iniciar o servidor MongoDB:
   ```
   mongod
   ```

#### Passo 2: Conectar-se ao MongoDB

Para verificar se o MongoDB está funcionando corretamente, você pode se conectar ao banco de dados usando o **Mongo Shell** :

1. Abra um novo terminal ou prompt de comando.
2. Execute o seguinte comando para abrir o Mongo Shell:
   ```
   mongo
   ```

Se deseja rodar o MongoDB Atlas,

Se estiver usando o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), configure a URL de conexão no arquivo `.env` na pasta `backend`:

```
MONGODB_URI=mongodb://<seu-usuario>:<sua-senha>@<endereço-do-mongo>:<porta>/<nome-do-banco>

```

## **5. Alterando a Porta do Frontend**

Por padrão, o frontend estará rodando na porta `3000`. Caso você precise alterar a porta em que o frontend será executado ou se a porta padrão estiver em uso, você pode configurar a variável `NEXT_PUBLIC_API_URL` no arquivo `.env` do **frontend** .

### Passos:

1. Navegue até a pasta `frontend` do projeto.
2. Abra o arquivo `.env` (se não existir, crie um novo arquivo com esse nome).
3. Adicione ou modifique a seguinte variável de ambiente para definir a URL da API:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api

   ```

   Aqui você pode alterar `localhost:5000` para a porta e URL que desejar para o backend.

4. Salve o arquivo e reinicie o servidor do frontend. Agora, o frontend utilizará a URL que você configurou para fazer as requisições para o backend.
