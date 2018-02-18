/*Kávé leltár
Egészítsd ki a kávékról tárolt adataidat a kilónkénti beszerzési árukkal. 
(Feltételezzük, hogy mindig ugyanannyiért tudjuk beszerezni a kávét ebben az idealizált világban). 
Ezután írd ki az összes készleten levő kávé értékét összesítve egy új admin menüpontban.*/


var kave = [{

        beszerzesiAr: '50',
        ar: '100',
        name: 'arabica',
        country: 'Dél-Afrika',
        type: '5',
        keszlet: '20',
    },
    {
        beszerzesiAr: '75',
        ar: '150',
        name: 'robusta',
        country: 'Kongó',
        type: '4',
        keszlet: '15',

    },
    {
        beszerzesiAr: '100',
        ar: '200',
        name: 'konga',
        country: 'Peru',
        type: '8',
        keszlet: '10',

    }, {

        beszerzesiAr: '25',
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