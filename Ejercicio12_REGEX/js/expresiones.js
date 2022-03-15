var fecha = prompt("Ingresa FECHA");
var fechaOk = false;
var email = prompt("Ingresa CORREO");
var validateEmail = /^([.-]|\w)+@([.-]|\w)+(\.\w{2,3})+$/;
var emailOk = false;
var name = prompt("Ingresa APELLIDO");
var reverse = /(\w+)\s(\w+)/; //EXPRESIÓN QUE REVIERTE EL NOMBRE
var tagsDelete = /<script>(\S)*<\/script>/;

var expre = /^\d{1,2}\/\d{1,2}\/\d{4}$/;//EXPRESIÓN REGULR QUE VALIDA EL FORMATO FECHA

//FUNCIÓN PARA VALIDAR FECHA CON FORMATO
function validaFecha(fecha){
    if(fecha != null && fecha.match(expre)) {
        fechaOk = true;
    }
    return fechaOk;
}
//FUNCIÓN PARA VALIDAR CORREO CON FORMATO
function validaEmail(email){
    if(email != null && email.match(validateEmail)) {
        emailOk = true;
    }
    return emailOk;
}

//FUNCIÓN REESCRITA

function escapeHTML(text) {

    //VERSIÓN ORIGINAL
   /* var replacements = [["&", "&amp;"], ["\"", "&quot;"],
                        ["<", "&lt;"], [">", "&gt;"]];
    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);
    });

    return text;*/

    var revision = {
        '<': "&lt;", //CONVERSIÓN DE IGUALDAD MEDIANTE UN JSON, LUEGO AL RECORRERLO NOS TORNARÁ EL VALOR
        '>': "&gt;",
        '&': "&amp;",
        '"': "&quot;",
    };

    text.replace(/[<>&"]/g, function(x) {
        return revision[x];
    });

    return text;
}

//FUNCION APELLIDO REVERSO

function reverseCognom(name) {
    let nombreReves = name.replace(reverse, "$2, $1");
    return nombreReves;
}

//FUNCIÓN ELIMINA ETIQUETAS

function etiquetas(etiqueta) {
    return etiqueta.replace(tagsDelete, "");
}

//VERIFICACIÓN POR CONSOLA DE LAS FUNCIONES

console.log(validaFecha(fecha));
console.log(validaEmail(email));
console.log(reverseCognom(name));

document.getElementById('response1').innerHTML += "Fecha válida? " + validaFecha(fecha);
document.getElementById('response2').innerHTML += "Correo válido? " + validaEmail(email);
document.getElementById('response3').innerHTML += "Nombre inverso =  " +reverseCognom(name);