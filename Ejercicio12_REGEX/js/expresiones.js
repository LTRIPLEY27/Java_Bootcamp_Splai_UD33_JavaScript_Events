var fecha = prompt("Ingresa FECHA");
var validateDate;
var fechaOk = false;
var email = prompt("Ingresa CORREO");
var validateEmail = /^([.-]|\w)+@([.-]|\w)+(\.\w{2,3})+$/;
var emailOk = false;

var expre = /^\d{1,2}\/\d{1,2}\/\d{4}$/;//EXPRESIÓN REGULR QUE VALIDA EL FORMATO FECHA

function valida(fecha){
    if(fecha != null && fecha.match(expre)) {
        fechaOk = true;
    }
    return fechaOk;
}