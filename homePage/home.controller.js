'use strict';

app.controller('homeCtrl', function homeCtrl($scope, $window, $http, generalService) {
	$scope.siema = 'Siemanko, helloł';
	$scope.loginData = {
		username: null,
		password: null
	}

	$scope.login = function (a) {
		// pobranie z bazy danych username i password
		// jeśli ok, przejdz dalej
		generalService.saveLoginData($scope.loginData);
		$window.location.href = '#secondPage';
		console.log("You try to login");
	}
})
