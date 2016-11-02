'use strict';

app.controller('homeCtrl', function homeCtrl($scope, $window, $location, $http, generalService) {
	$scope.siema = 'Siemanko, helloł';
	$scope.loginData = {
		username: null,
		password: null
	}
var url = $location.protocol() + '://' + $location.host() + ':' + 8001 + '/users';
console.log(url);
	$http.post(url, {
            data: $scope.siema,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            $scope.addon = {};
            $scope.pageDetails = 'Zapisano';
        }, function(x) {
            console.error(x);
            $scope.pageDetails = 'Wystąpił błąd';
        });

	$scope.login = function (a) {
		// pobranie z bazy danych username i password
		// jeśli ok, przejdz dalej
		generalService.saveLoginData($scope.loginData);
		$window.location.href = '#secondPage';
		console.log("You try to login");
	}
})
