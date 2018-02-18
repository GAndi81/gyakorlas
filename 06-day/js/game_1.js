var Ghosts = [];
var GhostSpeed = 50;
// Ciklus a ghost -ok létrehozására:
var i = 0;
var lastTurn = 1;

while (i <= 4) {

    var ghost = {
        'actorID': 'actor' + 1,
        'type': i + 1,
        'startDelay': i * 2000,
        'turnStart': i % 2 + 1
    };
    Ghosts.push(ghost);
    i++;
};

// Ebben a függvényben változtasd a ghost -ok sebességét.
function setSpeed() {
    if (GhostSpeed < 950) {

        GhostSpeed += 50;
    }
}
// Ez pedig a játékhoz kell ;-)
setInterval(setSpeed, 5000);
setInterval(function () {
    console.log('GhostSpeed', GhostSpeed);
}, 5000);
var gameParent = document.querySelector('.game-container');