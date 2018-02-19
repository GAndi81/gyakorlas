function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var data = xhttp.responseText;
    // Innen, ide dolgozz... Itt hívd meg a függvényeid stb. A json file tartalma innen érhető csak
    // Live servert használd mindig

}

getData('/js/meteorits.json', successAjax);


/*
FELADATOK:
1. Írasd ki egy táblázatba a következő adatait a meteoritoknak:
    id
    mass
    name
    nametype
    recclass
    reclat
    reclong
    year

 Pozitív, ha ezeket az elemeket nem az innerHTML segítségével hozod létre. 
 */

/*
//------------------------------------------------------------------------------------------------------------------------------
Pszeudo kód az első feladathoz:

1. json.parse() vagy json.stringify() el elérem a jason file-t, az ott található adatokat objektummá alakítom
2. megkeresem a kulcsok alapján (id, mass, name, nametype, recclass, reclat, reclong, year) a megfelelő adatokat a json file-ban
3. létrehozok egy függvényt getData néven
4. az objektum kulcsait a "this" segítségével meghívom / vagy másik módszerként a for ciklussal a kulcsokra szűkítve végigmegyek 
az objektum megfelelő értékein és kigyűjtöm őket
5. összekapcsolom az adatokat a html-ben lévő táblázatom megfelelő soraival id alapján
6. kiíratom az eredményt
*/


var objMeteorits = {};

function getData(objMeteorits) {
    this.meteorits.id(),
        this.meteorits.name(),
        this.meteorits.nametype(),
        this.meteorits.recclass(),
        this.meteorits.reclat(),
        this.meteorits.reclong(),
        this.meteorits.year(),
}

alert(objMeteorits);

/*
//----------------------------------------------------------------------------------------------------------------------------
2. A táblázatban formázd a tömeget 2 tizedes jegy pontosan. Ha kell kerekíts a legközelebbi egészre.
       A matamatikai kerekítés szabályait használd. Ha valahol egész érték van, ott is legyen a 00 kiiratva
       az egész érték után .
       Formázd a dátumot az alábbi formátumba: 1990. 01. 02. 
       */

function format(objMeteorits) {
    math.round(objMeteorits.mass);
}

var datum = newDate;
datum.set.FullYear(objMeteorits.year);
document.getElementById()
/*
3. A táblázat fejlécére kattintva növekvő sorrendbe lehessen rendezni a táblázat adatait az alábbi
       meteorit tulajdonságok szerint: id, mass, name, és reclass.
       Az id és a mass szerinti rendezés számok alapján rendezzen.
       */
//--------------------------------------------------------------------------------------------------------------------
/* Pszeudo kód a 3. feladathoz:

- megkeresem a kulcsok alapján (id, mass, name, reclass) a megfelelő adatokat a json file-ban
- lineáris rendezési algoritmust használok
- az objektum id, mass, name és reclass kulcsaira hivatkozva kinyerem az adatokat egy for ciklussal
- egy másik for ciklussal összehasonlítom az első elemet az utána következő össze többi elemmel
*/

document.getElementById('bolygok').addEventListener = {
    for (var i = 0; i < objMeteorits.length[id]; i++)
        for (var j = i + 1; j < objMeteorits.length; j++);
}

document.getElementById('bolygok').addEventListener = {
    for (var i = 0; i < objMeteorits.length[mass]; i++)
        for (var j = i + 1; j < objMeteorits.length; j++);
}

document.getElementById('bolygok').addEventListener = {
    for (var i = 0; i < objMeteorits.length[name]; i++)
        for (var j = i + 1; j < objMeteorits.length; j++);
}

document.getElementById('bolygok').addEventListener = {
    for (var i = 0; i < objMeteorits.length[reclass]; i++)
        for (var j = i + 1; j < objMeteorits.length; j++);
}

