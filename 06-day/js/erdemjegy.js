alert();
var erdemjegy = parseInt(prompt('Adj meg egy számot 1 és 5 között'));

/*
if (erdemjegy === 1) {
    console.log('Elegtelen');

} else if (erdemjegy === 2) {
    console.log('Elegseges');

} else if (erdemjegy === 3) {
    console.log('Közepes');

} else if (erdemjegy === 4) {
    console.log('Jól megfelelelt');

} else if (erdemjegy === 5) {
    console.log('Kitűnő');
} else {
    console.log('Ez nem egy érdemjegy');
}
------------------------------------------------------------------------------
console.log(erdemjegy, typeof erdemjegy);

if (Number.isNaN(erdemjegy) || erdemjegy < 1 || erdemjegy > 5) {
    console.log('Ez nem egy 1 és 5 közötti szám');
} else {
    console.log('Ez egy 1 és 5 közötti szám');
}
--------------------------------------------------------------------------------
var choice = confirm('Szeretnél hazamenni?');
console.log(choice);

--------------------------------------------------------------------------------
*/

switch (erdemjegy) {
    case 1:
        console.log('Jeles');
        break;
    case 2:
        console.log('Elégséges');
        break;
    case 3:
        console.log('Közepes');
        break;
    case 4:
        console.log('Jó');
        break;
    case 5:
        console.log('Kitűnő');
        break;
    default:
        console.log('Ez nem egy érdemjegy');

}