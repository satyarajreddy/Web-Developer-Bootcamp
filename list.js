var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do? ");

while(input !== "quit")
{
	if(input === "list")
	{
		listTodos();
	}
	else if(input === "new")
	{
		addTodo();
	}
	else if(input === "delete")
	{
		deleteTodo();
	}

	var input = prompt("What would you like to do? ");
}
console.log("Ok You have quit the app.");

function listTodos(){
	console.log("*********");
		todos.forEach(function(todo,i){
		console.log(i + ": " + todo);
	});
		console.log("*********");
}

function addTodo(){
	var hello = prompt("Add a Todo");
		todos.push(hello);
		console.log("Todo added");
}
function deleteTodo(){
	var index = prompt("Enter the index of todo to delete");
		todos.splice(index,1);
		console.log("Item deleted");
}

// console.log("Connected");