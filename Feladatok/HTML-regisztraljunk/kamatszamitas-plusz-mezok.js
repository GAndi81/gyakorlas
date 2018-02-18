function calculate() {

    var osszegInputbox = document.getElementById("osszeg");
    var amount = parseInt(osszegInputbox.value);

    var evInputbox = document.getElementById("ev");
    var ev = parseInt(evInputbox.value);

    var kamatInputbox = document.getElementById("kamat");
    var kamat = 1 + parseInt(kamatInputbox.value) / 100;

    alert(`Az érték: ${amount*1.025**5}`);
}