angular.module('agilogyDirectives.lines', [])


.directive('lines', function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelController) {
            function formatter(value) {
              if (value) {
                var formated = value.join("\n");
                return formated;
              }
            }
            function parser(value) {
                var parsed = undefined;
                if (value) {
                    parsed = value.split("\n");
                }
                return parsed;
            }
            ngModelController.$formatters.push(formatter);
            ngModelController.$parsers.push(parser);
        }
        
    };
});