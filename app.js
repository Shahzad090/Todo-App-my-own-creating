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
delBtn.setAttribute("onclick", "deleteItem(this)")
delBtn.appendChild(delText);

// creat edit button
var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick", "editItem(this)")

li.appendChild(delBtn)
li.appendChild(editBtn)

  list.appendChild(li);

  todo_item.vale = "";
 
}
 
function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
  var val = prompt("Enter edit value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = val;

}

function deleteAll(){
  list.innerHTML = ""
}