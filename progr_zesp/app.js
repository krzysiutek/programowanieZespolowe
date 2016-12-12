'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.controller('myAppCtrl', function myAppCtrl($scope, $rootScope, sessionService, generalService) {
	$scope.session = sessionService;

	$rootScope.$on('$routeChangeSuccess', function(event, current) {
		if (!sessionService.getSession()) {
			return;
		}
		var loginData = generalService.getLoginData();
        sessionService.updateSession(loginData);
    });
});

app.constant('appConst', {
	'serverPort': 8001
});

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
		.when("/rooms/:roomName?", {
			name: "roomsDetail",
			templateUrl: "/rooms/rooms.tpl.html",
			controller: "roomsCtrl"
		})
		.when("/rooms/:roomName?/:floor?", {
			name: "roomsDetail",
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
			controller: "crashCtrl"
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
		.when("/bans", {
			name: "bans",
			templateUrl: "/bans/bans.tpl.html",
			controller: "bansCtrl"
		})
		.when("/calendar", {
			name: "calendar",
			templateUrl: "/calendarModule/calendar.html",
			controller: "calendarCtrl"
		})
		.when("/userProfile", {
			name: "userProfile",
			templateUrl: "/userModule/userProfile.tpl.html",
			controller: "userProfileCtrl"
		})
		
		.otherwise({
			redirectTo: '/'
		});
}])