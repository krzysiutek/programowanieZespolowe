'use strict';

app.controller('secondPageCtrl', function secondPageCtrl($scope, generalService) {
	$scope.siema = 'Druga strona :)';

	var loginData = generalService.getLoginData();
	if (loginData) {
		$scope.siema = JSON.stringify(loginData);

		$scope.$applyAsync();
	}
})
