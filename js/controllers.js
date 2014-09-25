'use strict';

/* Controllers */

var protocolosApp = angular.module('protocolosApp', []);

protocolosApp.controller('EmpresaCtrl', function($scope, $http) {
	$http.get('json/empresas.json').success( function(data) {
		$scope.empresas = data;
	});

	$http.get('json/reclamacoes.json').success( function(data) {
		$scope.reclamacoes = data;
	});

	$scope.adicionarReclamacao = function() {
		$scope.reclamacoes.push(angular.copy($scope.reclamacao));
		$scope.reclamacao = {};
		$scope.reclamacaoForm.$setPristine();
	}

	$scope.reclamacoes = [];
});