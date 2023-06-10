const { Router } = require("express")
const RoutePages = Router()
const QuestionModel = require('../models/Questions')
const ResponseModel = require('../models/Answers')

const ActionsRoutes = Router()

ActionsRoutes.post("/salvarpergunta",(req, res)=>{
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

ActionsRoutes.post("/responder",async(req,res)=>{
  try {
    const body = req.body.body
    const questionId = req.body.questionId
  
    await ResponseModel.create({body,questionId});
    console.log(body,questionId)
    res.redirect("/pergunta/"+questionId);
  } catch (error) {
    console.log(error)
  }
})
module.exports = ActionsRoutes