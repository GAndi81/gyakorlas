/*var myArray = ['elso', 'harmadik', 'masodik'];

for (var i in Object.keys(myArray)) {
    console.log(myArray[i]);
}

var myObj = {
    firstname: 'Ági',
    lastname: 'Both',
    city: 'Budapest'
}

console.log('Vezetéknév: ', myObj.firstname);
for (var i in myObj) {
    console.log(myObj[i]);
}

var heavyObj = {
    firstname: 'Jose',
    lastname: ['Gull', 'estrz', 'sdrtz', 'dsfsd'],
    city: 'Columbia'
}

for (var i in heavyObj) {
    if (Array.isArray(heavyObj[i])) {
        console.log(heavyObj[i].join('')); // összekapcsoltam az elemeket
        for (var j in heavyObj[i]) {
            console.log(heavyObj[i][j]);
        }
    } else
        console.log(heavyObj[i]); // kiíratom az összes
}*/

/*
for (var i in heavyArray) {
    console.log(heavyArray[i]);
}*/
/*
var person = '';
for (var i in heavyArray) {
    person = '';
    for (var j in heavyArray[i]) {
        if (Array.isArray(heavyArray[i][j])) {
            for (var k in heavyArray[i][j]) {
                person += ` ${heavyArray[i][j][k]};
            }
        } else {person += `
                $ {
                    heavyArray[i][j]
                };
                console.log(person);
            }

            /*végigmegy a kulcsokon, a ciklusok így futnak le: lefut a külső tömb és a belső tömb többször minden eleménél*/

/* legfiatalabb, legidősebb, átlag életkor, összes életkor - ezeket csináljuk meg úgy, hogy hozzáadjuk az eddigi tömbhöz*/



var heavyArray = [{
        firstname: 'Jose',
        lastname: ['Gizi', 'Etelka', 'Amália', 'Kornélia'],
        city: 'Mexico',
        age: '12'

    }, {
        firstname: 'poer',
        lastname: ['Olga', 'Buksi', 'ssdghh', 'élghj'],
        city: 'Columbia',
        age: '102'
    }, {
        firstname: 'Jose',
        lastname: ['rtlgh', 'élfghl', 'asádéé', 'erltkz'],
        city: 'Peru',
        age: '88'
    },
    {
        firstname: 'Jose',
        lastname: ['Gizi', 'Etelka', 'Amália', 'Kornélia'],
        city: 'Mexico',
        age: '23'

    },
    {
        firstname: 'Jose',
        lastname: ['Gizi', 'Etelka', 'Amália', 'Kornélia'],
        city: 'Mexico',
        age: '55'

    },
];


// legfiatalabb, 
//legidősebb
//átlag életkor
// összes életkor - ezeket csináljuk meg úgy, hogy hozzáadjuk az eddigi tömbhöz*/

/*
var ageObj = {}



var minAge = 0;
for (var i = 0; i < length.heavyArray; i++) {
    if (heavyArray[i] < minAge) {
        minAge = heavyArray[i];
    }
}
console.log(minAge)

var maxAge = 0;
for (var i = 0; i < length.heavyArray; i++) {
    if (heavyArray[i].age < maxAge) {
        console.log(maxAge)
    }
}

function customSort(a, b) {
    return a - b;
}
//értékül adjuk//
console.log(tomb.sort(customSort));
//automatikusan átrendezi az elemeket a sort

// kettővel osztható:
var count = 0;
for (var i in tomb) {
    if (tomb[i] % 2 == 0) {
        count++;
    }
}
// class - progalap.elte.hu -------
*/

/*Rendezés(N,X):
  I:=N
  Ciklus amíg I≥2
    CS:=0
    Ciklus J=1-től I-1-ig
      Ha X[J]>X[J+1] akkor Csere(X[J],X[J+1]); CS:=J
    Ciklus vége
    I:=CS
  Ciklus vége
Eljárás vége.*/

var i = tomb.length;
var cs = 0;

while (i > 0) {
    cs = 0;
    for (var j = 0; j < i; j++) {
        if (tomb[j] > tomb[j + 1]) {
            temp = tomb[j];
            tomb[j] = tomb[j + 1];
            tomb[j + 1] = temp;
            cs = j;
        }
    }
    i = cs;
    console.log(i);
}