var kavekapszula = ['sárga', 'piros', 'kék', 'lila'];
var i = 0;


document.getElementById('teddazelejere').onclick = function () {
    var beirtszin = document.getElementById('kapszulaszin').value;
    kavekapszula.unshift(beirtszin);
    console.log(kavekapszula);
}


document.getElementById('teddavegere').onclick = function () {
    var beirtszin = document.getElementById('kapszulaszin').value;
    kavekapszula.push(beirtszin);
    console.log(kavekapszula);
}

document.getElementById('veddkiazelejerol').onclick = function () {
    var beirtszin = document.getElementById('kapszulaszin').value;
    kavekapszula.shift(beirtszin);
    console.log(kavekapszula);
}

document.getElementById('veddkiavegerol').onclick = function () {
    var beirtszin = document.getElementById('kapszulaszin').value;
    kavekapszula.pop(beirtszin);
    console.log(kavekapszula);
}

document.getElementById('mutasd').onclick = function () {
    alert(kavekapszula);
}