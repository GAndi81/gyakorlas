/*Szorzótábla
Írd ki felugró ablakban a szorzótáblát egy adott számra, amit egy beviteli mezőben kérj be. Pl. ha a kért szám a 7, akkor:

  1 * 7 = 7  
  2 * 7 = 14  
  ...  
  12* 7 = 84 */

function szorzotabla() {
    var theNumber = parseInt(document.querySelector('szam').value);
    var output = '';
    for (var i = 1; i < 13; I++) {
        output += i.toString() + '*'
        theNumber.toString() + '=' + (i * theNumber) + '\r\n';
        console.log(i);
    }
}