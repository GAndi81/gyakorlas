/*Villanyszámla
Kérd be a villanyóra előző és jelenlegi állását. Ez alapján számítsd ki az aktuális havi számla összegét, ha egy egység 37.5 Ft. 
A villanyóra állása egy egész szám 0 és 9999 között. Amikor a villanyóra eléri a 9999-et átfordul és újraindul 0-ról. 
Ebben az esetben az előző állás nagyobb, mint az aktuális.
Jelenítsd meg az aktuális havi villanyszámla összegét, de ne felejtsd el előtte a 27% Áfa-t hozzáadni.*/


//BAsic 
/*
var elozoHavi = parseInt(prompt('Add meg az előző havi óraállást.'));
var mostani = parseInt(prompt('Add meg az előző havi óraállást.'));
var afa = 1.27;
var egysegar = 37.5;
var dij = afa * egysegar;

if (mostani - elozoHavi > 0) {
    dij = (mostani - elozoHavi) * afa * egysegar;

} else {

    dij = (mostani + 10000 - elozoHavi) * afa * egysegar;

}

alert(dij);
// if helyett összevonhatom egy függvénybe*/
//var a = almafa;
//globális változók - a függvényen kívül is elérhetők, a hatókörük globális//
/*
function calculate() {

    var elozoHavi = parseInt(document.querySelector('#ehavi').value);
    var mostani = parseInt(document.querySelector('#elozohavi').value);
    var error = document.querySelector('#error'); //tag eltárolása mindenestül
    error.innerHTML = '';

    var szamlaosszeg = document.querySelector('#szamlaosszeg');
    szamlaosszeg.innerHTML = '';

    var afa = 1.27;
    var egysegar = 37.5;
    var dij;

    //lokális változók//

    if (Number.isNaN(mostani) || Number.isNaN(elozoHavi)) {

        error.innerHTML = 'Nem számot adtál meg!';
    } else {
        dij = mostani - elozoHavi > 0 ? (mostani - elozoHavi) * afa * egysegar : (mostani + 10000 - elozoHavi);
        szamlaosszeg.innerHTML = `A fizetendő díj: ${dij}.`;
    }
}*/

// MÁS MÓDON:

/*Villanyszámla
Kérd be a villanyóra előző és jelenlegi állását. Ez alapján számítsd ki az aktuális havi számla összegét, ha egy egység 37.5 Ft. 
A villanyóra állása egy egész szám 0 és 9999 között. Amikor a villanyóra eléri a 9999-et átfordul és újraindul 0-ról. 
Ebben az esetben az előző állás nagyobb, mint az aktuális.
Jelenítsd meg az aktuális havi villanyszámla összegét, de ne felejtsd el előtte a 27% Áfa-t hozzáadni.*/

document.getElementById('szamolj').onclick = function () {
    var ehaviallas = parseInt(document.getElementById('ehavi').value);
    var elozohaviallas = parseInt(document.getElementById('elozohavi').value);

    var kulonbseg;

    if (elozohaviallas > ehaviallas) {
        kulonbseg = ehaviallas - elozohaviallas + 10000;
    } else {
        kulonbseg = ehaviallas - elozohaviallas;
    }

    var aktualisSzamla = (kulonbseg) * 37.5 * 1.27;
    document.getElementById('szamlaosszeg').innerHTML = aktualisSzamla;

    console.log(kulonbseg);
}