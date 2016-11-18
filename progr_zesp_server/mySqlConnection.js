// /* 
// Usuful link (decribed below instructions):
// https://www.sitepoint.com/using-node-mysql-javascript-client/
// */
var mysql = require("mysql");

var con;
// First you need to create a connection to the db
function setConnectionInfo () { 
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "room_reservation" 
    });
    
	console.log("setConnectionInfo ");
}

// connectDB();
var counter = 0;
// connect to Database 
function connectDB () {
    return new Promise (function(resolve, reject) {

        con.connect(function(err){
            counter++;
            console.log("counter " + counter);
            if(err){
              console.log('Error connecting to Db');
              reject(err);
            }
            console.log('Connection established');
            resolve(true);
        });
    });
}

// get data 
function select (query) {
    query = query || 'SELECT * FROM users';
    console.log("query " + query);
    return new Promise (function (resolve, reject) {
        con.query(query, function(err,rows) {
            if(err) {
                console.log('select reject')
                reject(err);
            } else {
                console.log('select resolve, data received from Db:\n');
                console.log(rows);
                resolve(rows);
            }
        });
    });
}

// insert data to db
function insert (query, data) {
    query = query || 'INSERT INTO users SET ?'; 
    data = data || { name: 'Winnie', login: 'winnie_login', pass: 'password', surname: 'The Pooh', room: 104, email: 'WinnieThePooh@100milesWood.mw', phone: 044444444, admin_privilage: 0 };
    return new Promise (function (resolve, reject) {
        con.query(query, data, function(err,res){
            if(err) {
                reject();
            } else {
                resolve(res);
                console.log('Last insert ID:', res.insertId);
            }

        });
    });
}

// update data 
function update (query, data) {
    query = query || 'UPDATE users SET room = ? Where ID_user = ?';
    data = data || [1005, 6];
    con.query(query, data,
        function (err, result) {
            if (err) throw err;

            console.log('Changed ' + result.changedRows + ' rows');
        }
    );
}

// delete data
function remove (query, data) {
    query = query || 'DELETE FROM users WHERE ID_user = ?';
    data = data || [8];
    con.query(query, data,
        function (err, result) {
            if (err) throw err;

            console.log('Deleted ' + result.affectedRows + ' rows');
        }
    );
}

// end connection
function endConnection () {
    console.log("Connection ended");
    con.end(function(err) {
        console.log(err);
        // The connection is terminated gracefully
        // Ensures all previously enqueued queries are still
        // before sending a COM_QUIT packet to the MySQL server.
    });
}	
module.exports = {
     setConnectionInfo: setConnectionInfo,
     connectDB: connectDB,
     select: select,
     insert: insert,
     update: update,
     remove: remove, 
     endConnection: endConnection
}