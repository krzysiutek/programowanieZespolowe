module.exports = function(app, database) {

        app.post('/users', function(req, res) {
            res.setHeader('Content-Type', 'application/json');
            
            res.send({ dupa: 'dupa'});
            // app.connectDB();
            console.log("dupa dupa dupa users")
        });

        app.get('/users', function(req, res) {
            console.log("dupa dupa dupa get" + req)
            res.setHeader('Content-Type', 'application/json');
            res.send({ dupa: 'dupa'} );
            // app.connectDB();
            // console.log("dupa dupa dupa")
        })

    };
