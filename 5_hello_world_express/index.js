const express = require("express")
const fs = require("fs")
const CPF = require('cpf');
const { CANCELLED } = require("dns");


//Define uma aplicação backend em Express
const app = express()


app.get("/",(requisicao,resposta)=>{
    resposta.send("<h1>Hello oi World</h1>")
   
} )

app.get("/teste", (req, res) =>{
 // req = objeto com dados do cliente/solicitante
  // res = objeto com dados p/ resposta do servidor
    res.send("<p>Uma me chama de bom amaente a outra me chama de bom marido</p>")
    console.log(req)
})


app.get("/inicio", (req,res) =>{
    const arquivo = fs.readFileSync("./inicio.html")
    res.send(arquivo.toString())
})

app.get("/ajuda", (req,res)=>{
    const arquivo = fs.readFileSync("./ajuda.html")
    res.send(arquivo.toString())
})

app.get("/funcionarios/:cpf", (req,res) =>{
    console.log(req.params.cpf)
    // const cpf = req.params.cpf
    const {cpf} = req.params;
   
   if(CPF.isValid(cpf)){
    res.status(200).send( `O cpf é valido`)
   
   } else{
    res.status(400).send(`O cpf não e valido`)
   
   } 
    
})
app.get("/cpfs/:numero", (req, res) => {
    const numero = Number(req.params.numero);
  
    for (let i = 0; i < numero; i++) {
      res.write(`<p>${CPF.generate()}</p>`);
    }
    res.end();
  });
app.get("/imc/:peso/:altura",(req,res) =>{
    const pe = parseFloat(req.params.peso);
    const al = parseFloat(req.params.altura);
    const imc = peso / (altura * altura)
    res.send(`O valor do imc é ${imc.toFixed(2)})}`)
})

app.get("/youtube", (req,res) =>{
    console.log(req.query)
    const {canal, video,r} = req.query
    res.send(`Canal: ${canal}. Video: ${video} . Res: ${r}`)
})

app.get("/mensagem", (req,res)=>{
   console.log(req.query)
    const {men} = req.query
    if(men){
        res.status(200).send(`Mensagem: ${men}`)
    }else{
        res.sendStatus(400)
    }
})

app.get("/rota", (req,res) =>{
    const num1 =Number(req.query.num1) 
    const num2 =Number(req.query.num2) 
    const soma = num1 + num2
    if(soma){
        res.status(200).send(`Mensagem: ${soma}`)
    }else{
        res.sendStatus(400)
    }
})

app.get("/boasvindas", (req,res)=>{
    const {lang} = req.query;

    if (lang === "pt"){
        res.send("bem vindo")
    }else if (lang === "en"){
        res.send("Welcome")
    }else{
        res.status(400).send ("Idioma não suportado")
    }
})




const usuarios = require("./usuarios");

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});
app.get("/usuarios/:index", (req, res) => {
  const index = Number(req.params.index);
  const usuarioEncontrado = usuarios[index];

  // Tratar a ausência do usuário
  if (usuarioEncontrado) {
    res.json(usuarioEncontrado);
  } else {
    // Not Found = 404
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});
app.listen(3000 , () =>{

    console.log("Servidor rodando em http://localhost:3000/ ")
})