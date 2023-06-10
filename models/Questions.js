const {DataTypes} = require('sequelize')
const connection = require('../database/mysql')

const Question = connection.define('questions',{
  titulo:{
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao:{
    type:DataTypes.TEXT,
    allowNull: false
  }
});

Question
.sync({force:false})
.then(()=>console.log('Tabela Criada'));

module.exports = Question