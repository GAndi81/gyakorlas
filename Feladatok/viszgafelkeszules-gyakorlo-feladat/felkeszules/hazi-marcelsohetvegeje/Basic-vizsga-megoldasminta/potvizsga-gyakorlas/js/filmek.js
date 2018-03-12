function callback(data) {
    console.log(data.responseText);
    console.log('Lefutott a callback');
}
// csak ezeket az értékeket veheti fel:
// nem kell az oldalt újratölteni - ezt azért írjuk
function ajaxReq(method, url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        switch (xmlhttp.readyState) {
            case 0:
                console.log('Nincs inicializálva a kérés.');
                break;
            case 1:
                console.log('Kapcsolat létrejött.');
                break;
            case 2:
                console.log('Kérés fogadva.');
                break;
            case 3:
                console.log('Kérés feldolgozás alatt.');
                break;
            case 4:
                console.log('Kérés feldolgozva, válasz kész.');
                if (xmlhttp.status == 200) {
                    callback(xmlhttp);
                } else {
                    console.log('Hiba' + xmlhttp.status)
                }
                break;
            default:
                console.log('Valami hülyeséget csináltam.');
        }
    }
    xmlhttp.open(method, url);
    xmlhttp.send();
}

ajaxReq('GET', '/json/characters.json');


//---------------------------------


function success(data) {
    const MOVIES = JSON.parse(data.responseText).movies;
    init(MOVIES);
}

function error(errorMessage) {
    console.log(errorMessage);
}

function checkReadyState(readyState) {
    let state = {};
    switch (readyState) {
        case 0:
            state.info = 'A kérelem nem inicializált.';
            break;
        case 1:
            state.info = 'A kapcsolat létrejött';
            break;
        case 2:
            state.info = 'Kérés fogadva';
            break;
        case 3:
            state.info = 'Kérés feldolgozás alatt.';
            break;
        case 4:
            state.info = 'Kérés feldolgozva, válasz kész.';
            break;
    }
}
//-----------------------folyt.kov

function ajaxReq(method, url) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        let state = checkReadyState(xhr.readyState);
        if (state.error) {
            error(state.error);
        } else if (!state.error && state.ready) {
            success(xhr);
        }
        console.info(state);
    }
}
xhr.open(method, url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

//------------------------------------------------

function nameToImagename(str) {
    const hunChars = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        ö: 'o',
        ő: 'o',
        ü: 'u',
        ű: 'u',
    }
    str = str.toLocaleLowerCase()
        .replace(/[áéíóöőüű]/g, c => hunChars[c])
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/[ -]+/g, '-');
    return str;
}

function getMovie(movie) {
    const ATTR_TEXT = {
        title: 'Cím',
        timeInMinutes: 'Hossz',
        premierYear: 'Premier',
        categories: 'Kategória',
        directors: 'Rendező',
        cast: 'Szereplők',
    }
    let movieElement = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">';
    movieElement += `img src="/image/covers/${nameToImagename(movie.title)}.jpg" alt=`
    for (let i in movie) {
        let movieAttribute = `<strong>${ATTR.TEXT[i]}</strong>: `;
        switch (i) {
            case 'timeInMinutes':
                movieAttribute += `${movie[i]} perc `;
                break;
            case 'directors':
            case 'categories':
                movieAttribute += movie[i].join(', ');
                break;
            case 'cast':
                movieAttribute += '<br>' + getActor(movie.cast);
                break;
            default:
                movieAttribute += movie[i];
        }
        movieElement += `<p>${movieAttribute}</p>`;
    }
    movieElement += '</div>';
    return movieElement;
}

function getActor(actors) {
    let allActors = '';
    for (var i in actors) {
        allActors += `<img src="/img/actors/${nameToImagename(actors[i].name)}.jpg"`;
        allActors += `<p>${actors[i].name} (${actors[i].characterName})</p>`;
        allActors += `<p>${actors[i].birthYear} (${actors[i].birthCountry})</p>`; // .........
    }
    return allActors;
}

function initMovies() {
    for (let i in movies) {
        document.getElementById('movies').innerHTML += getMovie(movies[i]);
        if ((parseInt(i) + 1) % 4 == 0) {
            document.getElementById('movies').removeAttribute('id');
            document.querySelector('.container').innerHTML += `<div class="row" id=""`; //..........
        }
    }
}

init();

