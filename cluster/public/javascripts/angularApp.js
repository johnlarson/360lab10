angular.module('clusterApp', [])
.controller('MainCtrl', [
	'$scope', '$http',
	function($scope, $http) {
		$scope.cluster = [];
		$scope.getPIDs = function () {
			for(var i = 0; i < 100; i++) {
				$http.get('/pid').success(function(data) {
					$scope.cluster.push(data);
				});
			}
		};
	}
]);
