

var newtitle = '';

for (let i = 0; i < title.length; i++){
    for (let j = 0; j < mit.length; j++){
        if(title.substr(i, 1).toLowerCase() === mit[j]){
            newtitle += mire[j];
            j = mit.length;
        }
        else if (j === mit.length - 1){
            newtitle += title.substr(i, 1).toLowerCase();
        }
    }
}


let title = 'Apád vagy, .... Anyád?';
function removeShits(str){
const hunCars = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    ö: 'o',
    ü: 'u',
    ő: 'o',
    ű: 'u'
}
str = str.toLocaleLowerCase();
str = str.replace(/[\?:;,\.\+\*]/g, ''); //minden ilyen karaktert globálisan kicseréli a semmire
str = str.replace(/[áéíóúöüőű]/g, c => hunCars[c]);    //arrow functionnal
str = str.replace(/ +/g, '-'); //globálisan kicseréli az egy vagy a több szóközt kötőjelre
return str;
}
console.log(removeShits(title));

5 filmet kell kiválasztani mindenkinek, és az alábbi formában egy json file-ba megcsinálni. ezekből fog összeállni a pótvizsga json file-ja...

img - covers 135 * 200 name: kincs-ami-nincs.jpg
    - actors 135 * 135 name: jeff-dunham.jpg
ha speciális karakter van replace semmire a képútvonalban