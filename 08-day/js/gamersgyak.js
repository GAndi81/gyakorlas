var Gamers = [];
var names = ['Tom', 'Jack', 'Monica', 'Brad', 'Gabriel', 'Johnny', 'Joe', 'Bálint',
    'Péter', 'Balázs', 'Bence', 'Abigél', 'András', 'Tibor', 'Árpád', 'Cili', 'Dénes',
    'Elemér', 'Ferenc', 'Gábor', 'Hanna', 'Ilona', 'József', 'Károly', 'László'
];
var countries = [
    'US', 'GB', 'FR', 'GER', 'AU', 'ES', 'POR', 'IT', 'RUS', 'HU', 'BG'
];
// Játékosok véletlen generálása a tömbökből.
for (var i = 0; i < 10000; i++) {
    var newGamer = {};
    newGamer.name = names[(Math.round(Math.random() * (names.length - 1)))];
    newGamer.age = 16 + Math.round(Math.random() * 24);
    newGamer.points = Math.round(Math.random() * 500);
    newGamer.country = countries[Math.round(Math.random() * (countries.length - 1))];
    Gamers.push(newGamer);
}
///////////////////////////// Megoldások /////////////////////////////
// Keresés teljes névre.
function findByName() {

    var gamer = 0;
    // Itt hozd létre a keresést.

    for (var i = 0; i < Gamers.length; i++) {
        if (Gamers[i].name === 'Brad') {
            gamer = (Gamers[i]);
            break;
        };
    }

    return gamer;
}
// Keresés korra.
function findByAge() {
    // Itt hozd létre a keresést.
    var gamer = 0;

    for (var i = 0; i < Gamers.length; i++) {
        if (Gamers[i].age < 20) {
            gamer = (Gamers[i]);
            break;
        }
    }
    return gamer;
}
// Keresés névre korra és országra.
function findByNameAgeCountry() {
    // Itt hozd létre a keresést.
    var gamer = 0;

    for (var i = 0; i < Gamers.length; i++) {
        if (Gamers[i].name === 'Hanna' && Gamers[i].age > 20 && Gamers[i].countries === 'HU') {
            gamer = (Gamers[i]);
            break;
        }
    }
    return gamer;
}
// Keresés névrészletre és kor sávra.
function findByNameAgeRange() {
    // Itt hozd létre a keresést.
    var gamer = 0;

    for (var i = 0; i < Gamers.length; i++) {
        if (Gamers[i].name.indexOf('e') > -1 && Gamers[i].age >= 20 && Gamers[i].age! > 25) {
            gamer = (Gamers[i]);
            break;
        }
    }
    return gamer;
}