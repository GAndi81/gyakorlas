/*Luxus kávézó?
Egészítsed ki a kávékról tárolt adataidat az árukkal 
(azaz egy csésze az adott kavéból mennyibe kerül a vendégnek).
 Ezután egy új menüponttal kiegészítve írd ki, hogy melyik a legdrágább és melyik a legolcsóbb kávé, 
valamint jelenítsd meg az átlagárat.*/



var kave = [{

        ar: '100',
        name: 'arabica',
        country: 'Dél-Afrika',
        type: '5',
        keszlet: '20',
    },
    {

        ar: '150',
        name: 'robusta',
        country: 'Kongó',
        type: '4',
        keszlet: '15',

    },
    {
        ar: '200',
        name: 'konga',
        country: 'Peru',
        type: '8',
        keszlet: '10',

    }, {

        ar: '50',
        name: 'mix',
        country: 'Mexico',
        type: '2',
        keszlet: '6',

    }
];



function legdragabbKave() {

    var max = kave[0];
    for (var i = 1; i < kave.length; i++) {

        if (kave[i] > max) {
            max = kave[i];
        }
    }
}


function legolcsobbKave() {

    var min = kave[0];
    for (var i = 1; i < kave.length; i++) {

        if (kave[i] > min) {
            min = kave[i];
        }
    }
}

function atlagar() {

    var avg = 0;
    for (var i = 1; i < kave.length; i++) {
        avg += kave[i];
    }
    avg = avg / avg.length;
}