'use strict';

app.controller('roomsCtrl', function roomsCtrl($scope, $route, $routeParams, generalService) {
	// $scope.siema = 'Rooms :)';
	// $scope.params = $routeParams;
	$scope.roomName = $routeParams.roomName;
	// console.log($scope.params);

	if ($routeParams.roomName === 'loundry') {
		$scope.floor = $routeParams.floor;
	}
	
});
