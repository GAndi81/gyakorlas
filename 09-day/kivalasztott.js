/*1. Kávézó újratöltve
Készíts egy listát azokról a kávékról, amik fogytán vannak, azaz a készletmennyiség 3 kg alatt van. */


var kave = [{

        name: 'arabica',
        country: 'Dél-Afrika',
        type: '5',
        keszlet: '20',
    },
    {
        name: 'robusta',
        country: 'Kongó',
        type: '4',
        keszlet: '1',
    },
    {
        name: 'konga',
        country: 'Peru',
        type: '8',
        keszlet: '10',

    }, {

        name: 'mix',
        country: 'Mexico',
        type: '2',
        keszlet: '2',
    }, {

        name: 'europa',
        country: 'Italy',
        type: '2',
        keszlet: '6',

    }, {

        name: 'australia',
        country: 'Hungary',
        type: '2',
        keszlet: '6',
    }
];

var fogyoKave = [];

for (var i = 0; i < kave.length; i++) {
    if (kave[i].keszlet < 3) {
        fogyoKave.push(kave[i]);
    }
}
console.log(fogyoKave);