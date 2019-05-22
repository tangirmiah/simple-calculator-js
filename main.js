var num1 = "";
var num2 = "";
var operator;
var result = "";

function addNumber(identi) {
  var txt = document.getElementById(identi).innerText;
  txt = document.getElementById("txtResult").value + "" + txt;
  document.getElementById("txtResult").value = txt;
}

function store(oper) {
  num1 = document.getElementById("txtResult").value;
  operator = oper;
  document.getElementById("txtResult").value = "";
}

function calc() {
  num2 = document.getElementById("txtResult").value;
  if (num1 != "" && num2 != "") {
    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2) + "";
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2) + "";
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2) + "";
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2) + "";
        break;
    }
    document.getElementById("txtResult").value = result;

    num1 = "";
    num2 = "";
  }
}
