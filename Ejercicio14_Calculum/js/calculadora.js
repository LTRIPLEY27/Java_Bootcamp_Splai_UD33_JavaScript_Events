// VARIABLES GLOBALES

const opciones = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'divide', 'raiz', 'multiplica', 'residuo', 'resta', 'potencia', 'punto', 'suma', 'equals', 'zero', 'negativo'];
var opcion, number, number2, resultado, values, valor;
//const numbers = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'zero'];
const simbols = ['divide', 'raiz', 'multiplica', 'residuo', 'resta', 'potencia', 'punto', 'suma', 'equals', 'zero', 'negativo'];

function calculum(choice) {
    this.opcion = parseFloat(choice.value);
    document.getElementById('pantalla').value += this.opcion;
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
            resultado = (valor) + (number);
        break;
        case "negativo" :
            resultado = (-valor);
        break;
        default:
            resultado = deleting();
        break;
    }
}

function equality(){
    opera();
    deleting();
    document.getElementById('pantalla').value+= resultado;
}