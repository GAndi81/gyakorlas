var userMail = [{
        email: 'baratheon@got.com',
    },
    {
        email: 'bolton@got.com',
    },
    {
        email: 'florent@got.com',
    },
    {
        email: 'lennister@got.com',
    },
    {
        email: 'martell@got.com',
    },
    {
        email: 'redwyne@got.com',
    },
    {
        email: 'stark@got.com',
    },
    {
        email: 'umber@got.com',
    },
    {
        email: 'tully@got.com',
    },
    {
        email: 'targaryen@got.com',
    }
];

var userPassword = [{
        password: 'baratheon'
    },
    {
        password: 'bolton'
    },
    {
        password: 'florent'
    },
    {
        password: 'lennister'
    },
    {
        password: 'martell'
    },
    {
        password: 'redwyne'
    },
    {
        password: 'stark'
    },
    {
        password: 'umber'
    },
    {

        password: 'tully'
    },
    {
        password: 'targaryen'
    }
];


/*Minden alkalommal, amikor a login gombra kattintanak, ellenőrizni kell, 
    hogy a felhasználónév és a jelszó nem üres e. 
    Amennyiben üres, a login gomb fölé egy #error id - jú span elembe írjuk ki, 
    piros betűszínnel, hogy: Meg kell adnod a felhasználóneved és jelszavad.
    
    Ha nem ürresek a mezők, akkor egy függvény leellenőrzi, hogy az adott
                        felhasználónév, jelsz ópáros szerepel e a tömbben.
                        Ha igen, kiírja a LOGIN gomb fölé egy #success id-jú elembe,
                        zölden, hogy Belépve: usename.
                        (A username helyére az adott user emailjét írja ki)*/

var userEmail = document.getElementById('email');
var password = document.getElementById('password');
var empty = "";
var loginAttempts = 3;
var usename = /*adott user e-mailjet írja ki*/


    var adatBekeres = function () {
            if (userEmail && password === empty) {
                var klikk = document.getElementById('katt');
                klikk.addEventListener('click', function (event) {
                    alert('Meg kell adnod a felhasználóneved és jelszavad.');
                });
            } else(userMail && userPassword !== empty) {
                    var klikk = document.getElementById('katt');
                    klikk.addEventListener('click', function (event) {
                            alert('Belépve: ' + usename);
                        }
                    }

                    console.log(adatBekeres());

                    

                    /*
                        userName.addEventListener("input", function (event) {
                            if (userName.validity.typeMismatch) {
                                userName.setCustomValidity("I expect an e-mail, darling!");
                            } else {
                                userName.setCustomValidity("");
                            }
                        });

                    password.addEventListener("input", function (event) {
                        if (password.validity.typeMismatch) {
                            password.setCustomValidity("I expect an e-mail, darling!");
                        } else {
                            password.setCustomValidity("");
                        }
                    });

                    meg lehet ezt oldani swith case-el???


                    /*Ha a tömbünkben nincs olyan felhasználó akinek ez lenne a felhasználónév jelszó
                    párosa, a login gomb fölé egy# error id - jú span elembe írjuk ki,
                        piros betűszínnel, hogy: Hibás felhasználónév vagy jelszó.

                    Ha legalább háromszor téves felhasználónév jelszó páros lett megadva,
                    akkor a login gomb fölé egy# error id - jú span elembe írjuk ki,
                        piros betűszínnel: HÁromszor is elrontottad az adataidat, 24 órára kitiltottunk.

                    Amennyiben a user a forgott password - re kattint, ugorjon fel egy prompt,
                        amibe bekérjük a felhasználó email címét.
                    Miután ezt leokézta, ugorjon fel egy alert azzal a szöveggel, hogy az
                    új jelszó el lett küldve az email címére.
                        (Az emailt persze nem kell elküldeni)