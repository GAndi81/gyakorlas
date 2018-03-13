// Users létrehozása - singleton pattern; CRUD, egy példányt tudok létrehozni

/*class Users {
    constructor(age) {
        if (typeof Users.instance === "object") {
            return Users.instance;
            //megnzi, ha van a usersnek instance nevű tulajdonsága
            // ha van, akkor visszatér vele
        }
        this.age = age;
        Users.instance = this;
        return this;
        // ha nincs, akkor létrehozza és úgy tér vissza vele
    }
}

const PITYUKA = new Users(10); // létrehoz*/

class Users {
    constructor() {
        if (typeof Users.instance === "object") {
            return Users.instance;

        }
        this.db = [];
        Users.instance = this;
        return this;

    }
    // le tudom kérni az összes user adatait
    index() {
        return this.db;
    }

    //a create egy új usert el fog tárolni a db tömbben
    create(firstname, lastname, age) {
        let newUser = {
            firstname: firstname,
            lastname: lastname,
            age: age
        };
        this.db.push(newUser);

    }
    // adott ID-jú user adatainak lekérdezése - GET
    read(id) {
        let exists = this.checkUserIfExist(id);
        if (exists) {
            return this.db[id];
        }
        return `Nem elérhetők a  ${id} azonosítójú user adatai, mert nem létezik a felhasználó.`;
    }
}


// adott ID-jú user adatait módosítja - PUT / PATCH
update(id, obj) {

    if (this.checkUserIfExist(id)) {
        for (let i in obj) {
            if (this.db[id].hasOwnProperty(i)) { // megnézni, hogy az adott IDjú elemben van -e az adott elemnek ilyen propertyje
                this.db[id][i] = obj[i];
            }
        }
        return this.db[id]; // rögtön meg tudjuk nézni, hogy megtörtént-e a módosítás
    }
    return `Nem módosíthatóak a ${id} azonosítójú adatai, mert nem létezik a felhasználó.`;
}


// egy user törlése
delete() {
    this.db[id] = {};
    return this.db[id];

}


checkUserIfExist(id) {

    /*[1,2,3,4,5]
    length = 5;
    maxIndex = 4*/
    //maxMegadhatoID = 4;

    if (this.db.length <= id || Object.keys(this.db[id]).length == 0) {
        // ezt megnézni otthon, hogy működik is
        return false;
    }
    return true;
}


// minden egyes elemhez hozzáadok egy új oszlopot
addColumn(columnName, defaultValue) {
    // prop vizsgálat - 
    for (let i in this.db) {
        if (this.checkUserIfExist(i)) {
            this.db[i][columnName] = defaultValue;
        }

    }
}



const USERS = new Users();
USERS.create('Gergely', 'Gáll', 33);
USERS.create('Ági', 'Bata', 23);
USERS.create('Péter', 'Gerbics', 55);
// meghívom a newUsert

USERS.update(0, {
    lastname: 'Kováts'
})