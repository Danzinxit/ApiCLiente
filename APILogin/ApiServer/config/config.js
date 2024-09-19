// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Time', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
