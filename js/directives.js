'use strict';

var protocoloDirectives = angular.module('protocoloDirectives', []);

protocoloDirectives.directive('proEmpresa', function() {
	return {
		restrict: 'E',
		scope: {
			empresaDados: '=empresa'
		},
		templateUrl: "partials/empresa.html"
	}
});