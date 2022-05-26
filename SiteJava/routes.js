import express from "express"

const rota = express.Router()

rota.get("/", function(requisicao, resposta) {
    resposta.render("index.pug")
})

rota.get("/perfil/:nome", function(requisicao, resposta) {
    const { nome } = requisicao.params
    resposta.render("perfil.pug")
})

rota.get("/publicar", function(requisicao,resposta){
    resposta.render("publicar.pug")
})

rota.post("/publicar", function(requisicao,resposta){
    
    const corpo = requisicao .body
    console.log(corpo)
    resposta.redirect("/")
})

export default rota