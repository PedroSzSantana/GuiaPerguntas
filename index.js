const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/mysql');
const RoutePages = require('./routes/routes')

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(RoutePages)

try {
  connection
  .authenticate()
  .then(()=> console.log('Conexão com o banco realizado com sucesso'))
 } catch (error) {
  console.log(error)
 }

app.listen(3333,()=>console.log("Server is running"))