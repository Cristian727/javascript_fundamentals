function contarLife(cadena) {
    let contador = 0;
    const palabras = cadena.split(' ');
    for(let i = 0; i < palabras.length; i++) {
        if(palabras[i].toLowerCase() === 'life') {
            contador++;
        }
    }
    return contador;
}