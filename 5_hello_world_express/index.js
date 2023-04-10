const express = require("express")
//Define uma aplicação backend em Express
const app = express()


app.get("/",(requisicao,resposta)=>{
    resposta.send("Hello, World")
} )

app.listen(3000)