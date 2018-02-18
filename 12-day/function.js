// függvény definíció
function myFirstFunc() {
    console.log('Lefutott a függvényem');
}

function mySecondFunc() {
    console.log('Lefutott a második függvényem');
}
// ez a függvényhívás - ekkor fog lefutni a benne lévő kód
/*
myFirstFunc();
mySecondFunc();*/

// zárójelben vannak a paraméterek - itt kettő van
//(a = 10, b = 20 - ez a mostani használat)
function calcSum(a, b) {

    console.log(a + b);
    console.log(arguments);
    console.log(arguments[0] + arguments[1]);
}

//amikor már értéket kapnak, akkor argumentumoknak hívjuk őket
// adhatok neki default paramétert, de csak abban az esetben lesz figyelembe véve, ha nincs megadva érték
// a=10 és b=20
// megadhatunk ilyen módon a, b, és c-t is

//calcSum(10, 20);

// Függvényre példa:

function myCalc(a, b, sign) {
    if (sign == '+') {
        return a + b;
    } else {
        return a - b;
    }
}

var er = myCalc(10, 5, '+');
console.log(er);

// return után a függvény futása megszakad

//Függvényre másik példa - ha 

function myFuggv(a, b, c) {
    if (arguments.length == 3)
        return a * b * c;
} {
    return 0;
}

// console.log(myFuggv(10, 20));

function myFuggveny(a, b, sign) {

    if (typeof a == 'number' && typeof b == 'number' && arguments.length == 3) {
        switch (sign) {
            case '+':
                ossz = a + b;
                break;
            case '-':
                ossz = a - b;
                break;
            case '*':
                ossz = a * b;
                break;
            case '/':
                ossz = a / b;
                break;
            default:
                ossz = 'Hibás paraméterek'
        }
    }
    return ossz;
}
console.log(myFuggveny(Nan, 10, '+'));

//function expression - függvény definíció
// anonim function

var FuncExpr = function () {
    console.log('Ez mi?')
}

FuncExpr();

//IIFE - Immediately Invoked Function Expression
/*
(function () {
    console.log(IIFE);
})();*/

function globalVar() {
    myVariable = 'Globális változó függvényen belül létrehozva'
    console.log(myVariable);
}

globalVar();
console.log(myVariable);

//NE adjuk ugyanazt a változó nevet globális és lokális változóknak
//Ha kihagyjuk a var-t, akkor a függvényen belül létrehozott változó is globális lesz, szóval ne hagyjuk ki 