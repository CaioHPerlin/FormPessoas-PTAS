'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoa extends Model {
    static associate(models) {
    }
  }
  pessoa.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    altura: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pessoa',
  });
  return pessoa;
};