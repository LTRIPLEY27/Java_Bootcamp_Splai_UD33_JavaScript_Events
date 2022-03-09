function calculum () {
    var dado1 = parseInt((Math.random() * (6 - 1)) + 1);
    var dado2 = parseInt((Math.random() * (6 - 1)) + 1);

    document.getElementById("dados").innerHTML+= "Los números del dado 1 son : " + dado1;
    document.getElementById("dados").innerHTML+= "Los números del dado 2 son : " + dado2;
}