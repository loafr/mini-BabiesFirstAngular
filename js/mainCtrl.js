var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope, friendService) {
	


	$scope.friends = friendService.getFriends();

	$scope.addFriend = function() {
		friendService.addFriend($scope.name); //hooked to my ng-model
		$scope.name = '';
	};

	$scope.removeFriend = function() {
		friendService.removeFriend($scope.oldName) //hooked to my ng-model (.name)
		$scope.oldName = '';
	};

	$scope.clearFriends = function() {
		friendService.clearFriends() //not hooked to ng-model
	};



});

