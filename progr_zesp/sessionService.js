'use strict'

app.factory('sessionService', function($http) {
    var Session = {
        data: {},
        saveSession: function(loginData) { 
            var sessionData = {
                username: loginData.username,
                logged: loginData.logged, 
                time: new Date().getTime()
            }
            localStorage.setItem('sessionData', JSON.stringify(sessionData));
            Session.data = sessionData;
        },
        updateSession: function() { 
            Session.data = JSON.parse(localStorage.getItem('sessionData'));
        },
        logout: function () {
            Session.data.logged = false;
            localStorage.removeItem('sessionData');
        }
    }
    Session.updateSession();

    return Session; 
});