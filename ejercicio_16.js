function capitalize(str) {
    let caracteres = str.split('');
    caracteres[0] = caracteres[0].toUpperCase();
    return caracteres.join('');
}

function capitalizeBonito(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.time('capitalize')
console.log(capitalize('lorem ipsum'))
console.timeEnd('capitalize')

console.time('capitalizeBonito')
console.log(capitalizeBonito('lorem ipsum'))
console.timeEnd('capitalizeBonito')