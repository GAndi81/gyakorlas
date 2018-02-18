var i,
    evenRows = [];
var Gamers = [{
        'name': 'Tom',
        'age': 1,
        points: 33,
        country: 'GB'
    },
    {
        'name': 'Joe',
        'age': 12,
        points: 210,
        country: 'US'
    },
    {
        'name': 'Marc',
        'age': 5,
        points: 11,
        country: 'GER'
    },
    {
        'name': 'Bence',
        'age': 9,
        points: 99,
        country: 'HU'
    },
    {
        'name': 'Peti',
        'age': 8,
        points: 201,
        country: 'HU'
    },
    {
        'name': 'Levi',
        'age': 15,
        points: 178,
        country: 'HU'
    }
];

Gamers.forEach(function (gamer) {
    var tbody = document.getElementsByTagName('tbody')[0];

    tbody.innerHTML += '<tr>' +
        '<td>' + gamer.name + '</td>' +
        '<td>' + gamer.age + '</td>' +
        '<td>' + gamer.points + '</td>' +
        '</tr>';

});

// Innen jössz te:
var sum = 0;
var ageCell = document.getElementById('ageCell');
for (var i = 0; i < Gamers.length; i++) {
    var gamer = Gamers[i];
    sum += gamer.age;
}
ageCell.innerHTML = sum;

var pointsCell = document.getElementById('pointsCell');
for (var i = 0; i < Gamers.length; i++) {
    var points = Gamers[i];
    sum += gamer.points;
}
pointsCell.innerHTML = sum;

var evenRows = document.querySelectorAll('tr:nth-child(even)');

alert(evenRows);




//Ezt hagyd meg a végén:

for (i = 0; i < evenRows.length; i++) {
    evenRows[i].style.background = '#ccc';
}