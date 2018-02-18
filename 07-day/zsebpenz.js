//----------------------------------------------------------------------------------------------

/*Zsebpénz
Egy kamaszfiú szülei X Ft zsebpénzt adtak a fiuknak. 
A fiú 500 Ft-ot költött az első napon, majd minden rákövetkező napon 100 Ft-tal többet, mint az előző nap. 
Számold ki, hogy ha így folytatja, akkor hány napig tud így költekezni és mennyi pénze marad. 
Jelenítsd meg a kapott eredményt egy felugró ablakban.*/

var zsebpenz = 10000;
var koltes = 500;
var nap = 0;

while (zsebpenz >= koltes) {
    zsebpenz -= koltes;
    koltes += 100;
    nap++
}

console.log(zsebpenz, nap);