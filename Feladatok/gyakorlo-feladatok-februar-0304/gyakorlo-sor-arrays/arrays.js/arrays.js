//1.Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!

/*
var minTomb = [10, 5, 2, 1, 11, 15];

console.log(Math.min(...minTomb));
*/

var minTomb = [10, 5, 2, 1, 11, 15];
var min = minTomb[0];

for (var i = 1; i < minTomb.length; i++) {
    if (minTomb[i] < min) {
        min = minTomb[i];
    }
}
console.log(min);



/*
var minTomb = [10, 5, 2, 1, 11, 15];

for (idx in minTomb) {
    minTomb[idx] < min;
}

console.log(min);
*/
/*
---------------------------------------
var cond = 1 == 1;

while (cond) {
    // do it 
}

for (; cond;) {
    // do it
}

// -----------------------------------

for (var i = 0; i < 10; i++) {
    // do it
}

var i = 0;
while (i < 10) {
    // do it
    i++;
}


while (true) {
    // endess loop
}

for (;;) {
    // endless loop

    if (cond) {
        break;
    }
}
*/

// FELADAT VÉGE --------------------------------------------------------------------------------------------

// 2. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!

/*
var maxTomb = [10, 5, 2, 1, 11, 15];

console.log(Math.max(...maxTomb));

/*


*/

// FELADAT VÉGE -------------------------------------------------------------------------------------------


// 3.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!


// ELSO MEGOLDAS:

/*
var atlagTomb = [10, 5, 2, 1, 11, 15];

var sum = 0;

for (var i = 0; i < atlagTomb.length; i++) {
    sum = (sum + atlagTomb[i]);
}

var atlagszamolas = (sum / atlagTomb.length);
console.log(atlagszamolas);

*/

// MASODIK MEGOLDAS:

/*
var atlagTomb = [10, 5, 2, 1, 11, 15];

var szamolas = 0;

function atlagszamolas(atlagTomb) {
    for (var i = 0; i < atlagTomb.length; i++)
        szamolas = (szamolas + atlagTomb[i]);
    var osztas = (szamolas / atlagTomb.length);
}
document.write(osztas);

*/

//FELADAT VÉGE -----------------------------------------------------------------------------------

// 4.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!

/*
var atlagTomb = [10, 5, 2, 1, 11, 15];
var osszeg = 0;

for (var i = 0; i < atlagTomb.length; i++) {

    osszeg = (osszeg + atlagTomb[i]);
}
console.log(osszeg);

*/

//FELADAT VÉGE -----------------------------------------------------------------------------------

// 5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!

/*
var atlagTomb = [10, 5, 2, 1, 11, 15];
var db = 0;

for (var i = 0; i < atlagTomb.length; i += 2) {
    db++;
}
console.log(db - 1);
*/

//FELADAT VÉGE -----------------------------------------------------------------------------------


// 6. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!

/*
var atlagTomb = [10, 5, 2, 1, 11, 15];

atlagTomb.sort(function (a, b) {
    return a - b;
});

console.log(atlagTomb[1]);
*/

//FELADAT VÉGE -----------------------------------------------------------------------------------


// 7.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!

// Itt azt is meg kell nézni, hogy mi van ha nem szám - akkor át kell alakítani Number(tomb[i]) ***;

/*
var atlagTomb = [10, 5, 2, 1, 11, 15];

atlagTomb.sort(function (a, b) {
    return b - a;
});
console.log(atlagTomb[2]);
*/

//FELADAT VÉGE -----------------------------------------------------------------------------------

/* 8.	Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, 
bármilyen típusú elemeket tartalmazó tömb 
(feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) 
tartalmazza e a 23-as számot! Használj logaritmikus keresést! Használj lineáris keresést!*/

/* beszúrásos rendezés*/
/*
var tomb = [1, 10, 28, 32, 40];
var beszuras = 20;

for (i = 0; i < tomb.length; i++) {
    if (tomb[i] ) {

    }
}
console.log();
*/

var tomb = [1, 10, 28, 32, 40];
var beszuras = 20;

while (i < tomb.length) {
    beszuras=tomb.length[i];
    i++
}