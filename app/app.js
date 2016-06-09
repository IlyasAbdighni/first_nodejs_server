(function(){
	var app = angular.module('SocialNetwork', ['ui.router']);

		app.config(function($stateProvider){
		   	$stateProvider
		   		.state('signup', {
		   			url: "/signup",
		   			templateUrl: "signup/signup.html",
		   			controller: "SignupController"
		   		})
		   });
		
		 app.controller('mainCtrl', ['$scope', function ($scope) {
		   		$scope.show = function () {
		   			alert(123);
		   		}
		   }])
}());