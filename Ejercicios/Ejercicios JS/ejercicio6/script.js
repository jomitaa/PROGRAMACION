document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    document.getElementById('resultado').innerText = "La edad de la persona es: " + age + " años";
});
