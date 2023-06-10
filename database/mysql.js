const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', 'longaoh123',{
  host:'localhost',
  dialect:'mysql'
})

module.exports = connection