let numbers = document.querySelectorAll(".number");

let arithmetic = document.querySelectorAll(".arithmetic");

let period = document.getElementById("period");

let btnClear = document.getElementById("clear");
let btnEqual = document.getElementById("equal");

let currentScreen = document.getElementById("currentNum");
let previousScreen = document.getElementById("previousNum");
let previousNum = "";
let currentNum = "";

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", append);
}

period.addEventListener("click", append);
btnClear.addEventListener("click", clear);

function append(e) {
  if (e.target.innerHTML == "." && currentNum.includes(".")) {
    currentNum;
  } else if (currentNum == "" && e.target.innerHTML == ".") {
    currentNum += "0" + e.target.innerHTML;
  } else {
    currentNum += e.target.innerHTML;
  }
  currentScreen.innerHTML = currentNum;
}

function clear(e) {
  currentNum = "";
  currentScreen.innerHTML = currentNum;
}
