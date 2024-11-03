# API RESTful de Gerenciamento de Alunos

## Descrição

Este projeto é uma API RESTful construída com **Node.js** e **Express** para gerenciar a entidade **Aluno**. O propósito desta atividade é consolidar conceitos de HTTP, métodos REST e práticas de desenvolvimento de APIs, implementando todas as operações CRUD (Create, Read, Update, Delete).

A entidade **Aluno** contém os seguintes atributos:

- `id`: identificador único do aluno uuid
- `nome`: nome completo do aluno
- `email`: endereço de e-mail do aluno
- `nome_curso`: nome do curso em que o aluno está matriculado

## Tecnologias Utilizadas

- Node.js
- Express

## Arquitetura em Camadas

<u>**Seguindo a dica da tutora Flávia Correia**</u>  

O projeto utiliza uma **arquitetura em camadas** para manter responsabilidades bem definidas e facilitar a manutenção do código. Cada camada desempenha um papel específico:

- **Camada de Apresentação (Presentation Layer)**: Lida com a interação do usuário, recebendo e respondendo às requisições HTTP. No Express, essa camada é implementada nas rotas e controladores.

- **Camada de Serviços (Service Layer)**: Contém a lógica de negócio da aplicação, aplicando validações ou cálculos necessários antes de acessar os dados.

- **Camada de Repositório (Repository Layer)**: Abstrai o acesso ao banco de dados, fornecendo uma interface para ler, escrever, atualizar e excluir dados.

- **Camada de Dados (Data Layer)**: Onde os dados são armazenados, podendo ser um banco de dados ou uma fonte simulada, como um array de objetos.


## Instalação e Configuração

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/elcarvalhogoncalves/backend-restic36.git
    ```

2. **Instale as dependências**:
    ```bash
    cd backend-restic36
    npm install
    ```

3. **Inicie o servidor**:
    ```bash
    npm start
    ```

4. **Verifique**: 
Acesse `http://localhost:3000` para confirmar que o servidor está funcionando.

## Como Usar

Após iniciar o servidor, você pode interagir com a API usando ferramentas como **Postman** ou **Insomnia** para testar as rotas listadas abaixo.

## Rotas da API

| Método | Endpoint           | Descrição                                  |
|--------|---------------------|--------------------------------------------|
| GET    | `/alunos/list`     | Lista todos os alunos                      |
| GET    | `/alunos/:id`      | Retorna os dados de um aluno específico    |
| POST   | `/alunos/new`      | Cria um novo aluno                         |
| PUT    | `/alunos/:id`      | Atualiza os dados de um aluno específico   |
| DELETE | `/alunos/:id`      | Exclui um aluno específico                 |