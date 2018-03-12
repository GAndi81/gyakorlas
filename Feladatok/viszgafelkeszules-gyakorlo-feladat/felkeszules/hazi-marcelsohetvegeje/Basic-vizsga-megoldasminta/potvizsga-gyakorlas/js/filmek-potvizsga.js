//JSON content elkérése és tartalom megjelenítése

function done(textData) {
    let json = JSON.parse(textData);
    //got = filterDead(got);
    //got = shortByName(got);
    //createView(got);
    console.log(json);
    showMoviesList(json);
}

function xhr(method, url, callWhenReady) {
    let xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = function () {
        if (xmlHTTP.readyState == 4 && xmlHTTP.status == 200) {
            callWhenReady(xmlHTTP.responseText)
        }
    }
    xmlHTTP.open(method, url);
    xmlHTTP.send();
}

xhr('GET', '/filmek.json', done);

function showMoviesList(movieArray) {
    for (let i = 0; i < movieArray.length; i++) {
        const movie = movieArray[i];
        showMovieMini(movie);
    }
}

function showMovieMini(movieObject) {
    let newDiv = document.createElement('div');
    newDiv.class = 'mini-movie';
    document.getElementById('left').appendChild(newDiv);
    
    let newImg = document.createElement('img');
    newImg.src = 
}