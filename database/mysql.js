const { configDotenv } = require('dotenv')
const Sequelize = require('sequelize')
configDotenv()

const Pass = process.env.PASS_MYSQL

const connection = new Sequelize('guiaperguntas', 'root', Pass,{
  host:'localhost',
  dialect:'mysql'
})

module.exports = connection