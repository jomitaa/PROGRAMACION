// vamos a crear

function validarn(e){
    var teclado = (document.all)?e.keycCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function interes(){
    var valor = document.getElementById("cantidadi").value
    var parseo = parseFloat(valor);
    var  interes = parseo*(0.037/12);
    var total = interes + parseo;

    document.getElementById("saldoi").value = "$" + total
}

function borrar(){
    document.getElementById("cantidadi").value = "";
    document.getElementById("saldoi").value = "";
}