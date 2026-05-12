const Sequelize = require('sequelize');

const Sequelise = new Sequelize(
    'sis_vendas',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
)

module.exports = Sequelise;