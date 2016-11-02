'use strict';

app.controller('registrationCtrl', function registrationCtrl($scope, $window, $location, $http, generalService, appConst) {
	$scope.siema = 'Siemanko, helloł';
	$scope.registrationData = {
		username: null,
		password: null,
		repeatedPassword: null
	}
	$scope.registered = null;

	$scope.register = function (a) {
		if ($scope.registrationData.password === $scope.registrationData.repeatedPassword) {
			// sprawdź czy taki user istnieje
			// jeśli tak, komunikat
			// jeśli nie, dodaj do bazy danych i ustaw sesję na zalogowany
			var url = $location.protocol() + '://' + $location.host() + ':' + appConst.serverPort + '/registration';
			
			$http.post(url, {
				data: $scope.registrationData,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			// if everything is ok handle response
			.then(function (response) {
				if (response.data) {
					$scope.registered = true;	
				}
				console.log("User registered!");
			}, 
			// in otherwise handle error
			function (err) {
				console.log("ERROR");
			});
			// $window.location.href = '#secondPage';
		}
		// $window.location.href = '#secondPage';
		console.log("You try to register");
	}

	$scope.closeConnection = function () {
		var url = $location.protocol() + '://' + $location.host() + ':' + appConst.serverPort + '/registration';
			
			$http.post(url, {
				data: {close: true},
				headers: {
					'Content-Type': 'application/json'
				}
			})
			// if everything is ok handle response
			.then(function (response) {
				// if (response.data) {
				// 	$scope.registered = true;	
				// }
				// console.log("User registered!");
			}, 
			// in otherwise handle error
			function (err) {
				// console.log("ERROR");
			});
	}
})
