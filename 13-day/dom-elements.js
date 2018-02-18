$.getJSON('/json/players.json', function (result) {
    var tbody = document.querySelector('#tbody');

    function buildRow(player) {
        return '<tr>' +
            '<td>' + player.name + '</td>' +
            '<td>' + player.position + '</td>' +
            '<td>' + player.club + '</td>' +
            '</tr>';
    }

    tbody.innerHTML = (result.map(buildRow).join(''));
    playersLoaded();
});

//Innen jössz te!

Element.prototype.show = function colorMe() {
    this.innerText === 'Goalkeeper'
};

//Ehhez már ne nyúlj!
function playersLoaded() {
    var middleColumn = document.querySelectorAll('#tbody>tr>td:nth-child(2)');
    for (var i = 0; i < middleColumn.length; i++) {
        middleColumn[i].colorMe && middleColumn[i].colorMe();
    }
}