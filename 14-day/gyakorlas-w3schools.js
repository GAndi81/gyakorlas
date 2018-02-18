/*
var haromszogTerulet = function (oldal1, oldal2, oldal3) {
    var kepletElsoFele = (oldal1, oldal2, oldal3) / 2;
    var gyok = Math.sqrt(kepletElsoFele * (kepletElsoFele - oldal1) * (kepletElsoFele - oldal2) * (kepletElsoFele - oldal3));
    return gyok;
}
console.log(haromszogTerulet(11, 9, 9));
*/

/*
function forgString(String) {

    var string = '';
    for (var i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    console.log(string);
    */

/*Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Expected Output : 
60°C is 140 °F
45°F is 7.222222222222222°C 
*/

/* gyakorlás -  function(mibol, ertek)

c/5 = (f-32)/9
c = (f-32)/9*5
if else-el lehetett megoldani ----

function convertToCelsius() {
    var tempF = parseFloat(document.getElementById('tempF').value);
    var tempC = (tempF - 32) * (5 / 9);
    document.getElementById('cTemp').value = tempC;
}
console.log(convertToCelsius);

function convertToFahrenheit() {
    var tempC = parseFloat(document.getElementById('tempC').value);
    var tempF = (cTempVal * (9 / 5)) + 32;
    document.getElementById('fTemp').value = fTempVal;
}
console.log(convertToFahrenheit);

/*15. Write a JavaScript program to get the difference between a given number and 13, 
if the number is greater than 13 return double the absolute difference. 
Go to the editor Click me to see the solution*/

/*
function difference(Number) {
    if (Number > 13) {
        return (2*(Number-13))
    } else
    return 13 - Number
}
console.log(difference)
*/

/*
16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, 
then returns triple their sum.  
Go to the editor
Click me to see the solution
*/

/*
function sum(int1, int2) {
    if (int1 = int2) {
        return (3 * (int1 + int2))
    }
}
console.log(sum);
*/

/*
17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple their absolute difference if the specified number is greater than 19.  
Go to the editor
Click me to see the solution*/

//RAndomizálá:;
/*
var rands = [];
var i = 0;
while ( rands.length < 20) {
    var g = Math.floor(Math.random()* 20)
    if (!rands.includes(g))
}
*/

/*
21. Write a JavaScript program to create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" then return the original string.  
*/
/*
function createNewString() {
    var addPy = 'Py';
    string.prompt('Add the string here');
    if (string.substring(0, 2))
}

/*
26. Write a JavaScript program to create a new string from a given 
string taking the last 3 characters and added at both the front and back. 
The string length must be 3 or more.
*/

/* Functions rész - 2.

Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
Click me to see the solution*/

// aa_a_aaa__a


/*
function palindrome() {
    var string = '';
    for (var i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    console.log(palindrome);
}

function trim() {
    var trimmed = 
}
*/

/*
3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
*/

function stringAllVers(string) {
    for (var i = 0; i < stringAllVers.length; i++)
        console.log(string[i]);
    for (var j = i + 1; j < stringAllVers.length; j++)
        console.log(string[i] + string.substr(i + 1, j));
}