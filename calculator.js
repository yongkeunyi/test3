const display = document.getElementById("display");
let currentInput = "";
let firstOperand = null;
let operator = null;

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (operator !== null || currentInput === "") return;
  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput += " " + operator + " ";
  display.value = currentInput;
}

function calculateResult() {
  if (operator === null || currentInput === "") return;

  const operands = currentInput.split(" ");
  const secondOperand = parseFloat(operands[2]);

  if (operands.length < 3 || isNaN(secondOperand)) return;

  let result;
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      if (secondOperand === 0) {
        alert("0으로 나눌 수 없습니다.");
        return;
      }
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  display.value = result;
  currentInput = result.toString();
  operator = null;
  firstOperand = null;
}

function clearDisplay() {
  display.value = "";
  currentInput = "";
  firstOperand = null;
  operator = null;
}
