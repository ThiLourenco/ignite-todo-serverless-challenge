# Serverless - AWS Node.js Typescript

# 💻 Sobre o desafio

Nesse desafio você irá recriar uma parte da API de *todos* que foi desenvolvida no desafio [Conceitos do Node.js](https://www.notion.so/59ccb235aecd43a6a06bf09a24e7ede8) mas dessa vez deverá ser usado o framework [Serverless](https://www.serverless.com/).

Cada funcionalidade deverá ser criada em um arquivo de função separada de acordo com o que foi visto nesse último módulo.
As rotas que deverão existir são:

**POST -** `/todos/{userid}`

**GET-** `/todos/{userid}`

### Sobre as rotas

- **POST -** `/todos/{userid}`

    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: `title` e `deadline`, onde `deadline` é a data limite para o *todo*.

    O *todo* deverá ser salvo com os seguintes campos no DynamoDB:

    ```js
    { 
        id: 'uuid', // id gerado para garantir um único todo com o mesmo id
        user_id: 'uuid' // id do usuário recebido no pathParameters
        title: 'Nome da tarefa',
        done: false, // inicie sempre como false
        deadline: new Date(deadline)
    }
    ```

- **GET-** `/todos/{userid}`

    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (o mesmo id que foi usado para criar algum *todo*).

    A rota deve retornar os *todos* que possuírem o `user_id` igual ao `id` recebido pelos parâmetros.

## 💻 Instalando e executando o projeto

**1.** Clone este repositório 
```
git clone git@github.com:ThiLourenco/ignite-todo-serverless-challenge.git

``` 
**2.** Na raiz do projeto
```
cd ignite-challenge-serverless
``` 
**3.** Instale as dependências
```
yarn install
```
**4.** Instale e inicie o dynamoDB
```
yarn dynamodb:install
yarn dynamodb:start
```
**5.** Rodando a aplicação
```
yarn dev
```
