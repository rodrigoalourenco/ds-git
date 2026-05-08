const Sequelize = require('sequelize');
const database = require('../db');

const CategoriaProduto = database.define('categoriaProduto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

module.exports = CategoriaProduto;