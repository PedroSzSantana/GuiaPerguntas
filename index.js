const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/mysql');
const QuestionModel = require('./models/Questions')
app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

try {
  connection
  .authenticate()
  .then(()=> console.log('Conexão com o banco realizado com sucesso'))
 } catch (error) {
  console.log(error)
 }

app.get("/",async(req, res)=>{
  try {
    const Questions =  await QuestionModel.findAll({raw:true,order:[['id','DESC']]})
    res.render("index",{Questions})
    
  } catch (error) {
    console.log(error)
  }
})
app.get("/pergunta",(req, res)=>{
  res.render("perguntar")
});

app.post("/salvarpergunta",(req, res)=>{
  const titulo = req.body.titulo
  const descricao  = req.body.descricao
  try {
    QuestionModel.create({
      titulo,descricao
    })
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})
app.listen(3333,()=>console.log("Server is running"))