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
        keszlet: '15',
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
        keszlet: '6',
    }
];



function kaveadatok() {

    var kavefajta = document.getElementById('namekave').value;

    for (var i = 0; i < kave.length; i++) {

        if (kave[].name('') === -1) {
            console.log(kave[]);
        } else {
            console.log('Jelenleg nem kapható');
        }
    }
}