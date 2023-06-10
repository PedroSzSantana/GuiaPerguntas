const { Router } = require("express")
const RoutePages = Router()
const QuestionModel = require('../models/Questions')
const ResponseModel = require('../models/Answers')

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
RoutePages.get('/pergunta/:id',async(req,res)=>{
  try {
    const id = req.params.id
    const Question = await QuestionModel.findOne({
      where:{id:id}
    })
    const Answers = await ResponseModel.findAll({
      where:{questionId:id},
      order:[['id','ASC']]
    })
    if (Question != undefined) {
      res.render('Question',{ Question, Answers})
    }else{
      res.redirect('/')
    }
  } catch (error) {
    
  }
})
RoutePages.post("/responder",async(req,res)=>{
  try {
    console.log('Rota Resposta')
    const body = req.body.body
    const questionId = req.body.questionId
  
    await ResponseModel.create({body,questionId});
    console.log(body,questionId)
    res.redirect("/pergunta/"+questionId);
  } catch (error) {
    console.log(error)
  }
})
module.exports = RoutePages