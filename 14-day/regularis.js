/*var reg = /e/;
typeof reg
    "Ebben a szövegben keresek"


var reg = /szöveg/i;

"Ebben a szövegben keresek".search(reg);

"Ebben a szövegben keresek".replace()

//helyettesítő karakterek - javascript regular expressions
/*
? - az előtte lévő karakter 0 vagy 1 alkalommal szerepelhet
 + 1 vagy x alkalommal szerepel az előtte álló karakter
 * 0, x
*/
// +. - bármilyen karakter szerepel a plusz előtt
/*
^ˇA kezdődjön nagy A betűvel
$ ALmafa - ezzel végződjön a karakter*/

/*
^ˇAlmafa$ - csak az almafa jó és csak ezzel kell végződjön!*/
/*
"alma".search(/lm?/)
*/


// csak azt nézzük, hogy tartalmazza-e az adott szavakat, azt nem nézzük, hgy lehet-e mellette más vagy nem
//var t = ['alma', 'körte', 'szilva', 'narancs', 'eper', 'paradicsom'];
// \d - szám lehet!

var t = prompt('add meg a tajod');
var reg = /\d{3} \d{3} \d{3}/;
for (var i = 0; i < t.length; i++) {
    if (t[i].search(reg) != -1) {
        console.log(t[i]);
    }
}

var t = prompt('add meg a tajod');
var reg = /^\d{3} \d{3} \d{3}$/;
console.log(t.search(reg));