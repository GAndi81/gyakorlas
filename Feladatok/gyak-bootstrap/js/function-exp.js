//spread syntax

function fgv(a, ...b) {
    console.log(a * b.length);
    console.log(b);
}
fgv(1, 2, 3, 4, 5);

//tömbszerűen viselkedik - tehát el tudom érni a ...-al
//doksiban le van írva, mire lehet használni

//closure - olyan függvény, amelynek a visszatérési értéke függvény -

function clos() {
    let i = 0;
    return function () {
        i++;
        return i;
    }
}

let x = clos();
console.log(x());
console.log(x());
console.log(x());
console.log(x());

let y = clos(); //érték szerint át vannak adva, az előző i nem ugyanaz
console.log(y());
console.log(y());


console.log(x(), y());

//a visszatérési érték az egy függvény, megakadályozzuk a szemétgyűjtést
// a függvény lefutása után is el tudjuk érni azt a változót, mert a garbage collector nem pucolja ki
//itt nem ugyanarra mutat -
