function calculate() {

    var kilometerInputbox = document.getElementById("kilometer");
    var amount = parseInt(kilometerInputbox.value);

    var uzemanyagInputbox = document.getElementById("uzemanyag");
    var uzemanyag = parseInt(uzemanyagInputbox.value);

    alert(`Az érték: ${amount/uzemanyag}`);
}