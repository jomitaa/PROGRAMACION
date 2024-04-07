document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var sueldob = parseFloat(document.getElementById('sueldob').value);
    var v1 = parseFloat(document.getElementById('v1').value);
    var v2 = parseFloat(document.getElementById('v2').value);
    var v3 = parseFloat(document.getElementById('v3').value);
    var comision = 0.1;
    var venta1 = v1 * comision;
    var venta2 = v2 * comision;
    var venta3 = v3 * comision;
    var total = sueldob + venta1 + venta2 + venta3;
    document.getElementById('resultado').innerText = "Después de un mes, ganará $" + total;
});
