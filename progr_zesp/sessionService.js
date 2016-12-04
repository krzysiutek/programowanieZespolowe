'use strict'

app.factory('sessionService', function($http) {
    var Session = {
        data: {},
        saveSession: function (loginData) { 
            var sessionData = {
                username: loginData.login,
                logged: loginData.logged, 
                time: new Date().getTime(),
                role: loginData.admin_privilage
            }
            localStorage.setItem('sessionData', JSON.stringify(sessionData));
            Session.data = sessionData;
        },

        updateSession: function () {

            var now = new Date().getTime();
            var hour = 1000 * 60 * 60;
            Session.data = JSON.parse(localStorage.getItem('sessionData'));
            if (!Session.data) {
                return;
            }
            var overHour = (this.data.time + hour) < now;     
            
            if (this.data && (this.data.time + hour) < now) {
                this.logout();
            } else {
                this.data.time = now;
            }

        },
        getSession: function () {
            return localStorage.getItem('sessionData');
        },

        logout: function () {
            Session.data = {};
            localStorage.removeItem('sessionData');
        }
    }
    Session.updateSession();

    return Session; 
});