//console.log(document.querySelector('#para').innerHTML);

var paragraphs = document.querySelectorAll('p');
console.log(paragraphs[0].innerHTML);

console.log(paragraphs);

var t = '';
for (var i in Object.keys(paragraphs)) {
    t += paragraphs[i].innerHTML;
}

document.querySelector('#eredmeny').innerHTML = t;