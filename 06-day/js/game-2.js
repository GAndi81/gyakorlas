var Ghosts = [];
var GhostSpeed = 50;
var currentEated = 0;
// Innen jössz te:

var i = 0;
while (i <= 4) {

    var tetsz = {
        'actorID': 'actor' + i,
        'type': i + 1,
        'startDelay': i * 2000,
        'turnStart': 1
    };

    Ghosts.push(tetsz);
    i++;
}

// Ebben a függvényben változtasd a szellemek sebességét.
$(document).on('pacmanEated', function () {
    console.log('currentEated: ', currentEated);
    // sebesség beállítása
    switch (currentEated) {
        case 50:
        case 100:
        case 150:
        case 200:
        case 250:
            GhostSpeed += 25;
    }


});
// Ez pedig a játékhoz kell ;-)
var gameParent = document.querySelector('.game-container');