angular.module('agilogyDirectives.barChart', [])

.filter('range', function() {
  return function(input, total) {
    total = parseInt(total, 10);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
})

.directive('barChart', function() {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'scripts/directives/bars/bar-chart.tpl.html',
        scope: {
            labelWidth: '=',
            blockWidth: '=',
            viewBoxWidth: '=',
            h: '=',
            x: '=',
            y: '=',
            results: '=',
            predicate: '=',
            title: '='
        },
        controller: function($scope) {
            $scope.floor = Math.floor;
        },
        link: function(scope) {
            scope.list = scope.results;
        }
    };
})

;