let valami = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < valami.length; i++) {
    console.log(valami[i]);
};

//[i] - index
// ciklusváltozó létrehozása - kezdőérték beállítása / feltétel / léptetés


// A.
for (let i = valami.length - 1; i > -1; i--) {
    console.log(valami[i]);
};

// ez a dekrementálás inkrementálás két fajtája - post, pre
// vagy i >= 0;

// pre - ++i ------ rögtön növeli
// post - i++ -------------- kiírja a jelenlegit és utána kezdi növelni az értéket -
// a for ciklusnál mindig ezt használjuk, annak ellenére, hogy működik mindkét megoldás

let j = 1;
console.log(j++);

// B.
let i = 0;
while (i < valami.length) {
    console.log(valami[i]);
    i++;
}

//C.
i = 0;
do {
    console.log(valami[i]);
    i++;
}
while (i < valami.length);
// ha azt akarjuk, hogy egyszer mindenképp lefusson

//D.

const PERSON = {
    firstname: 'Balázs',
    lastname: 'Hajkó',
    age: '30'
}

//console.log(Object.keys(PERSON));

for (let i in PERSON) {
    if (PERSON.hasOwnProperty(i)) {
        // console.log(PERSON[i]);
    }
}

// itt végigmegyünk a prototípus öröklődésen is, a második egyszerűbb megoldás ezért

// így lehet kiíratni - és így csak a saját tulajdonságait íratjuk ki, ha van esetleg neki öröklött, azt nem
// const - al is lehet let helyett írni

let keys = Object.keys(PERSON);

for (let i in keys) {
    //console.log(PERSON[keys[i]]);
}

// az object key nem szedi ki a prototípus láncból az öröklődést, csak  sajátját, ezért nem kell a hasOwnProperty - ezért szedhettük ki

console.log('For of:');
for (const i of keys) {
    console.log(PERSON[i]);

}
// ez nem egy felsorolható, tömbszerű objektum
// egy iterálható tömbszerű objektumon megy végig ez a loop!! -ez a felső

console.log('For each');

//valami.forEach(element => element + a);
// ez egy arrow function

/*valami.forEach(function (element) {
return element + "a";
})*/

valami.forEach((element, i) => {
    console.log(element, i);
});

// array for Each metódust - minden egyes elemre le fogja futtatni
// ha itt fölül visszatérési érték van, akkor nem kell kitenni a kapcsost sem

/*valami.forEach(function (element) {
    console.log(element)
})*/

// for each mit csinál? MDN

function higherOrderFunction(callBackFunction) {
    let eredmeny = callBackFunction(666) * 10;
    console.log(eredmeny);
    return eredmeny;
}

higherOrderFunction(function (a) {
    return a * 2;
});

// callback
function hof(callback) {
    let ret = callback();
    console.log(ret);
    return ret;
}
hof(function () {
    return 'Hi!'
})

function szorzat(a, b) {
    return a * b;
}

function osszeg(a, b) {
    return a + b;
}

function szorzatMinuszOsszeg(szorzatFunc, osszegFunc, a, b) {
    console.log(szorzatFunc(a, b) - osszegFunc(a, b));
}

// Függvények típusai:
//callback - az a függvény, amely paraméterként van átadva egy másik függvénynek
// closure - olyan függvény, ami egy visszatérési érték, vagyis a return után következik
// higher order function - az a függvény, amely más függvényekkel dolgozik

//JS first class típusú nyelv, mert ezek a fentiek mind 




// Függvény létrehozása:

// function declaration

szorzatMinuszOsszeg(szorzat, osszeg, 11, 12);

// function expression - amelyet hozzárendelhetünk változókhoz

/*let functionExpression = function ave() {
    alert('Ave Caesar');
}
functionExpression();*/


/*let functionExpression = function ave() {
        alert('Ave Caesar');
    }*/

// azonnal meghívott függvénykifejezés lesz ez:IIFE
// kap egy paramétert ez a függvény, és meghívja önmagát
// ezt rekurziónak hívjuk, 


(function iife(i, meddig) {
    if (i < meddig) {
        console.log(i);
        i++;
        iife(i, meddig);
    }
})(0, 10);


//...