/*Jutalék plussz
Az értékesítők 10% jutalékot kapnak, ha a havi eladás értéke legalább 1.000.000 Ft. Különben, ha az eladás elértJe az 500.000 Ft-ot, 
akkor 5%. Azalatt nincs bónusz egyáltalán.
Számold ki, a jutalékot a bekért eladási összeg alapján és jelenítsd meg a kapott értéket egy felugró ablakban. */

document.getElementById('eladas').onclick = function () {
    var amount = parseInt(document.getElementById('osszeg').value);
    if (amount >= 1000000) {
        document.getElementById('valasz').innerHTML = amount * 0.1;
    } else if (amount >= 500000) {
        document.getElementById('valasz').innerHTML = amount * 0.05;
    } else {
        document.getElementById('valasz').innerHTML = 'Nincs bónusz';
    }
}