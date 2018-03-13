class Items {
    // kiolvaasom és beteszem egy változóba
    // ha session storage-al szeretném ezt, akkor this.item = [];

    constructor() {
        // ha a local storage-ban már vannak termékek, akkor parse-olva beleteszi, ha nem, akkor üres tömb

        if (typeof Items.instance === "object") {
            return Items.instance;
        }
        this.items = JSON.parse(localStorage.getItem('items')) || [];
        Items.instance = this;
        return this;
    }
    // létrehozom a name és a price tulajdonságokat


    create(item) {

        if (!this.checkItemIfExist(item.id)) {

            this.items.push(item); // beletettem az új elemet az adatbázisba
            this.save(); // meghívom a save-t
        }
    }

    read(id) {
        //parse-olni kell, mert a local storage text-ben tárolja az adatokat
        return this.checkItemIfExist(id) || 'A keresett elem nem található.'
    }


    // fapados megoldás - 
    update(item) {
        if (this.checkItemIfExist(id)) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].id == item.id) {
                    this.items[i] = item;
                    break;
                }
            }
        }
        this.save();
    }


    delete() {
        if (this.checkItemIfExist(id)) {
            this.items = this.items.filter(el => el.id != id);
            save();
        }

    }


    // belepakolom az elemeket majd az item tömbbe - minden egyes updatenél delete-et kell változtatni
    save() {
        // a local storage-ba visszaírja mindig az adatot
        // a stringify átkonvertálja string-be az egészet
        localStorage.setItem('items', JSON.stringify(this.items));

    }
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