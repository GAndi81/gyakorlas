/*Jutalék
Az értékesítők 10% jutalékot kapnak, de csak abban az esetben, ha a havi eladás értéke legalább 1.000.000 Ft.
Számold ki, a jutalékot a bekért eladási összeg alapján és jelenítsd meg a kapott értéket egy felugró ablakban. */

// Kiveszem az értéket a buttonból


document.getElementById('eladas').onclick = function () {

    /*
    var doc = document;
    var element = document.getElementById('osszeg');
    var amount = element.value;
    amount = parseInt(amount);*/

    var amount = parseInt(document.getElementById('osszeg').value);

    if (amount >= 1000000) {
        document.getElementById('valasz').innerHTML = amount * 0.1;
    } else {
        document.getElementById('valasz').innerHTML = 'Nincs bónusz.';
    }
}