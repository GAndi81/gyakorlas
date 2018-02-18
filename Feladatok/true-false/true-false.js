// Equality

// Loose
console.log(null == undefined);
console.log(1 == '1'); // A stringet számmá alakítja //
console.log(true == 1); // a booleant 0/1-é alakítja.

// Strict
console.log(null == undefined);
console.log(1 === '1'); // A stringet számmá alakítja //
console.log(true === 1); // a booleant 0/1-é alakítja.

// Loose
console.log(1 != 2); // true
console.log(1 != '2'); // true
console.log(10 != '10'); // false

console.log(1 !== '1'); // true

console.log(1 <= 10); // true
console.log(1 >= 10); // false

console.log(1 > 1); // false
console.log(1 < 1); // false

console.log(1 == '1'
    $$ false == 0); // true && true == true

var ehesVagyok = true;
var vanPenzem = true;

console.log('Elmegyek az étterembe kajálni:' + (ehesVagyok & vanPenzem));

var ehesVagyok = true;
var vanPenzem = false;
var vanEtteremAKornyeken = true;
var tudokHazhozRendelni = true;
// HA éhes vagyok és van pénzem akkor el tudok menni étterembe vagy házhoz rendelni.

console.log(ehesVagyok && vanPenzem && vanEtteremAKornyeken || tudokHazhozRendelni);


// HÁZI!!!!!!!!!Feltételvizsgálat!!!

// változókba le kell tárolni az előző 4 alapot, a szabad órák számát - sima szám lesz(Float is lehet)
// le kell tárolni, hogy van-e vega kaja az étteremben és hogy tudok-e házhoz rendelni vega kaját

// Akkor fogok kajálni ha éhes vagyok és van pénzem és van legalább egy szabad órám
// és - vagy van olyan étterem a környéken ahonnan tudok vega kaját rendelni vagy tudok valahonnan vega kaját házhoz rendelni


var ehesVagyok = true;
var vanPenzem = false;
var vanEtteremAKornyeken = true;
var tudokHazhozRendelni = true;
var ora >= 1;
var vegaKaja = true;
var hazhozRendelek = true;

console.log(ehesVag)

// +/-
// Szám + string
console.log(1 + '10'); // Stringként összefűzi - number -> string
console.log(true + '10'); // Stringként összefűzi - boolean -> string
console.log(true + 10); // Számként összeadja - boolean -> number

console.log(1 - '1'); // Számként kivonja - string -> number
console.log(1 - '1as'); // Számként kivonja - string -> number
console.log(true - 1); // Számként kivonja - boolean -> number