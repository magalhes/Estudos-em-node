// Core modules = modulos embutidos

//Modulo operational system (os)

 const os = require("os")

// console.log(os.arch())
// console.log(os.platform())
// console.log(os.type())
// console.log(os.version())
// console.log(os.uptime())
// console.log(os.freemem())
// console.log(os.cpus().length)
// console.log(os.totalmem())
// console.log(os.hostname())
// console.log(os.userInfo())

//Modulo fs = filesystem

const fs = require("fs");

// fs.writeFileSync("./batata.txt", "Batata e bom demais")
// const arquivo = fs.readFileSync("./batata.txt")
// console.log(arquivo.toString())



fs.writeFileSync("./info.txt" , os.arch() + " "+ os.type + " " +os.cpus().length + os.freemem()+ " " + os.userInfo())
const arq = fs.readFileSync("./info.txt")
console.log(arq.toString())