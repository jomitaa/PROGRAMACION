document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    var h = parseFloat(document.getElementById('hombres').value);
    var m = parseFloat(document.getElementById('mujeres').value);
    var porcentaje_h = (h * 100)/( h + m );
    var porcentaje_m = (m * 100)/( h + m );

    document.getElementById('respuesta').innerText = "El Porcentaje de hombres es: %" + porcentaje_h.toFixed(2) + "  El porcentaje de Mujeres es: %" + porcentaje_m.toFixed(2);
});