/*
4. Valósítsd meg a rendezést úgy, hogy nem csak növekvő, hanem csökkenő sorrendbe is lehessen az adatokat rendezni.
Ha az adatok még nincsenek rendezve, akkor az adott fejlév / tulajdonság alapján növekvő sorrendbe rendezze az adatokat kattintásra.
Amennyiben még egyszer ugyanarra a fejlécre kattintanak, akkor a sorrend legyen csökkenő.És így tovább....
Amennyiben egy új fejlécre kattintanak, először mindig növekvő sorrend szerint legyenek az adatok rendezve.
*/

document.getElementById('bolygok').addEventListener = {
    for (var i = 0; i < objMeteorits.length[id]; i++);
    for (var j = i + 1; j < objMeteorits.length; j++);
}




/*
5. A táblázat alá az alábbi adatokat ki kell iratni/számolni:

        Az összes meteorit összsúlya
        A legkönyebb meteorit súlya
        A legnehezebb meteorit súlya
        A meteoritok súlyának átlaga
        Hány darab meteorit csapódott be 1990-ben
        Hány darab meteorit súlya legalább 10000

*/

/* ezek a tömböknél használatos alapműveletek*/

var sum() {
    for (var i = 0; objMeteorits.length; i++)
        sum += objMeteorits[i];
}

var min() {
    for (var i = 0; objMeteorits.length; i++)
        min = objMeteorits[i];
}

var max() {
    for (var i = 0; objMeteorits.length; i++)
        max = objMeteorits[i];
}

var average() {
    for (var i = 0; objMeteorits.length; i++)
        atlag = objMeteorits[i].sum / 2;
}

var meteorits90 {
    for (var i = 0; objMeteorits.length; i++)
        meteorits90 = objMeteorits.year[i];
}

var meteoritsWeight {
    for (var i = 0; objMeteorits.length; i++)
        meteoritsWeight >= objMeteorits.mass[i];
}

/* 
    A kapott JSON file a Föld-be csapódott meteoritok adatait tartalmazza.

    FELADATOK:
    1. Írasd ki egy táblázatba a következő adatait a meteoritoknak:
        id
        mass
        name
        nametype
        recclass
        reclat
        reclong
        year

     Pozitív, ha ezeket az elemeket nem az innerHTML segítségével hozod létre. 

    2. A táblázatban formázd a tömeget 2 tizedes jegy pontosan. Ha kell kerekíts a legközelebbi egészre.
       A matamatikai kerekítés szabályait használd. Ha valahol egész érték van, ott is legyen a 00 kiiratva
       az egész érték után .
       Formázd a dátumot az alábbi formátumba: 1990. 01. 02. 
    
    3. A táblázat fejlécére kattintva növekvő sorrendbe lehessen rendezni a táblázat adatait az alábbi
       meteorit tulajdonságok szerint: id, mass, name, és reclass.
       Az id és a mass szerinti rendezés számok alapján rendezzen.

    4.  Valósítsd meg a rendezést úgy, hogy nem csak növekvő, hanem csökkenő sorrendbe is lehessen az adatokat rendezni.
        Ha az adatok még nincsenek rendezve, akkor az adott fejlév/tulajdonság alapján növekvő sorrendbe rendezze az adatokat kattintásra.
        Amennyiben még egyszer ugyanarra a fejlécre kattintanak, akkor a sorrend legyen csökkenő. És így tovább....
        Amennyiben egy új fejlécre kattintanak, először mindig növekvő sorrend szerint legyenek az  adatok rendezve.

    5. A táblázat alá az alábbi adatokat ki kell iratni/számolni:

        Az összes meteorit összsúlya
        A legkönyebb meteorit súlya
        A legnehezebb meteorit súlya
        A meteoritok súlyának átlaga
        Hány darab meteorit csapódott be 1990-ben
        Hány darab meteorit súlya legalább 10000

        Ezeket az elemeket ne az innerHTML segítségével hozd létre. Használd az ismert node metódusokat. KÖTELEZŐEN!

    6. Legyen szép a táblázat és az adatok. HAsználj CSS-t a formázáshoz.

    7. Töltsd fel az elkészült fileokat egy github repoba, és küld el a repo elérhetőségét.

    8. Szusszanj egyet.

*/