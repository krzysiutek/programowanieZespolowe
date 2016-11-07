'use strict';

app.controller('crashCtrl', function homeCtrl($scope, $window, $location, $http, generalService) {
	$scope.siema = 'Siemanko, helloł';
	
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

})
