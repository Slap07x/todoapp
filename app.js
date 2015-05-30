angular.module('todoApp', ['ngAnimate'])
	.controller('todoController', function(){

		var todoList = this;

		todoList.list = [
			
		];

		todoList.addThing = function(){
			todoList.list.push({thing: todoList.thing});
			todoList.thing = '';
		};

		todoList.remove = function(item) {
			var index = todoList.list.indexOf(item);
			todoList.list.splice(index, 1);
		};

		todoList.clearList = function(){
			todoList.list.length = 0;
		};
	});
