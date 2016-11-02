'use strict';

app.factory('generalService', function () {
	var loginData = {
		username: null,
		password: null
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