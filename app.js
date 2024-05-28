var list = document.getElementById("list")


function addTodo(){
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement("li")

var liText = document.createTextNode("shahzad")

li.appendChild(liText)

    console.log(li)
}