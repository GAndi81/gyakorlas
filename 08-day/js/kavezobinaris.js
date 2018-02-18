var kave = [{
        name: 'arabica',
        country: 'Dél-Afrika',
        type: '5',
        keszlet: '20',
    },
    {
        name: 'konga',
        country: 'Peru',
        type: '8',
        keszlet: '10',

    },
    {
        name: 'mix',
        country: 'Mexico',
        type: '2',
        keszlet: '6',

    }, {

        name: 'robusta',
        country: 'Kongó',
        type: '4',
        keszlet: '15',

    }
];


/*function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2);
    console.log(arr[mid], i);

    if (arr[mid] === i) {
        console.log('match', arr[mid], i);
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) {
        console.log('mid lower', arr[mid], i);
        binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (arr[mid] > i && arr.length > 1) {
        console.log('mid higher', arr[mid], i);
        binarySearch(arr.splice(0, mid), i);
    } else {
        console.log('not here', i);
        return -1;
    }

}
var result = binarySearch(a, 100);
console.log(result);*/

//Példa erre alább:

var tomb = [1, 2, 3, 4, 5, 6, 7, 8, 112, 1234];
var mettol = 0;
var meddig = tomb.length - 1;
var kozepsoElem;
var keresettErtek = 1234;
var talalatIndexe;
var futasokSzama = 0;
while (mettol <= meddig) {
    kozepsoElem = Math.floor((mettol + meddig)) / 2);
if (tomb[kozepsoElem] == keresettErtek) {
    talalatIndexe = kozepsoElem;
    break;
} else if (tomb[kozepsoElem] < keresettErtek) {
    mettol = kozepsoElem + 1;
} else {

    meddig - kozepsoElem - 1;
};
futasokSzama++;

}
console.log(`A keresett index: ${kozepsoElem}, A loop száma: ${futasokSzama}`);