let screen = document.querySelector("input");
let button = document.querySelectorAll("td");

function myFun(number) {
  screen.value += number;
}

function result() {
  try {
    screen.value = eval(screen.value);
  } catch (arr) {
    alert("Pleace Valid Data");
  }
}

function del() {
  screen.value = screen.value.slice(0, -1);
}

function cel() {
  screen.value = "";
}
