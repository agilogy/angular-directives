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
    var data = {
        "competences": [{
            "id": 1,
            "name": "Productividad",
            "value": 0
        }, {
            "id": 2,
            "name": "Calidad",
            "value": 0
        }, {
            "id": 3,
            "name": "Conocimientos",
            "value": 0
        }, {
            "id": 4,
            "name": "Planificación",
            "value": 0
        }, {
            "id": 5,
            "name": "Organización",
            "value": 0
        }, {
            "id": 6,
            "name": "Supervisión",
            "value": 0
        }, {
            "id": 7,
            "name": "Liderazgo",
            "value": 0
        }, {
            "id": 8,
            "name": "Comunicación",
            "value": 0
        }, {
            "id": 9,
            "name": "Negociación",
            "value": 0
        }, {
            "id": 10,
            "name": "Formación",
            "value": 0
        }, {
            "id": 11,
            "name": "Motivación",
            "value": 0
        }, {
            "id": 12,
            "name": "Delegación",
            "value": 0
        }, {
            "id": 13,
            "name": "Toma de Decisiones",
            "value": 0
        }, {
            "id": 14,
            "name": "Iniciativa",
            "value": 0
        }, {
            "id": 15,
            "name": "Innovación",
            "value": 0
        }, {
            "id": 16,
            "name": "Compromiso",
            "value": 0
        }, {
            "id": 17,
            "name": "Dedicación",
            "value": 0
        }, {
            "id": 18,
            "name": "Adaptación",
            "value": 0
        }],
        "vectors": [{
            "id": 1,
            "name": "Competencia Técnica",
            "value": 0
        }, {
            "id": 2,
            "name": "Dinámica de Gestión",
            "value": 0
        }, {
            "id": 3,
            "name": "Relación Integradora",
            "value": 0
        }, {
            "id": 4,
            "name": "Estímulo al Desarrollo",
            "value": 0
        }, {
            "id": 5,
            "name": "Proacción para la Mejora",
            "value": 0
        }, {
            "id": 6,
            "name": "Comportamiento Positivo",
            "value": 0
        }],
        "dimensions": [{
            "id": 1,
            "name": "Tareas",
            "value": 0
        }, {
            "id": 2,
            "name": "Personas",
            "value": 0
        }, {
            "id": 3,
            "name": "Conductas",
            "value": 0
        }]
    };

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