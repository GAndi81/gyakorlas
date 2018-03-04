/*1. getJSsonContent() függvény --> ami visszaadja a JSON fájlt
2.sortByName() függvény --> név szerint rendezi az adatokt
3. deleteDeadCharacter() függvény --> törli a halott karaktereket
4. generateGrid() függvény --> legenerálja a 6*8-as karakterhalmazt a html oldalra
5. addEventlistenerForGridElement() függvény --> az egyes képekhez eseménykezelőt ad
writeCharacterData() --> a kiválasztott karakter adatait megjeleníti a jobb oldali sávban
searchByName() függvény --> név szerint rákeres a karakterre

ezek közül meghívjuk a 
getJsonContentet, ami automatikusan meghívja a 
delete, a sort és a generateGrid függvényeket, 
a generateGrid meghívja az addEventlisteneres függvényt, ami meghívja a write Character nevű függvényt, 
a searchByName függvényt is azt hiszem h. a getJsonContent függvény hívja meg, 
ez a searchByName pedig meghívja szintén a writeCharacterData függvényt*/

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
    var userDatas = JSON.parse(xhttp.responseText);

    getData('json/characters.json', successAjax);


    var getJsonContent = (function () {

                function sortByName(data) {
                    data.sort(function (a, b) {
                            var nameA = a.name.toLowerCase();
                            var nameB = b.name.toLowerCase();
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            return 0;
                        }
                    }
                }

                function deleteDeadCharacter() {
                    var deadCharacter = function () {
                        if (searchByName.dead === '');
                    }
                }

                function generateGrid() {
                    function createDiv(data, name, imgSource, id) {
                        var leftMainDiv = document.getElementById('leftMain');
                        var newDiv = document.createElement('div');
                        var newPara = document.createElement('p');
                        var newImg = document.createElement('img');

                    })(data, id);
            }

            function addEventlistenerForGridElement() {
                (function () {
                        newImg.addEventListener('click', function () {
                            characterDetails(data, id);
                        });
                    }

                    function writeCharacterData() {

                    }

                    function searchByName() {

                    }

                    // Reveal public pointers to
                    // private functions and properties

                    return {

                    };

                })();