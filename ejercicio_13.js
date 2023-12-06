function sumaElementos(arr){
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i];
    }
    return resultado;
}

function sumaNumeros(arr){
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == 'number'){
            resultado += arr[i];
        } else {
            throw new Error('El elemento no es un número');
        }
    }
    return resultado;
}

const arr = [12, 2.5, "hola", true]

console.log(sumaElementos(arr))
console.log(sumaNumeros(arr))