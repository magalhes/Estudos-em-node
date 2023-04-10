function celsius (f){
    return (f-32)/1.8
}

function fahrenheit(c){
    return c*1.8 + 32
}

module.exports = {celsius, fahrenheit}