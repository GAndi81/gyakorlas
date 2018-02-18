function calculate() {
    var amountInputbox = document.getElementById("osszeg");
    var amount = parseInt(amountInputbox.value);

    alert(`Az érték: ${amount*1.025**5}`);
}