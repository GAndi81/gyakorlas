var csoport = [{

        firstName: 'Ági',
        lastName: 'Wass',
        age: 16

    },
    {
        firstName: 'Barbi',
        lastName: 'Kelencsi',
        age: 20
    },
    {
        firstName: 'Peti',
        lastName: 'Poter',
        age: 12

    }, {

        firstName: 'Attila',
        lastName: 'Papp',
        age: 22

    }, {

        firstName: 'Ede',
        lastName: 'Korszakos',
        age: 30

    }, {

        firstName: 'Lehel',
        lastName: 'Boter',
        age: 15
    }
];

var kiskoru = [];

for (var i = 0; i < csoport.length; i++) {
    if (csoport[i].age > 18) {
        kiskoru.push(csoport[i]);
    }
}
console.log(kiskoru);