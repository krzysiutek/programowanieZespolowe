'use strict';

app.controller('bansCtrl', function bansCtrl($scope, $window, $location, $http, generalService, appConst) {

	$scope.banData = {
		username: null,
		roomname:null,
		banStart:null,
		banStop:null,
		notes:null
	}

	var url = $location.protocol() + '://' + $location.host() + ':' + appConst.serverPort + '/bans';
		$http.post(url, {
			data: $scope.banData,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		// if everything is ok handle response
		.then(function (response) {
			console.log("REsssss" + response);
		}, 
		// in otherwise handle error
		function (err) {
			console.log("ERROR");
		});
});