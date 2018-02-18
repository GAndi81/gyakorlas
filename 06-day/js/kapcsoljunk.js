var Ghosts = [];
var GhostSpeed = 50;
// Ciklus a ghost -ok létrehozására:
var i = 0;
var lastTurn = 1;

while (i <= 5) {

    var tetsz = {
        'actorID': ('actor' + i),
        'type': i + 1,
        'startDelay': i * 2000,
        'turnStart': i % 2 + 1,
    };

    Ghosts.push(ghost);






    // Ebben a függvényben változtasd a ghost -ok sebességét.
    function setSpeed() {
        if (GhostSpeed < 900) {
            GhostSpeed + 1;
        }


    }
    // Ez pedig a játékhoz kell ;-)
    setInterval(setSpeed, 5000);
    setInterval(function () {
        console.log('GhostSpeed', GhostSpeed);
    }, 5000);
    var gameParent = document.querySelector('.game-container');