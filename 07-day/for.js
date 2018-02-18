/*
Írd ki felugró ablakban a számokat 1-től 10-ig, majd 10-től 1-ig, végül 13-tól kezdődően minden páratlan számot 20 alatt.*/

/*for (ciklusváltozó = kezdoertek; feltetel; leptetes
    CIKLUSMAG;*/
/*
for (var i = 1, j = 10; i < 11 && j > 0; i++, j--) {
    alert(i, j);
};*/

// 1. létrehozom a tömböt
var tomb = [];

// 2. feltöltöm a tömböt
for (var i = 1; i < 11; i++) {
    tomb.push(i);
};

//3. kiíratom  tömböt
alert(tomb);

var tomb = [];
for (var j = 10; j > 0; j--) {
    tomb.push(j);
};

alert(tomb);

var tomb = [];
for (var i = 13; i < 20; i++) {
    if (i % 2 == 1) {
        tomb.push(i)
    }
};

alert(tomb);

/* Elöl tesztelős ciklus nagyon jó példája
for (var i = 0; j = 0; 1 < 10 && j < 5) {
    i++;
    j++;
    console.log(i)*/