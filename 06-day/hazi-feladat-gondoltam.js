var gondoltam = Math.floor(Math.random() * 10) + 1;
var szamlalo = 0;

function tipp() {
    szamlalo++;
    var tipp = document.getElementById('tipp-beiras').value;

    if (gondoltam == tipp) {
        document.getElementById('valasz').innerHTML = 'Eltaláltad ' + szamlalo + ' tippből.';
    } else {
        document.getElementById('valasz').innerHTML = 'Számolj tovább!';
    }
}