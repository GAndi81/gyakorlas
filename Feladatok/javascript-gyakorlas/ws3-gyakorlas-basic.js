////Javascript - BASIC

// 1. feladat:
/*Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
Click me to see the solution*/

// Today is : Friday. 
//Lépések:


/*
var today = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

document.getElementById('today').innerHTML = ('Today is : ' + days[today.getDay()]);

//Current time is : 4 PM : 50 : 22
//Lépések:

var hour = today.getHours();
var hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var minute = today.getMinutes();
var minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
var second = today.getSeconds();
var seconds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

document.getElementById('hour').innerHTML = hour;
document.getElementById('minute').innerHTML = minute;
document.getElementById('second').innerHTML = second;

console.log('Current time is: ' + hour + (':') minute + (':') second);

*/

//2. Write a JavaScript program to print the contents of the current window.
/*
function printWindow() {
    window.print('print');
}*/

/*
3. Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/
/*
var today = new Date;
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

console.log(mm + '-' + dd + '-' + yyyy);
console.log(mm + '/' + dd + '/' + yyyy);
console.log(dd + '-' + mm + '-' + yyyy);
console.log(dd + '/' + mm + '/' + yyyy);
*/

//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.(Heron formula)
/*
var a = 5;
var b = 6;
var c = 7;
var s = (a + b + c) / 2;
var A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(A);
*/

//5. Write a JavaScript program to rotate the string 'w3resource' 
//in right direction by periodically removing one letter from the end of the string and attaching it to the front.


function rotate(str) {

    var splitString = str.split('');

    return splitString;
}


console.log(rotate('w3resource'));