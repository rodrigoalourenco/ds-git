# CRUD NODEJS #

## ESTRUTURA

``` 
project/
├── config/
│   └── database.js
├── models/
│   └── User.js
├── controllers/
│   └── userController.js
├── routes/
│   └── userRoutes.js
├── app.js
├── .env
├── .gitignore
```

## Comandos

### Iniciando Projeto NodeJS

``` 
npm init -y 
```

### Instalação
```
npm install express sequelize mysql2 cors
npm install --save-dev nodemon dotenv

npm install swagger-ui-express swagger-jsdoc
npm install --save-dev sequelize-cli

npm install jsonwebtoken bcryptjs
```

### Migrations

```
npx sequelize-cli init
```

### Criando database

```
npx sequelize-cli db:create 
```

### Criando migration
```
npx sequelize-cli migration:generate --name create-clientes
npx sequelize-cli migration:generate --name client-add-column-telefone
```

### Executando as migration
``` npx sequelize-cli db:migrate ```

### Voltando versão
``` npx sequelize-cli db:migrate:undo ```

