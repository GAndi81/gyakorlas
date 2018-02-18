function calculate() {

    var numElsoszam = document.getElementById("1-szam");
    var amountElsoszam = parseInt(numElsoszam.value);

    var operator = document.getElementById("muvelet").value;

    var numMasodikszam = document.getElementById("2-szam");
    var amountMasodikszam = parseInt(numMasodikszam.value)

    alert(eval(amountElsoszam + operator + amountMasodikszam));
}