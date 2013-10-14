angular.module('agilogyDirectives', [
	'agilogyDirectives.barChart'
])

.controller('AppCtrl', function($scope){
	
	function feedBarsChart(){
		var results1 = [], results2 = [];

		for (var i = 0; i < 12; i++) {
			var result = {
				id: i + 1,
				name: 'Result #' + (i + 1),
				value: Math.floor(Math.random() * 12)
			}
			results1.push(result);
			results2.push({
				id: i + 1,
				name: 'Result #' + (i + 1),
				value: Math.floor(Math.random() * 12)
			});
		};
		return [results1, results2];
	}

	$scope.testResults = feedBarsChart();
	
})
;
