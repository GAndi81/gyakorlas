/*for (ciklusváltozó = kezdoertek; feltetel; leptetes) {
    CIKLUSMAG;
}
*/
/* FOR CIKLUS */
/*
for (var i = 0; i < 10; i += 2) {
    console.log(i);
}
console.log(i);

i = i-2 ugyanaz mint i -= 2
------------------------------------------

for (var i = 10; i > 0; i = i + 2) {
    console.log(i);
}
console.log(i);


for (var i = 100; i > 0; i -= 20) {
    console.log(i);
}
*/
/* Kiírjuk, hogy hány db 5-el osztható szám van*/
/*
var db = 0;
for (var i = 0; i < 1001; i += 5) {
    db++;
}
console.log(db - 1);*/

/* Elöl tesztelős ciklus nagyon jó példája
for (var i = 0; j = 0; 1 < 10 && j < 5) {
    i++;
    j++;
    console.log(i);
}
*/
/*a while és a for ugyanúgy használható* - akkor használjuk, általában, amikor nem tudjuk hogy hány lépés lesz/

    var i = 0;
    while (i < 100) {
        console.log(i);
        i++;
    }