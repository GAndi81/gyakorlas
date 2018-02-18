//Hátultesztelős ciklus - lefut akkor is, ha hamis a feltétel, de csak egyszer, mert először csinálja, utána van a feltétel.
/*
var i = 100;
do {
    console.log(i);
    i++;
}
while (i < 10);*/

var tomb = ['első', 'második', 'harmadik'];
for (var i = 0; i < tomb.length; i++) {
    console.log(tomb[i]);
}