/*
Javascript es un lenguajes de programacion multiparadigma

Acepta programacion funcional, estructurada, POO, eventos.

Dentro JS no existe int, double, float, string, etc

Para el manejo de variables con el tipo de dato existe el standar ES6 el cual nos dice que para el manejo de variables tenemos :
VAR     LET     CONST
*/

//Vamos a hacer una funcion para comprobar que en el campo nombre sea mayor a 3 caracteres

function validar(formulario) {

    if(formulario.nombre.value.length<4){
        alert("Escribe mas de 3 caracteres en el nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var checkStr = formulario.nombre.value;
    alert(checkStr);

    var allValido = true;

    //Vamos a hacer un bucle mediante el cual primero obtenga la cadena del nombre y la separa en caracteres, una vez que tenga cada caracter debo de compararlo con la cadena que en este momento estoy considerando como la verdad 

    for(var i = 0; i < checkStr.length; i ++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j ++){
            if(caracteres == abcOK.charAt(j))break;

        }
    
    if(j == abcOK.length){
        allValido = false;
        break;
    }
}
    if(!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "1234567890";

    var checkStr = formulario.edad.value;
    alert(checkStr);

    var allValido = true;

    //Vamos a hacer un bucle mediante el cual primero obtenga la cadena del nombre y la separa en caracteres, una vez que tenga cada caracter debo de compararlo con la cadena que en este momento estoy considerando como la verdad 

    for(var i = 0; i < checkStr.length; i ++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j ++){
            if(caracteres == abcOK.charAt(j))break;

        }
    
    if(j == abcOK.length){
        allValido = false;
        break;
    }
}
    if(!allValido){
        alert("Escriba unicamente numero en el campo de edad");
        formulario.edad.focus();
        return false;
    }

}
