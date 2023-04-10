function calcularImc(peso,altura){
    return  peso/ (altura*altura)
}


function statusImc(total){
   
    if(total < 18.4){
      return  "abaixo do peso normal"
    }else if (total >18.5 && total <24.9){
        return"Peso normal"
    }else if (total >25.0 && total <29.9 ){
       return"Excesso de peso"

    }else if (total >30.0 && total <34.9){
        return"Obesidade Classe 1"
    }else if(total >35.0 && total <39.9){
        return"Obesidade classe 2"
    }else{
        return"obesidade classe 3"
    }
}

module.exports = {calcularImc, statusImc};