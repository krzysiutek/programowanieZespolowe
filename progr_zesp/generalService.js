'use strict';

app.factory('generalService', function () {
	var loginData = {
		username: null,
		logged: null,
		role: null
	};

	function saveLoginData (data) {
		loginData = data
	} 

	function getLoginData () {
		return loginData;
	}

	return {
		saveLoginData: saveLoginData,
		getLoginData: getLoginData
	}
})