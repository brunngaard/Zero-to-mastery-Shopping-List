var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", liClick);
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Remove Item";
  deleteButton.addEventListener("click", (event) => ul.removeChild(li));
  li.appendChild(deleteButton);
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function liClick() {
  this.classList.toggle("done");
}

function removeItem() {}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
