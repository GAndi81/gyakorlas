"use strict"

class Users {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }
    sayMyName() {
        return `Szervusz, én ${this.lastname} ${this.firstname} vagyok.`;
    }
    static compareUsersAge(a, b) {
        return a.age > b.age ? a : b;
        //statikus metódus - osztályokhoz kötődik, csak úgy is tudjuk meghívni
        //összehasonlításra tudjuk használni
    }
}

/*let user2 = new Users('Linda', 'Dubéczi', 18)
let user1 = new Users('Gergely', 'Gáll', 24)
console.log(user1);
console.log(user2);*/

class Student extends Users {
    constructor(firstname, lastname, age, pay) {
        super(firstname, lastname, age);
        //a szülő osztálynak a konsctruktorát hívja meg itt a super
        // mindig együtt jár az extends-el? igen
        // ezeket lehet this-el is megírni a super helyett
        this.pay = pay;
    }
    sayMyName() {
        return 'Mivan mivan mivan';
    }
}

class Teacher extends Users {
    constructor(firstname, lastname, age, drink) {
        super(firstname, lastname, age);
        this.drink = drink;
    }
    soberTeacher() {
        return `Józan vagyok ${super.sayMyName()}`;
        // kiírja ezt és meghívjuk a szülőnek a (Users metódusát is) - Józan vagyok szervusz én Dabosi Andi vagyok. - ez lesz az eredmény.
        // super mindig egy szülőig megy föl
    }
}

let student1 = new Student('Zsombor', 'Böle', 25, true);
let student2 = new Student('Ertsey', 'Réka', 23, false);

let teacher1 = new Teacher('Andi', 'Dabosi', 22, true);
let teacher2 = new Teacher('Pali', 'Hajas', 27, false);

// Usersből öröklik ezeket a propertyket, ezért meg tudom hívni a sayMyName metódust
// ahogy lett a Studentnek saymyname metódusa, akkor már azt hozza ki console log-ban. Ha nem lett volna, ment volna fölfelé.


// Objektumorientált programozás alapelvei:

// Polimorfizmus - többalakúság, ugyanazon metódusok teljesen eltérő viselkedést mutatnak, (akár szülő-gyerek kapcsolatban is)
// Öröklődés - js-ben prototipus alapú öröklődést valósít meg - belső referencia / prototípus láncon belül / max. a globális objekumig megy fel
// Egységbe zárás - Encapsulation
// Absztrakció - a való világ lemodellezése elvont módon

// ezeket megnézni a neten
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS - ezt elolvasni otthon

