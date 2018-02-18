/*A te feladatod, hogy írj javascript kódot, ami a "Yellowroad" kifejezést "*******"-kal helyettesíti 
mindenhol a "censored" id-jú elem összes gyerekében, még a linkek href-jében is.
A Heading elemek (h1, h2, h3 ...) esetében viszont a 'TITKOS' 
szó szerepeljen a Yellowroad helyén, ne csillagok. 
A headingben szereplő linkekben csupa kisbetűs "titkos"-ra cseréld a "yellowroad"-ot.
Figyelj, van ahol csupa kisbetűvel van írva a yellowroad, azt is cserélni kell!
Nincs szükség rekurzióra, nem mély a struktúra.*/

/*function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
*/

function replaceTexts() {
    var elements = document.getElementById('censored').children;
    // kimásoltuk a censored elem node-jait
    //Alap:  yellowroad = ********
    //címsorokban Yellowroad TITKOS
    //címsorban a link Yellowroad titkos
    // NEM CASE SENSITIVE!
    //A href-ben is cserélni kell
    // le tudjuk a nodelistban nézni a nodetypokat! - a console logon

    for (var i = 0; i < elements.length; i++) {
        //elements[i].innerHTML = elements[i].innerHTML.replace('Yellowroad', '********');
        switch (elements[i].nodeName) {
            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
                elements[i].innerHTML = elements[i].innerHTML.replace('Yellowroad', 'TITKOS');
                break;
            case 'A':
                if (elements[i].parentNode.nodeName != 'H1' &&
                    elements[i].parentNode.nodeName != 'H2' &&
                    elements[i].parentNode.nodeName != 'H3' &&
                    elements[i].parentNode.nodeName != 'H4' &&
                    elements[i].parentNode.nodeName != 'H5' &&
                    elements[i].parentNode.nodeName != 'H6') {

                    elements[i].innerHTML = elements[i].innerHTML.replace('Yellowroad', '********');
                    elements[i].href = elements[i].href.replace('Yellowroad', '********');

                } else {
                    elements[i].innerHTML = elements[i].innerHTML.replace('Yellowroad', 'titkos');
                    elements[i].href = elements[i].href.replace('Yellowroad', 'titkos');
                }
                // Akkor, ha címsoron belül van, akkor titkosra cseréli a szöveget és cseréli a hrefet is.
                //Ha nem címsoron belül van akkor csillagosra cserélem
            default:
                elements[i].innerHTML = elements[i].innerHTML.replace('Yellowroad', '********');
        }
    }
    console.log(elements);
}
replaceTexts();

//kiosztunk egy-egy feladatot minden függvénynek - mindig a legspecifikusabbat nézzük meg! - mire tudjuk cserélni

// példa:

function customReplace(miben, mit, mire) {
    var reg = new RegExp(/yellowroad/i) // YELLOWROAD, yellowroad, YElloWRoad, stb...a case sensitive tulajdonságot ezzel kibekkeltük
    return 'Ez itt Yellowroad'.replace(reg, 'TITKOS');
}
console.log(customReplace());