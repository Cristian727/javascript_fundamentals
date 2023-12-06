function atontador(string){
    let new_string = ""

for(let i = 0; i < string.length; i++){
    if(i%2 === 0){
        new_string += string.charAt(i).toUpperCase()
    } else{
        new_string += string.charAt(i).toLowerCase()
    }
}
return new_string
}


function atontador(string) {
let new_string = ""
let index = 0
for (const caracter of string){
new_string += index % 2 ? string.charAt(index).toUpperCase() : string.charAt(index).toLowerCase()
index++; 
}
return new_string
}