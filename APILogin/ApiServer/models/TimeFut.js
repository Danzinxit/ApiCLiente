// models/Menu.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const TimeFut = sequelize.define('TimeFut', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Pais: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Campeonato: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Titulos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Time;
