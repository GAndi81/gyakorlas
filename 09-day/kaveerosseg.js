/*Kávék erősség szerint
Válogasd 3 különböző csoportba a kávékat erősség szerint: Light: 1-3, Mid: 4-7, Strong:8-10. Listázd ki az eredményt.*/



var kave = [{

        name: 'arabica',
        country: 'Dél-Afrika',
        type: '5',
        keszlet: '20',
        erosseg: '2',
    },
    {
        name: 'robusta',
        country: 'Kongó',
        type: '4',
        keszlet: '1',
        erosseg: '5',
    },
    {
        name: 'konga',
        country: 'Peru',
        type: '8',
        keszlet: '10',
        erosseg: '8',

    }, {

        name: 'mix',
        country: 'Mexico',
        type: '2',
        keszlet: '2',
        erosseg: '1',

    }, {

        name: 'europa',
        country: 'Italy',
        type: '2',
        keszlet: '6',
        erosseg: '9',

    }, {

        name: 'australia',
        country: 'Hungary',
        type: '2',
        keszlet: '6',
        erosseg: '6',
    }
];

var light = [];
var mid = [];
var strong = [];

for (var i = 0; i < kave.length; i++) {
    if (kave[i].erosseg <= 3 && kave[i].erosseg >= 1) {
        light.push(kave[i]);
    } else if (kave[i].erosseg <= 7 && kave[i].erosseg >= 4) {
        mid.push(kave[i]);
    } else {
        (kave[i].erosseg <= 10 && kave[i].erosseg >= 8)
        strong.push(kave[i]);
    }
}
console.log(light);
console.log(mid);
console.log(strong);