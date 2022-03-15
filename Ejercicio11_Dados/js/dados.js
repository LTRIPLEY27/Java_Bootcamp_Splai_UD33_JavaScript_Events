/** GLOBAL VARIABLES */

var dado1;
var dado2;
var sumaDados = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0]; //SOLO 11 POSIBLES SUMAS

function calculum() {
    dado1 = parseInt((Math.random() * (6 - 1)) + 1);
    dado2 = parseInt((Math.random() * (6 - 1)) + 1);
    document.getElementById("dados1").innerHTML+= "Los números del dado 1 son : " + dado1;
    document.getElementById("dados2").innerHTML+= "Los números del dado 2 son : " + dado2;
    total = dado1 + dado2;
    alert(total);
    document.getElementById("suma").innerHTML+= "La suma es igual a" + total;

    //LLAMADO AL MÉTODO DE VERIFICACIÓN DE LA REPETICIÓN DE SUMAS

    for(let i = 0; i < 36000; i++){
        switch(total) {
            case 2://CONTEO DE REPETICIÓN DE LAS SUMAS POR CADA CASE
                sumaDados[0]++; 
                break;
            case 3:
                sumaDados[1]++;
                break;
            case 4:
                sumaDados[2]++;
                break;
            case 5:
                sumaDados[3]++;
                break;
            case 6:
                sumaDados[4]++;
            break;
            case 7:
                sumaDados[5]++;
                break;
            case 8:
                sumaDados[6]++;
                break;
            case 9:
                sumaDados[7]++;
                break;
            case 10:
                sumaDados[8]++;
                break;
            case 11:
                sumaDados[9]++;
                break;
            case 12:
                sumaDados[10]++;
                break;    
        }
    }

    iterador = 2;
    //REPETICIONES DE CADA APARICION, EN CASO DE HACER NÚMEROS AL AZAR

    for(let i = 0; i < sumaDados.length; i++) {
        console.log("La suma de " + iterador +" se ha repetido " + sumaDados[i] + "veces");
        iterador++;
    }

}
