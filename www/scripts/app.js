angular.module('agilogyDirectives', [
	'agilogyDirectives.barChart'
])

.controller('AppCtrl', function($scope){

	$scope.testResults = [{
            "id": 1,
            "name": "Productividad",
            "value": 4
        }, {
            "id": 2,
            "name": "Calidad",
            "value": 6
        }, {
            "id": 3,
            "name": "Conocimientos",
            "value": 7
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
        }];
})
;
