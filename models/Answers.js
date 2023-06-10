const { DataTypes } = require('sequelize')
const connection = require('../database/mysql')

const Answers = connection.define('answers',{
  body:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  questionId:{
    type:DataTypes.DECIMAL,
    allowNull: false
  }
});

Answers
.sync({force:false})
.then(()=>console.log('Tabela Criada'));

module.exports = Answers