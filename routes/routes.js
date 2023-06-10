const { Router } = require("express")
const RoutePages = Router()
const QuestionModel = require('../models/Questions')


RoutePages.get("/",async(req, res)=>{
  try {
    const Questions =  await QuestionModel.findAll({raw:true,order:[['id','DESC']]})
    res.render("index",{Questions})
  } catch (error) {
    console.log(error)
  }
})

RoutePages.get("/pergunta",(req, res)=>{
  res.render("perguntar")
});

RoutePages.post("/salvarpergunta",(req, res)=>{
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

module.exports = RoutePages