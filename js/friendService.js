var app = angular.module('friendsList');

app.service('friendService', function() {
	var friends = ['Stan', 'Dan', 'Fran'];

	this.addFriend = function(friend) { //this keyword makes it available in the controller
		friends.push(friend);
	};

	this.getFriends = function() {
		return friends;
	};

	this.removeFriend = function(friend) {
		/*for (var i = 0; i < friends.length; i++) {
			if (friend === friends[i]) {
			friends.splice(friend[i], 1); 
			};
		};*/

		var index = friends.indexOf(friend);
		if (index !== -1) {
			friends.splice(index, 1);
		};		
	};

	this.clearFriends = function() {
		friends.splice(0, friends.length)
	};


});