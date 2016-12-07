module.exports = function(app, database) {

        app.post('/login', function(req, res) {
            var data = req.body.data;
            console.log("login ");
            console.log(JSON.stringify(data));
            // var target = req;
            // for (var k in target){
            //     if (target.hasOwnProperty(k)) {
            //          console.log("Key is " + k + ", value is" + target[k]);
            //     }
            // } 
            // console.log('==============================' + JSON.stringify(req.params) + ' query ' +JSON.stringify(req.query) + 
            //     ' \nbody ' + JSON.stringify(req.body));
            // database.endConnection();
            res.setHeader('Content-Type', 'application/json');
            database.connectDB()
                .then (function (result) {

                    var username = data.username;

                    database.select('SELECT * FROM users WHERE login = "' + username + '"')
                        .then(function (result) {
                            console.log("result selecta " + (result.length ? result[0].ID_user : 'empty list of users'));
                            if (result.length > 0) { // jeśli length > 0 oznacza to, że taki user już istnieje 
                                // SPRAWDZIC JESZCZE CZY SIE HASLO ZGADZA!!!
                                result[0].userExist = true;
                                res.send(result);
                                console.log("User exist in DB ");
                            } else if (!result.length) {
                                res.send({ userExist: false });
                                console.log("user NOT exist in DB");
                            } else {
                                console.log("ERror ocusers");
                                //zapisac do bazy i zwrocic ze sie zarejestrowal
                            }
                        }, function (err) {
                            console.log("select error !!!! " + err); // wystąpił błąd mySQL'a, czyli nie ma takiego użytkownika w bazie -> dodaj
                            res.send({ end: true });
                        });
                    database.setConnectionInfo();
                    // database.endConnection();
                    }, function (err) { 
                        res.send({ end: true });
                        database.setConnectionInfo();
                        console.log("err " + err);
                    }

            );
        });

        // function addUser (userData) {
        //     console.log("addUser");
        //     var query = 'INSERT INTO users SET ?';
        //     var data = { 
        //         name: userData.name || 'Andrzej', 
        //         login: userData.username || 'login' , 
        //         pass: userData.password || 'password', 
        //         surname: userData.surname || 'The Pooh', 
        //         room: userData.room || 104, 
        //         email: userData.email || 'WinnieThePooh@100milesWood.mw', 
        //         phone: userData.phone || 044444444, 
        //         admin_privilage: 0 
        //     }
        //     return new Promise (function (resolve, reject) {
        //         database.insert(query, data)
        //         .then(function (result) {
        //             console.log("INSERT result " + JSON.stringify(result));
        //             resolve(result);
        //             // database.endConnection();
        //         }, function (err) {
        //             console.log("INSERT error " + err);
        //             reject(err);
        //             // database.endConnection();
        //         });
        //     })
            
        // };
        // app.get('/registration', function(req, res) {
        //     console.log("registration");
        //     database.connectDB();


        //     res.setHeader('Content-Type', 'application/json');
        //     res.send({ dupa: 'dupa'} );
        //     // app.connectDB();
        //     // console.log("dupa dupa dupa")
        // })

    };
