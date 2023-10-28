

function IMC(peso, altura){
    return peso / (altura * altura);
}




const usuario = {
    peso: 75,
    altura: 1.8,
    IMC: IMC(75, 1.8),
}

console.log(usuario)