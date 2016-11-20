'use strict';

app.controller('curatorsCtrl', function curatorsCtrl($scope, $location, $http, generalService, appConst) {
	$scope.curatorData = {
		name: null,
		surname: null,
		phone: null,
		email: null,
		room:null
	}
	// $scope.curatorsExists= function (a){
	
		var url = $location.protocol() + '://' + $location.host() + ':' + appConst.serverPort + '/curators';
		$http.post(url, {
			data: $scope.curatorData,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		// if everything is ok handle response
		.then(function (response) {
			console.log("REsssss" + response);
			// if (response.data.end) {
			// 	$scope.error = true;
			// }
			$scope.curatorData = {
				name: response.user_name,
				surname: response.user_surname,
				phone: response.phone,
				email: response.email,
				room: response.room
			}
		}, 
		// in otherwise handle error
		function (err) {
			console.log("ERROR");
		});
	// }
})
