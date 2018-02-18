var firstNumber = 10;
var secondNumber = 20;

if (firstNumber < secondNumber) {
    console.log('Az első szám kisebb, ohh yeeaa');
    console.log('if vége');
}
/* ha igaz lesz az if, akkor fogja kiírni, ha hamis, akkor be sem megy a consolig, nem fut le) mindig ki kell tenni  a kapcsos zárójelet!*/

if (firstNumber < secondNumber) {
    console.log('Az első szám kisebb, ohh yeeaa');
} else {
    console.log('A második szám kisebb');
}

if (firstNumber < secondNumber) {
    console.log('Az első szám kisebb, ohh yeeaa');
} else if (firstNumber > secondNumber) {
    console.log('A második szám kisebb');
} else {
    console.log('A két szám egyenlő');
}