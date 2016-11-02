module.exports = function(app, database) {

        app.post('/registration', function(req, res) {
            console.log("registration");
            // database.endConnection();
            var isDBConnected = database.connectDB()
                .then (function (result) {
                    console.log("result " + result);
    
                    database.select('SELECT * FROM users WHERE login = "a"') // do zmiany na login z data req lub res
                        .then(function (result) {
                            console.log("result selecta " + result);
                            if (result) { // jesli login z req lub res jest juz to zwroc blad lub cos takiego
                                res.setHeader('Content-Type', 'application/json');
                                res.send({ dupa: 'dupa'});
                        
                                console.log("dupa dupa dupa") // wyslac ze takie dane istnieją
                            } else {
                                //zapisac do bazy i zwrocic ze sie zarejestrowal
                            }
                        });
                    
                    // database.endConnection();
                }, function (err) { 
                    // database.endConnection();
                    console.log("err " + err);
                }

            );

            // res.setHeader('Content-Type', 'application/json');
            // res.send({ dupa: 'dupa'});
    
            // console.log("dupa dupa dupa")
        });

        // app.get('/registration', function(req, res) {
        //     console.log("registration");
        //     database.connectDB();


        //     res.setHeader('Content-Type', 'application/json');
        //     res.send({ dupa: 'dupa'} );
        //     // app.connectDB();
        //     // console.log("dupa dupa dupa")
        // })

    };
