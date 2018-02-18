/*Egy kisvárosban megfigyelték, hogy a város lakosainak száma minden évben 3 %-kal nő. 
2017-ben a lakosok száma 10000. Számold ki, hogy ha ez a trend folytatódna, 
akkor mikorra érné el a lakosok száma a 20000-et. 
Jelenítsd meg a kapott évet egy felugró ablakban.*/



var lakos = 10000;
var ev = 2017

while (lakos <= 20000) {
    console.log();
    lakos *= 1.03;
    ev++
}