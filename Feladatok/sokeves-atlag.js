var sokevesatlagHomerseklet = 1;
var maiHomerseklet = 3;
var atlagtolValoElteres = sokevesatlagHomerseklet - maiHomerseklet;
var aktualisHomerseklet = 2;

//document.querySelector('#atlagtol-valo-elteres').innerHTML= atlagtolValoElteres;

var htmlElement = document.querySelector('#atlagtol-valo-elteres');
htmlElement.innerHTML = atlagtolValoElteres;


document.querySelector('#aktualis-homerseklet').innerHTML = maiHomerseklet;