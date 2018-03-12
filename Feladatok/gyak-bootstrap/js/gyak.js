// ezentúl ezzel írjunk mindent strict mode-ban

"use strict";
let customVariable = 10;

function custom() {
    let customVariable = 20;
    console.log(customVariable);

};
custom();
console.log(customVariable);


// temporary dead zone - let-el a függvény elején hozzuk létre a különböző változókat
// egyik a let és a var közötti különbség - lokális/globális változókat hová definiálom
// let - block hatókörű és block szintű változó
// var - függvény hatókörű
// hoisting van , de nincs értékadás!!!! let-nél felemeli, de nem ad neki értéket

{
    let blockScope = 'block scope';
    console.log(blockScope); // ez csak itt érvényes és működik egy saját különálló block részlet, kívül nem menne
}


// ilyet nem lehet tenni let-el, nem működik - egy blockon belül vagyunk ( switch case) , olyan , mintha kétszer akarnám létrehozni ezt a változót
switch (customVariable) {
    case 5:
        let value = 5;
        break;
    case 10:
        let value = 10;
        break; // ha nem teszem ki a break-et, mert akkor minden lefut utána
    default:
        alert('Hiba!');
}

var a = 10;
var a = 20;
// ez strict mode nélkül simán lefut, de így nem
// let-el nem tehetünk ilyet - kétszer nem dekraláhatunk változót let-el

// let for cikluson belül használjuk
let i;
for (i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// ez globális lett, hiszen kívül hoztam létre
//


for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// így már más az eredmény ----
// minden egyes loop esetében az i-t újra létrehozom, mert a for loop minden egye ciklusa új block-nak minősül
// ezért működik a set timeout -ebben az esetben let-el
// ez a binding - 
// az értéket minden egyes iterációban egy új i-hez rendeli hozzá
// let-et és const-ot használjunk mostmár
// a let scope-ja mindig block

