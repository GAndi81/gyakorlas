function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}

// by:          melyik fejléc, azaz tulajdonság szerit rendezem az adatokat
// direction:   true esetén növekvő false esetén csükkenő sorrendű rendezés
// byNum        tömb, tartalmazza azokat a tulajdonságokat amelyek estén szmként kell rendezni
var sortData = {
    by: 'mass',
    direction: true,
    byNum: ['id', 'mass']
};

function successAjax(xhttp) {
    var data = JSON.parse(xhttp.responseText);  
    createTable(data);
    writeStatistic(data);
}

// Itt generáltatom le a th-kat tartalmazó sort
function gererateHeaders(data, headerData) {
    var tr = document.createElement('tr');
    var sortTh = ['id', 'mass', 'name', 'recclass'];
    headerData.forEach(function (element) {
        var th = document.createElement('th');
        th.textContent = element;
        // Ha olyan tulajdonság, ami szerint rendezni kell, akkor adok hozzá egy eseményfigyelőt
        if (sortTh.includes(element)) {
            th.addEventListener('click', function () {
                setSorting(data, element);
            });
        }
        tr.appendChild(th);
    });
    return tr;
}

// Dátum formázása: 1990.01.01. formátumra
function formatDate(dateValue) {
    dateValue = new Date(dateValue);
    var y = dateValue.getFullYear();
    var m = dateValue.getMonth() + 1;
    var d = dateValue.getDate();
    m = m < 10 ? '0' + m : m;
    d = d < 10 ? '0' + d : d;
    return `${y}.${m}.${d}.`;
}

// A mass formázása 2 tizedesjegyig
function formatMass(mass) {
    return parseFloat(mass).toFixed(2);
}

// Egy td legenerálása a benne lévő adattal formázással együtt
function createTd(objElement, arrElement) {
    var td = document.createElement('td');
    var element = objElement[arrElement];
    // ezt még érdemes lenne szétbontani
    if (element) {
        if (arrElement == 'year') {
            td.textContent = formatDate(element);
        } else if (arrElement == 'mass') {
            td.textContent = formatMass(element);
        } else {
            td.textContent = element;
        }
    } else {
        td.textContent = '';
    }
    return td;
}

// A tbálázat legenerálása
function createTable(data) {
    document.querySelector('body').innerHTML = '';
    // Felvettem a kilistázandó propteriket
    var dataProps = ['id', 'mass', 'name', 'nametype', 'recclass', 'reclat', 'reclong', 'year'];
    var table = document.createElement('table');
    table.appendChild(gererateHeaders(data, dataProps));
    data.forEach(function (objElement) {
        var tr = document.createElement('tr');
        dataProps.forEach(function (arrElement) {
            tr.appendChild(createTd(objElement, arrElement));
            table.appendChild(tr);
        });
        document.querySelector('body').appendChild(table);
    });
}

// A rendezést is bonstuk elemeire
// sortByNum : rendez, ha számokról van szó
// sortByTExt: rendez szövegeket
// customSortFunc: egyéni rendezést valósítja meg az előző két fügvénnyel dolgozik
// setSorting :ez végzi magát a rendezést
function sortByNum(a, b) {
    a = !a ? 0 : parseFloat(a);
    b = !b ? 0 : parseFloat(b);
    return sortData.direction ? a - b : b - a;
}

function sortByText(a, b) {
    return sortData.direction ? a.localeCompare(b) : b.localeCompare(a);
}

function customSortFunc(a, b) {
    if (sortData.byNum.includes(sortData.by)) {
        return sortByNum(a[sortData.by], b[sortData.by]);
    } else {
        return sortByText(a[sortData.by], b[sortData.by]);
    }
}

function setSorting(data, sortBy) {
    // Ha ugyanazon tulajdonság alapján rendezünk mint előzőleg, megfordítjuk a sorrendet
    if (sortData.by == sortBy) {
        sortData.direction = !sortData.direction;
    }
    // Ha NEM ugyanazon tulajdonság alapján rendezünk mint előzőleg, akkor növekvő sorrend kell
    else {
        sortData.direction = true;
        sortData.by = sortBy;
    }
    data.sort(customSortFunc);
    createTable(data);
}

// Innen jönnek a statisztikai adatok
function sumMass(data) {
    return data.map(function (obj) {
            return obj.mass ? obj.mass : 0
        })
        .reduce(function (a, b) {
            return parseFloat(a) + parseFloat(b);
        }, 0).toFixed(2);
}

function minMass(data) {
    return data.reduce(function (a, b) {
        return parseFloat(a.mass) < parseFloat(b.mass) ? a : b;
    }).mass;
}

function maxMass(data) {
    return data.reduce(function (a, b) {
        return parseFloat(a.mass) > parseFloat(b.mass) ? a : b;
    }).mass;
}

function avgMass(data) {
    return (sumMass(data) / data.filter(function (obj) {
        return obj.mass;
    }).length).toFixed(2);
}

// A filter függvényeket összes is vonhatnám, és 
// paraméterként kapná meg milyen tulajdonság miylen értékeire szűrünk
function meteoritDateFilter(data) {
    return data.filter(function (obj) {
        return obj.year && obj.year.search(/^1990/) == 0;
    }).length;
}

function meteoritMassFilter(data) {
    return data.filter(function (obj) {
        return parseFloat(obj.mass) >= 10000;
    }).length;
}

// Ez a függvény objektumklnt visszaadja a statisztikai adatokat, és a kiírandó szöveget is
function statistic(data) {
    return {
        'Az összes meteorit összsúlya': sumMass(data),
        'A legkönyebb meteorit súlya': minMass(data),
        'A legnehezebb meteorit súlya': maxMass(data),
        'A meteoritok súlyának átlaga': avgMass(data),
        'Hány darab meteorit csapódott be 1990-ben': meteoritDateFilter(data),
        'Hány darab meteorit súlya legalább 10000': meteoritMassFilter(data)
    }
}

// A statisztikai adatok kiirását végző fügvény
function writeStatistic(data) {
    var stat = statistic(data);
    for (var i in stat) {
        var p = document.createElement('p');
        p.textContent = `${i} : ${stat[i]}`;
        document.body.appendChild(p);
    }
}

getData('/js/meteorits.json', successAjax);