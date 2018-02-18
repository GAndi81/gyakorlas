//Napok és hónapok
//Készíts egy lenyíló listát a hónapok neveivel. 
//Gomb megnyomására írd ki, hogy a kiválasztott hónapban hány nap van. Használj switch utasítást!


function calendar() {
    var ev = parseInt(document.getElementById('year').value);
    var honap = parseInt(document.getElementById('honapok').value);

    //A breakeket mindig ki kell rakni!!
    switch (honapok) {

        case 1:
            console.log('31');
            break;
        case 2:
            console.log(ev % 4 == 0 && ev % 100 != 0 || ev % 400 == 0 ? 29 : 28);
            break;
        case 3:
            console.log('31');
            break;
        case 4:
            console.log('30');
            break;
        case 5:
            console.log('31');
            break;
        case 6:
            console.log('30');
            break;
        case 7:
            console.log('31');
            break;
        case 8:
            console.log('31');
        case 9:
            console.log('30');
        case 10:
            console.log('31');
        case 11:
            console.log('30');
        case 12:
            console.log('31');
        default:
            console.log('Ez mi ez?');

    }
}