

function calcularPrecioConIva(precioSinIva){
    const porcentajeIva = 21;
    return precioSinIva * (porcentajeIva / 100) + precioSinIva;
}

console.log(calcularPrecioConIva(10));