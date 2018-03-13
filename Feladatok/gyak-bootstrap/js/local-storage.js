//local storage-ban dirketben turkálok - ezt használjuk már


class Items {
    // kiolvaasom és beteszem egy változóba
    // ha session storage-al szeretném ezt, akkor this.item = [];

    constructor() {
        // ha a local storage-ban már vannak termékek, akkor parse-olva beleteszi, ha nem, akkor üres tömb

        if (typeof Items.instance === "object") {
            return Items.instance;
        }

        Items.instance = this;
        return this;
    }
    // létrehozom a name és a price tulajdonságokat


    create(item) {


    }

    read(id) {

    }


    // fapados megoldás - 
    update(item) {

    }


    delete(id) {


    }


    save() {

        localStorage.setItem('items', JSON.stringify(this.items));

    }


    checkItemIfExist(id) {

        let item = this.items.filter(el => el.id == id);
        return item.length == 0 ? false
    }



    let items = new Items();
    items.create({
        id: '001',
        name: 'termék0',
        price: 121
    });





    // update, delete method megírása
    // ellenőrzések - create - csak akkor hozza létre az új elemet, ha még nincs ilyen ID-jú elem
    // legyen ez is singleton pattern