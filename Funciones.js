//Función: sumaTres
function sumaTres(x) {
    console.log(x + 3);
}

sumaTres(5);

//Formas de escribir una función

//Primero
function sumaTres(x) {
    return x + 3;
}

//Segundo
var sumaTres = function(x) {
    return x + 3;
}

//Tercero
var sumaTres = (x) => {
    return x + 3;
}