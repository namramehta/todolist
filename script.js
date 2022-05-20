var list = [];
var inp = document.getElementById("inp");
var todolist = document.getElementById("todolist");

document.getElementById("btn").addEventListener("click", function () {
  list.push(inp.value);
  inp.value = "";
  console.log(list);
  showList();
});

function showList() {
  todolist.innerHTML = "";
  list.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times;</a></li>";
  });
}

function deleteItem(i) {
  console.log(i);
  list.splice(i, 1);
  showList();
}

function editItem(i) {
  var newValue = prompt("Please insert your new value");
  list.splice(i, 1, newValue);
  showList();
}
