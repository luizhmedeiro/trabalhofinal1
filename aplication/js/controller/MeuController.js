myApp.controller('MeuController', function($scope) {
	$scope.pessoa = {};
	$scope.isEdit = false;

	$scope.dados = [{
		nome : 'Luiz',
		email : 'luiz@ciss.com.br',
		telefone : '(46)9999-9999'
	}];
		
	$scope.adicionarDados = function(pessoa) {
		cadastrar(pessoa)
		$scope.isEdit = false;
	}

	$scope.editarDados = function(pessoa) {
		atualizar(pessoa)			
		$scope.isEdit = false;
	}

	function cadastrar(pessoa) {
		var p = angular.copy(pessoa);
		$scope.dados.push(p);
		delete $scope.pessoa;
	}

	function atualizar(pessoa) {
		$scope.dados[$scope.idx] = angular.copy(pessoa);
		delete $scope.pessoa;
	}

	$scope.excluirItem = function (idx) {
		$scope.dados.splice(idx, 1);
		delete $scope.pessoa;
		$scope.isEdit = false;
	}

	$scope.editarItem = function (item, idx) {
		$scope.idx    = idx;
		$scope.pessoa = angular.copy(item);
		$scope.isEdit = true;
	}

	$scope.cancelar = function(){
		delete $scope.pessoa;
		$scope.isEdit = false;
	}
})
