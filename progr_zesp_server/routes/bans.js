module.exports = function(app, database) {

     app.post('/bans', function(req, res) {
            var data = req.body.data;
            console.log("ban ");
            console.log(JSON.stringify(data));
            res.setHeader('Content-Type', 'application/json');
            database.connectDB()
                .then (function (result) {
					  database.select("SELECT ID_user FROM users WHERE login="+data.username)
                        .then(function (username) {
                            if (username.length > 0) { 
							console.log("results ", username);
                            } 
                        }, function (err) {
                            console.log("select error !!!! " + err); // wyst¹pi³ b³¹d mySQL'a
                        });
						database.select("SELECT ID_room FROM rooms WHERE name="+data.roomname)
                        .then(function (roomname) {
                            if (roomname.length > 0) { 
							console.log("results ", roomname);
                            } 
                        }, function (err) {
                            console.log("select error !!!! " + err); // wyst¹pi³ b³¹d mySQL'a
                        });
						addBan(data, username, roomname);
                    database.setConnectionInfo();
                    // database.endConnection()
                   
                    }, function (err) { 
                        res.send({ end: true });
                        database.setConnectionInfo();
                        console.log("err " + err);
                    }

            );
        });
	
        function addUser (banData,uName, rName) {
            console.log("addUser");
            var query = 'INSERT INTO bans(ID_user, ID_room, date_start, date_stop, notes) VALUES (?)';
            var data = { 
                username: uName, 
                roomname: rName, 
                date_start: banData.banStart,
				date_stop: banData.banStop,
				notes: banData.notes
            }
            return new Promise (function (resolve, reject) {
                database.insert(query, data)
                .then(function (result) {
                    console.log("INSERT result " + JSON.stringify(result));
                    resolve(result);
                    // database.endConnection();
                }, function (err) {
                    console.log("INSERT error " + err);
                    reject(err);
                    // database.endConnection();
                });
            })
            
        };
    };
