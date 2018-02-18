var ehesVagyok = true;
var vanPenzem = false;
var vanEtteremAKornyeken = true;
var tudokHazhozRendelni = true;
var szabadOra = 1;
var vegaKajaazetteremben = true;
var hazhozRendelekvegakajat = true;


console.log('Kajálni fogok:' + (ehesVagyok && vanPenzem && (szabadOra >= 1) && (vegaKajaazetteremben || hazhozRendelekvegakajat)));

// HÁZI!!!!!!!!!Feltételvizsgálat!!!

// változókba le kell tárolni az előző 4 alapot, a szabad órák számát - sima szám lesz(Float is lehet)
// le kell tárolni, hogy van-e vega kaja az étteremben és hogy tudok-e házhoz rendelni vega kaját

// Akkor fogok kajálni ha éhes vagyok és van pénzem és van legalább egy szabad órám
// és - vagy van olyan étterem a környéken ahonnan tudok vega kaját rendelni 
// vagy tudok valahonnan vega kaját házhoz rendelni