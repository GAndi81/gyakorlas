//saját próbálkozás
/*
function keresTeam (str, strArray) {
    for (var i = 0; i < jsonContent.length; i++) {
        if (jsonContent[i].match(str)) return i;
    }
    return -1;
}*/

// első megoldás:

function getKeys() {
    var elements = document.querySelectorAll('input[type=text]');
    var searchArr = [];
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        obj.key = elements[i].dataset.key;
        obj.val = elements[i].value;
        searchArr.push(obj);
    }
    return searchArr;
}

// második megoldás első része - a kulcsokat kivenni:

return Array.from(document.querySelectorAll('input[type=text]')).map(function (x) {
            return {
                key: x dataset.key,
                val: x.value
            }
        }


        // faék megoldás:

        function getKeys() {
            return {
                "Team": document.querySelector('#Team').value,
            }
        }