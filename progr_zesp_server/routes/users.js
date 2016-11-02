module.exports = function(app) {

        app.post('/users', function(req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.send({ dupa: 'dupa'});
            // app.connectDB();
            console.log("dupa dupa dupa")
        });

        app.get('/users', function(req, res) {
            console.log("dupa dupa dupa get" + req)
            res.setHeader('Content-Type', 'application/json');
            res.send({ dupa: 'dupa'} );
            // app.connectDB();
            // console.log("dupa dupa dupa")
        })

    };
