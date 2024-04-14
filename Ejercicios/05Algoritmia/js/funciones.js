function problema1() {
    var inputText = document.getElementById('p1-input').value;
    var palabras = inputText.split(' ');
    palabras.reverse();
    var resultado = palabras.join(' ');
    document.getElementById('p1-output').textContent = resultado;
}

function problema2(){
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];

    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a, b){
        return b-a;
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    });

    v2 = v2.reverse();

    var p2_producto = 0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent = 'El producto escalar mínimo es de: ' + p2_producto;
}

function problema3() {
    var inputText = document.getElementById('p3-input').value;
    var palabras = inputText.split(',');
    var palabraMaxUnicos = '';
    var maxUnicos = 0;
    var caracteresMaxUnicos = '';

    palabras.forEach(function(palabra) {
        var caracteresUnicos = new Set();
        for (var i = 0; i < palabra.length; i++) {
            var letra = palabra[i];
            if (letra === letra.toUpperCase() && /^[A-Z]$/.test(letra)) {
                caracteresUnicos.add(letra);
            }
        }
        if (caracteresUnicos.size > maxUnicos) {
            maxUnicos = caracteresUnicos.size;
            palabraMaxUnicos = palabra.trim();
            caracteresMaxUnicos = [...caracteresUnicos].join(', ');
        }
    });

    document.getElementById('p3-output').textContent = 'La palabra con más caracteres únicos es: ' + palabraMaxUnicos + ' con ' + maxUnicos + ' caracteres únicos (' + caracteresMaxUnicos + ').';
}
