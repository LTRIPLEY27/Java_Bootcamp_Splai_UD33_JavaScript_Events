function reloj() {
    let day = new Date();
    let hour = ("0" + day.getHours()).slice(-2);
    let minutes = ("0" + day.getMinutes()).slice(-2);
    let seconds = ("0" + day.getSeconds().toString()).slice(-2);

    document.getElementById('cuadro1').innerHTML = hour + ":";
    document.getElementById('cuadro2').innerHTML = minutes + ":";
    document.getElementById('cuadro3').innerHTML = seconds;
    
}

setInterval(reloj, 1000); //PARA ACTUALIZAR EL RELOJ DEBEMOS DE USAR EL MÉTODO DE LA CLASE DATE, SETINTERVAL, YA QUE CON EL MISMO ACTUALIZA EN TIEMPO RELA SEGUN EL INTERVALO QUE LE INDIQUEMOS