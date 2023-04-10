const http = require("http")
const cpf = require("cpf")


const host = "localhost";
const porta = 3000;

const os = require("os")

const servidor = http.createServer((requisicao, resposta)=>{
   console.log("Requisição ocorreu")
  //o que eu quero responder para quem fez a solicitação
   resposta.write("<h1>Informações do sistema</h1> ")
   resposta.write("<hr/>")
   resposta.write(`${os.hostname()} | ${os.platform()} | ${os.type()} `)
   resposta.write(`<p><b>${os.cpus().length}</b></p>`)
resposta.write(`${cpf.generate()}`)
   //Encerra a comunicação
    resposta.end();
})


//Servidor fica esperando requisições
servidor.listen(porta, host);