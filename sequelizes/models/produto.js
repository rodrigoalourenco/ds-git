const Sequelize = require('sequelize');
const database = require('../db');
const Fabricante = require('./fabricante');
const CategoriaProduto = require('./categoriaProduto');
const Categoria = require('./categoria');


const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.FLOAT,
    descricao: Sequelize.STRING,
});

// 1:1
Produto.belongsTo(Fabricante, {
    foreignKey: 'idFabricante',
    constraints: true
});

// 1:N
Fabricante.hasMany(Produto, {
    foreignKey: 'idFabricante',
    constraints: true
});

// N:M
Produto.belongsToMany(Categoria,{
    through: {
        model: CategoriaProduto,
    },
    foreignKey: 'idProduto',
    constraints: true
});

Categoria.belongsToMany(Produto,{
    through: {
        model: CategoriaProduto,
    },
    foreignKey: 'idCategoria',
    constraints: true
});

// Super Many-to-Many Relationship
Produto.hasMany(CategoriaProduto, { foreignKey: 'idProduto' });
CategoriaProduto.belongsTo(Produto, { foreignKey: 'idProduto' });
Categoria.hasMany(CategoriaProduto, { foreignKey: 'idCategoria' });
CategoriaProduto.belongsTo(Categoria, { foreignKey: 'idCategoria' });


module.exports = Produto;