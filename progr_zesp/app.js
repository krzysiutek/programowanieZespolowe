

var app = angular.module('myApp', ['ngRoute']);
'use strict';
app.controller('myAppCtrl', function myAppCtrl($scope, sessionService) {
	$scope.session = sessionService;
})
app.constant('appConst', {
	'serverPort': 8001
})
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
		when('/', {
			name: "home",
			templateUrl: "/homePage/home.tpl.html",
			controller: "homeCtrl"
		})
		.when("/secondPage", {
			name: "secondPage",
			parent: 'myAppCtrl',
			templateUrl: "/secondPage/secondPage.tpl.html",
			controller: "secondPageCtrl"
		})
		.when("/home", {
			name: "home",
			templateUrl: "/homePage/home.tpl.html",
			controller: "homeCtrl"
		})
		.when("/registration", {
			name: "registration",
			templateUrl: "registration/registration.tpl.html",
			controller: "registrationCtrl"
		})
		.when("/login", {
			name: "login",
			templateUrl: "login/login.tpl.html",
			controller: "loginCtrl"
		})
		.when("/rooms", {
			name: "rooms",
			templateUrl: "/rooms/rooms.tpl.html",
			controller: "roomsCtrl"
		})
		.when("/curators", {
			name: "curators",
			templateUrl: "/curators/curators.tpl.html",
			controller: "curatorsCtrl"
		})
		.when("/crash", {
			name: "crash",
			parent: 'myAppCtrl',
			templateUrl: "/crashModule/crash.tpl.html",
			controller: "crashPageCtrl"
		})
		.when("/adminPanel", {
			name: "adminPanel",
			templateUrl: "/adminPanel/adminPanel.tpl.html",
			controller: "adminPanelCtrl"
		})
		.when("/adminPanel/addRoom", {
			name: "addRoom",
			templateUrl: "/rooms/addRoom.tpl.html",
			controller: "addRoomCtrl"
		})
		.otherwise({
			redirectTo: '/'
		});
}])