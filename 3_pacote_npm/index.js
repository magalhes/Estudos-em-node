const CPF = require("cpf")


console.log(CPF.generate())
console.log(CPF.format("73397474191"))
console.log(CPF.isValid("73397474191"))

const fs = require("fs")

let cf = []
for(let i =0; i<=1000; i++){
    let cpfs = CPF.generate();
    cf.push(cpfs)
}


fs.writeFileSync("./cpfs.txt", cf.join("\n"))

const arquivoCpfs = fs.readFileSync("./cpfs.txt").toString().split("\n");
for (let cpf of arquivoCpfs){
    console.log(cpf)
}


