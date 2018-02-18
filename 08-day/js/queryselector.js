//console.log(document.getElementById('para'));

//console.log(document.querySelector('div .para1'));

//console.log(document.querySelectorAll('p'));


var elements = document.querySelectorAll('p');
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = 'hello';
    //elements[i].id = 'p-' + i;
    // hozzá lehet így férni minden tulajdonsághoz
}