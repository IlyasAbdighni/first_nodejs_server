(function(){
	angular.module('SocialNetwork', [])
		   .controller('SignupController', ['$scope', '$state', function($scope, $state){
		   		$scope.createUser = function() {
		   			alert(123);
		   		}
		   }]);
}());