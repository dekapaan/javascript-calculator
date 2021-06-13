let numbers = document.querySelectorAll(".number");

let arithmetic = document.querySelectorAll(".arithmetic");

let period = document.getElementById("period");

let btnClear = document.getElementById("clear");
let btnEqual = document.getElementById("equal");

let currentScreen = document.getElementById("currentNum");
let previousScreen = document.getElementById("previousNum");
let secondNum = "";
let firstNum = "";

let operand = "";

let equalPressed = false;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", append);
}

for (let i = 0; i < arithmetic.length; i++) {
  arithmetic[i].addEventListener("click", changescreen);
}

period.addEventListener("click", append);
btnClear.addEventListener("click", clear);
btnEqual.addEventListener("click", operation);

function append(e) {
  if (equalPressed == true) {
    equalPressed = false;
    currentScreen.innerHTML = "";
    firstNum = "";
    firstNum += e.target.innerHTML;
    currentScreen.innerHTML += e.target.innerHTML;
  } else if (currentScreen.innerHTML == "0" && e.target.innerHTML == "0") {
    firstNum;
    currentScreen;
  } else if (currentScreen.innerHTML == "0" && e.target.innerHTML !== ".") {
    firstNum;
    currentScreen;
  } else if (e.target.innerHTML == ".") {
    if (currentScreen.innerHTML == "") {
      firstNum = "0" + e.target.innerHTML;
      currentScreen.innerHTML += "0" + e.target.innerHTML;
    } else if (firstNum.includes(".")) {
      firstNum;
      currentScreen;
    } else {
      firstNum += e.target.innerHTML;
      currentScreen.innerHTML += e.target.innerHTML;
    }
  } else {
    firstNum += e.target.innerHTML;
    currentScreen.innerHTML += e.target.innerHTML;
  }
}

function clear() {
  firstNum = "";
  previousNum = "";
  currentScreen.innerHTML = "";
  previousScreen.innerHTML = "";
  equalPressed = false;
  operand = "";
}

function changescreen(e) {
  if (operand !== "") {
    secondNum = operation();
    previousScreen.innerHTML = secondNum + e.target.innerHTML;
    currentScreen.innerHTML = "";
    firstNum = "";
    operand = e.target.innerHTML;
  } else {
    operand = e.target.innerHTML;
    secondNum = firstNum;
    firstNum = "";
    previousScreen.innerHTML = currentScreen.innerHTML + e.target.innerHTML;
    currentScreen.innerHTML = "";
  }
}

function operation(e) {
  firstNum = currentScreen.innerHTML;
  equalPressed = true;
  if (currentScreen.innerHTML == "") {
    currentScreen.innerHTML = 0;
  } else if (operand == "+") {
    answer = Number(secondNum) + Number(firstNum);
    currentScreen.innerHTML - "";
    currentScreen.innerHTML = answer;
  } else if (operand == "-") {
    answer = Number(secondNum) - Number(firstNum);
    currentScreen.innerHTML - "";
    currentScreen.innerHTML = answer;
  } else if (operand == "/") {
    answer = Number(secondNum) / Number(firstNum);
    currentScreen.innerHTML - "";
    currentScreen.innerHTML = answer;
  } else if (operand == "x") {
    answer = Number(secondNum) * Number(firstNum);
    currentScreen.innerHTML = "";
    currentScreen.innerHTML = answer;
  }
  firstNum = currentScreen.innerHTML;
  previousScreen.innerHTML = "";
  return answer;
}
