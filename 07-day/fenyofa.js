//Háromszög (művésznevén fenyőfa az ajtó takarásából)
//Rajzolj ki a felugró ablakban egy háromszöget *-okból. Kérd be hozzá a méretét beviteli mezőkben. Pl. ha a mérete: 5, akkor


function fenyofa() {
    var theCar = '*'
    var theNumber = parseInt(document.querySelector('#fenyofa').value);
    var output = '';

    for (var i = 0; i < theNumber; i++) {
        output += theCar.repeat(theNumber) + '\n\r';
    }
    console.log(output);

}