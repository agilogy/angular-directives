angular.module('agilogyDirectives', [
	'agilogyDirectives.barChart',
	'agilogyDirectives.ngModal',
	'agilogyDirectives.lines',
	'agilogyFilters',
])

.config(function($locationProvider){
	$locationProvider.html5Mode(true)
})

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

	/* Open modal on button click */
	$scope.showModal = function(){		
		$('#modal-example').modal();
	};
	/* Modal form submit*/
	$scope.submitFormExample = function(){
		$('#modal-example').modal('hide');
	}

	/* Initialize linesExample with a few values */
	$scope.linesExample = ['each line','represents','one entry','on the array'];

	/* Initialize currency example */
	$scope.currencyExample = { amount: 2123.98, currency: 'EUR'};
	
})
;
