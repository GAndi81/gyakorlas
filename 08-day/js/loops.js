//FOR LOOP - elöltesztelős ciklus

// i=0; i<10 vagyis true, tehát belép a ciklusba
/*
for (var i = 0; i < 10; i++) {
    //Ciklusmag
    // i = 0;
    i = 1;

}

// - ha i 10 akkor kilép, innen fut tovább a program

// 0-tól indexelődik a tömb
// ha a tömb hossza pl. 10, akkor 10 db elem van benne,
// azaz 0-9-ig vannak benne elemek

var tomb = ['html', 'css', 'js', 'git', 'sql'];

// a....a tömb hosszáig, azaz amíg i kisebb mint a tömb hossza
// ha a tömb 5 elemet tartalmaz, akkor 0-4ig vannak indexek
// ha i kezdetben 0. és a végén i<5, azaz MAX 4;
for (var i = 0; i < tomb.lenght - 1; i++) {

    console.log(tomb[i]);
    tomb[i] = 'hello';

}


// While ciklus - ha nem tudjuk, hogy hány lépés lesz 

var i = 0;
while (i < tomb.length) {
    console.log(tomb[i]);
    tomb[i] = 'hello';
    i++

}

for (var i = 0; i < 100000000; i++) {
    if (i % 7 == 0) {
        continue;
        //a continue figyelmen kívül hagyja, hogy mi van utána és lépteti
        // a break kiléptet a vezérlési szerkezetből
    }
    console.log(i);
}

// DO .. WHILE - hátultesztelős ciklus

var i = 0;
do {
    console.log(tomb[i]);
    tomb[i] = 'hello';
    i++

} while (i < tomb.lenght);

// FOR ... IN - ciklus, annyiszor fog lefutni, ahány eleme van a tömbnek, kihagyja az üres elemek lefuttatását
// objektumok bejárására szuper ez a ciklus!

var tomb2 = [];
tomb[2][10] = 'HP';
tomb[2][11050] = 'ACER';
for (var i in tomb2) {
    console.log(tomb2[i])
}

var myObj = {
    name: 'én',
    job: 'teacher',
    city: 'Budapest'
};

for (var i in myObj) {
    console.log(myObj[i]);
}



var students = [{
        name: 'Oberth Zsigmond',
        born: 'Budapest',
        city: 'Budapest',
    },
    {
        name: 'Szarka Péter',
        born: 'Budapest',
        city: 'Sopron',
    },
    {
        name: 'Szarka Péter',
        born: 'Nagyatád',
        city: 'Budapest',
    }, {
        name: 'Szász Kinga',
        born: 'Dicsőszentmárton',
        city: 'Budapest',
    }
];

/*
// Ez a ciklus a töbm indenxeken megy végig
for (var i in students) {
    //console.log(students[i].name);
    //console.log(`Név: ${students[i].name}, Született: ${students[i].born}, Lakik: ${students[i].city});
    console.log(Object.keys(students[i]));
}

// ez az object key-ein megy végig
for (var j in students[i]) {
    console.log(`${j} : ${students[i][j]}`);

}

// i=0;