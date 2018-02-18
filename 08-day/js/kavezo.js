/*Kávézó
Mint egy különleges kávézó tulajdonosa nyilvántartod, 
hogy milyen kávéfajtákból tudsz kávét készíteni a vendégeid számára. 
Hozz létre egy tömböt, amiben kávé objektumokat tárolsz. 
Minden kávéról vedd fel a nevét, a származási országát, az erősségét (1 és 10 közötti skálán) és a készletmennyiséget. 
Tegyél egy kereső mezőt a kávézó oldalára, amiben meg lehet adni a keresendő kávé nevét. 
Találat esetén írd ki a keresett kávé minden adatát, 
különben a "Jelenleg nem kapható" felirat jelenjen meg.*/



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


//FOR IN
function kaveadatok() {

    var kavefajta = document.getElementById('namekave').value;

    for (var i = 0; i < kave.length; i++) {

        if (kave[].name === kavefajta) {
            console.log(kave[]);
        } else {
            console.log('Jelenleg nem kapható');
        }
    }
}