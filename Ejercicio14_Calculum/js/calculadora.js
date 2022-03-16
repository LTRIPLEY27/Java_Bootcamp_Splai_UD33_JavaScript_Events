// VARIABLES GLOBALES
var opcion, number, number2, resultado, values, valor;

function calculum(choice) {
    let aux = choice.value;
    if(aux == ".") {
        document.getElementById('pantalla').value += "."
    } else {
        this.opcion = parseFloat(choice.value);
        document.getElementById('pantalla').value += this.opcion;
    }
    number = document.getElementById('pantalla').value;  
}

/**FUNCION PARA RESETEAR EL IMPUT */
function deleting() {
    document.getElementById('pantalla').value = '';
}

/**FUNCIÓN PARA REALIZAR DIVISION */

function operador(aux) {
    valor = number;//PRIMER VALORE ALMACENADO
    deleting();
    values = aux.id;
}


function opera(){
    switch(values) {
        case "divide" :
           resultado = valor / number;
        break;
        case "raiz" :
           resultado = Math.sqrt(valor);
        break;
        case "multiplica" :
            resultado = valor * number;
        break;
        case "residuo" :
            resultado = valor % number;
        break;
        case "resta" :
            resultado = valor - number;
        break;
        case "potencia" :
            resultado = Math.pow(valor, number);
        break;
        case "suma" :
            resultado = parseFloat(valor) + parseFloat(number);
        break;
        case "negativo" :
            resultado = (-valor);
        break;
        default:
            resultado = deleting();
        break;
    }
}
//FUNCIÓN QUE DISPARA EL RETORNO DEL RESULTADO
function equality(){
    opera();
    deleting();
    document.getElementById('pantalla').value+= resultado;
}