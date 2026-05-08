const Sequelize = require('sequelize');
const database = require('../db');

const Categoria = database.define('categoria', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Categoria;