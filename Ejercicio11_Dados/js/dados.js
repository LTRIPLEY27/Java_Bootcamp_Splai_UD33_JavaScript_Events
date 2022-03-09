/** GLOBAL VARIABLES */

var dado1;
var dado2;
var total;
var sumaDados;

function calculum () {
    dado1 = parseInt((Math.random() * (6 - 1)) + 1);
    dado2 = parseInt((Math.random() * (6 - 1)) + 1);
    document.getElementById("dados").innerHTML+= "Los números del dado 1 son : " + dado1;
    document.getElementById("dados").innerHTML+= "Los números del dado 2 son : " + dado2;
    total = parseInt(dado1 + dado2);

    sumaDados += [total];
    document.getElementById("total").innerHTML+= "La suma es igual a" + sumaDados[total];
}

function sumaDado(){
    for(let i = 0; i < sumaDados; i++){
        document.getElementById("total").innerHTML+= "La suma es igual a" + sumaDados[i];
    }
}
