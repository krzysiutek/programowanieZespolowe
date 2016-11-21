'use strict';

app.controller('loginCtrl', function loginCtrl($scope, $window, $location, $http, generalService, appConst, sessionService) {
	$scope.siema = 'login';
	// $scope.logged = null;	

	$scope.loginData = {
		username: null,
		logged: null
	}

	if (sessionService.data && sessionService.data.logged) {
		$scope.loginData = sessionService.data;
	}

	$scope.login = function (a) {
		// pobranie z bazy danych username i password
		// jeśli ok, przejdz dalej
		// generalService.saveLoginData($scope.loginData);

		// sprawdź czy taki user istnieje
		// jeśli tak, komunikat
		// jeśli nie, dodaj do bazy danych i ustaw sesję na zalogowany
		var url = $location.protocol() + '://' + $location.host() + ':' + appConst.serverPort + '/login';
		
		$http.post(url, {
			data: $scope.loginData,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		// if everything is ok handle response
		.then(function (response) {
			$scope.error = false;
			$scope.userExist = $scope.loginData.logged = false;
			if (response.data.userExist === true) {
				$scope.userExist = $scope.loginData.logged = true;
				generalService.saveLoginData($scope.loginData);
				sessionService.saveSession($scope.loginData);	
			} else if (response.data.end) {
				console.log("error");
				$scope.error = true;
			} else {
				console.error("Wystąpił błąd podczas dodawania do bazy danych");
			}
		}, 
		// in otherwise handle error
		function (err) {
			console.log("ERROR");
		});

		// $window.location.href = '#secondPage';
		console.log("You try to login");
	}
})