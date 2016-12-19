app.controller("calendarCtrl", function($scope, $timeout, $http) {
	$scope.day = moment();
	$scope.day.locale('pl');

	$scope.selected;
	$scope.events = [];
	$scope.event = null;

	var calendar = new DayPilot.Calendar("dp");

	var event;
	var backToCalendarButton = document.getElementById('back-to-calendar');

	backToCalendarButton.addEventListener('click', function () {
		$scope.selected = null;
		$scope.$digest();
	});

	// reaguje na wysłany event z calendar directive
	$scope.$on('selected', function (event, value) {
		$scope.selected = moment(value).format();
		$scope.weekConfig = {
			// locale: 'pl-pl',
			headerDateFormat: "d-M-yyyy",
			timeFormat: "hh:MM",
			viewType: "Week", // also possible "Day"
			startDate: $scope.selected,
			onEventClick: function(args) {
				if ($scope.event) {
					$scope.event.backColor = undefined;
				}
				// alert("Event clicked: " + args.e.text());

				// can be used to eg. move event to another time or remove or rename
				$scope.event = args.e.data;
				$scope.event.backColor = "#cccccc"
				$scope.$digest();
			},
		}
	
	});
	$scope.$watch('weekConfig.startDate', function (value) {
		console.log(value)
	})

	$scope.weekConfig = {};

	// przykładowy event dla kalendarza
	$scope.events = [
	  {
	      start: new DayPilot.Date("2016-12-17T10:00:00"),
	      end: new DayPilot.Date("2016-12-17T14:00:00"),
	      id: DayPilot.guid(),
	      text: "First Event",
	      message: "elo First Event"
	  }
	];

	$scope.add = function () {
		$scope.events.push({
			start: new DayPilot.Date("2016-12-17T14:00:00"),
		  	end: new DayPilot.Date("2016-12-17T15:00:00"),
		  	message: "Elo",
		  	id: DayPilot.guid(),
		  	text: "Simple Event"
		});
	};
	
	$scope.move = function() {
        var event = $scope.events[0];
        event.start = event.start.addDays(1);
        event.end = event.end.addDays(1);
    };

	$scope.rename = function() {
		var index = $scope.events.indexOf($scope.event);
		$scope.events[index].text = "New name";
	};

	// $scope.message = function() {
	// 	$scope.calendar.message("Hi");
	// };

	function loadEvents() {
        // // using $timeout to make sure all changes are applied before reading visibleStart() and visibleEnd()
		//   $timeout(function() {
		//       var params = {
		//           start: $scope.week.visibleStart().toString(),
		//           end: $scope.week.visibleEnd().toString()
		//       }
		//       $http.post("event.json", params).success(function(data) {
		//           $scope.events = data;
		//       });              
		//   });

		// !!!!! Pobierać z bazy zajete godziny
	}


});

