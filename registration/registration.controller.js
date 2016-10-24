'use strict';

app.controller('registrationCtrl', function registrationCtrl($scope, $window, $http, generalService) {
	$scope.siema = 'Siemanko, helloł';
	$scope.registrationData = {
		username: null,
		password: null,
		repeatedPassword: null
	}

	$scope.register = function (a) {
		if ($scope.registrationData.password === $scope.registrationData.repeatedPassword) {
			// sprawdź czy taki user istnieje
			// jeśli tak, komunikat
			// jeśli nie, dodaj do bazy danych i ustaw sesję na zalogowany
			$window.location.href = '#secondPage';
		}
		// $window.location.href = '#secondPage';
		console.log("You try to register");
	}
})
