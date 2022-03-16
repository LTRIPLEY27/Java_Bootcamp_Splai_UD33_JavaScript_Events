function visualiza(img) {//LAS IMÁGENES SE PUEDEN PASAR CON SUS ATRIBUTOS EN JAVASCRIPT
    images = "img/foto" + img + ".jpg";//COMPONE LA IMAGEN EXACTA AGREGANDO CON STRINGS EL NUMERO
    document.images["foto"].src = images;
    let value = img - 1;
    let valu2 = document.images[value].alt;
    document.getElementById("nombre").innerHTML = valu2;
}


