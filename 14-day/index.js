function searchFunc() {
    var search = document.querySelector('#search').value;
    var key = document.querySelector('#key').value;
    var found = [];
    for (var i = 0; i < jsonContent.length; i++)
        if (jsonContent[i][key].toLowerCase().indexOf(search) !== -1) {
            //nem mindegy itt lower case-nél a sorrend! - mindig a lower case legyen elöl
            found.push(jsonContent[i]);
        }

    //ezt a keresést array filterrel átírni
}
console.log(found);

function createTable(datas) {
    var table = '';
    for (var i = 0; i < datas.length; i++)
        table += '<tr>';
    for (var j in datas[i]) {
        table += `</td>{datas[i][j]} </td>`;
    }
    table += '</td>';




    /*
        document.querySelector('#keres').addEventListener('click', searchFunc);

        //behívom a HTML-ből annak az inputnak az értékét, amit beírnak

        var barmi = document.getElementById('barmi').onclick = function kereses(Team) {

                //megnézem, mit választott ki a user - eloszor csak egyen próbáljuk ki

                var search = document.querySelector('#select').value;
                var key = document.querySelector('#key').value;

                // a tömb Team kulcsú elemein végigfutok

                for (var i = 0; i < jsonContent.length; i++)
                    Team = jsonContent[i];

                // ha a Team kulcsú tömbben bármi tartalmazza a beírtakat, akkor jelenjen meg

                if (jsonContent[i] == 'barmi') {
                    // egyébként írja ki, hogy nem talált
                } else {
                    console.log('Nincs ilyen érték');
                }
                // írassam ki a függvényt

                console.log(kereses)
                */