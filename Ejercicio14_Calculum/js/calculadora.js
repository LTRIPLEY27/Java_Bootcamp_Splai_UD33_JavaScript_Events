// VARIABLES GLOBALES

const opciones = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'divide', 'raiz', 'multiplica', 'residuo', 'resta', 'potencia', 'punto', 'suma', 'equals', 'zero', 'negativo'];
var opcion, number, number2, resultado, values;
//const numbers = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'zero'];
const simbols = ['divide', 'raiz', 'multiplica', 'residuo', 'resta', 'potencia', 'punto', 'suma', 'equals', 'zero', 'negativo'];

function calculum(choice) {
    this.opcion = parseFloat(choice.value);
    document.getElementById('pantalla').value += this.opcion;
    number = document.getElementById('pantalla').value;  
    
    return number;
}


/**FUNCION PARA RESETEAR EL IMPUT */
function deleting() {
    document.getElementById('pantalla').value = '';
}

/**FUNCIÓN PARA REALIZAR DIVISION */

function opera(x){
    //alert(number);
    deleting();

    values = x.id;
    alert(values);
    switch(values) {
        case "divide" :
           number2 = segundoParametro();
           alert(number2);
           resultado = number /= number2;
        break;
        case "raiz" :
           // number2 = document.getElementById('pantalla').value;
           resultado = number = Math.sqrt(number);
           alert(number);
           alert(resultado);
        break;
        case "multiplica" :
            number2 = parseFloat(document.getElementById('pantalla').value);
            alert(number2);
            resultado = number *= number2;
        break;
        case "residuo" :
            number2 = parseFloat(document.getElementById('pantalla').value);
            resultado = number %= number2;
        break;
        case "resta" :
            number2 = parseFloat(document.getElementById('pantalla').value);
            resultado = number -= number2;
        break;
        case "potencia" :
            number2 = parseFloat(document.getElementById('pantalla').value);
            resultado = number = Math.pow(number, number2);
        break;
        case "suma" :
            number2 = parseFloat(document.getElementById('pantalla').value);
            resultado = number += number2;
        break;
        case "negativo" :
            //number2 = document.getElementById('pantalla').value;
            resultado = number -= number(number * 2);
        break;
        default:
            resultado = deleting();
        break;
    }
}

function segundoParametro(){
    let aux = document.getElementById('pantalla').value;
    let b = parseFloat(aux);

    return aux;
}

function equality(){
   // deleting();
    alert(resultado);
    document.getElementById('pantalla').value.id.value+= resultado;
}