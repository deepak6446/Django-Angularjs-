var app = angular.module('tryten',[])

app.controller('trytenCntrl',function($scope, $http){
	// $scope.todoList = [{todoText : "hi angular"}]

	$scope.getToDoList = function(){
		$http.get('/todo/api/').then(function(response){
			$scope.todoList = []
			for (var i = 0; i < response.data.length; i++) {
				var todo = {}
				todo.todoText = response.data[i].text
				todo.done = response.data[i].done
				todo.id = response.data[i].id
				$scope.todoList.push(todo)
			}
		})
	}

	$scope.getToDoList();

	$scope.todoAdd = function(){
		if($scope.todoInput){
			var data = {text: $scope.todoInput, done: false}
			$http.put('/todo/api/',data).then(function(d){
				$scope.getToDoList();
				$scope.todoInput = ''
			})	
		}

	}

	$scope.remove = function(id){
		$http.delete('/todo/api/'+id+'/').then(function(data){
			$scope.getToDoList();
		})	
	}
})