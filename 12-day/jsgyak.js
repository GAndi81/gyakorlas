// csak adott ID-val rendelkező elem
/*console.log(document.getElementById('paragraph'));
console.log(document.querySelector(''));
//query selectornál beírhatnék sok mindent - de felesleges általában, de csak egy elemet kapunk vissza mindig!

// ugyanaz mint a query selector, de nem csak egy, hanem az öszes meg
console.log(document.querySelectorAll('para-class'));
document.querySelectorAll('para-class')[0].className = 'para-class modified-class';

//innerHTML,

/*
var document = {
    forms:
    images:
    getElementById = function () {},
}*/

/*
console.log(document.getElementsByClassName('.para-class'));

//visszaadja az összes megadott class-szel rendelkező elemet.
console.log(document.getElementsByClassName('modified-class'));
// Ekvivalens vele: document.querySelectorAll('modified-class');



// Adott tag-el rendelkező elemet ad vissza*/

console.log(document.getElementsByTagName('p'));

// Adott name-el rendelkező elemeket ad vissza
console.log(document.getElementsByTagName('vnev'));