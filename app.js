var list = document.getElementById("list");

function addTodo() {
  var todo_item = document.getElementById("todo-item");

  // creat li tag with crear node
  var li = document.createElement("li");
  var liText = document.createTextNode(todo_item.value);
  li.appendChild(liText);

  // creat delt button
  var delBtn = document.createElement("button");
var delText = document.createTextNode("DELETE");
delBtn.setAttribute("class", "btn")
delBtn.setAttribute("onclick", "deleteItem()")
delBtn.appendChild(delText);

li.appendChild(delBtn)

  list.appendChild(li);

  todo_item.vale = "";
  console.log(li);
}
 
function deleteItem(){
    console.log("han bhai chal raha hai.....")
}