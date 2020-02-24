var operand = ["", ""];
var index = 0;
var operation = "";

document.getElementById("one").onclick = function() {putValue("1")};
document.getElementById("two").onclick = function() {putValue("2")};
document.getElementById("three").onclick = function() {putValue("3")};
document.getElementById("four").onclick = function() {putValue("4")};
document.getElementById("five").onclick = function() {putValue("5")};
document.getElementById("six").onclick = function() {putValue("6")};
document.getElementById("seven").onclick = function() {putValue("7")};
document.getElementById("eight").onclick = function() {putValue("8")};
document.getElementById("nine").onclick = function() {putValue("9")};
document.getElementById("zero").onclick = function() {putValue("0")};
document.getElementById("sign").onclick = function() {negateValue()};
document.getElementById("dot").onclick = function() {putValue(".")};
document.getElementById("plus").onclick = function() {setOperation("+")};
document.getElementById("minus").onclick = function() {setOperation("-")};
document.getElementById("multiply").onclick = function() {setOperation("*")};
document.getElementById("divide").onclick = function() {setOperation("/")};
document.getElementById("reminder").onclick = function() {setOperation("reminder")};
document.getElementById("equal").onclick = function() {equal()};
document.getElementById("cancel").onclick = function() {resetAll()};
document.getElementById("delete").onclick = function() {del()};

function equal() {
    if (index == 1) {
        let firstNumber = Number(operand[0]);
        let secondNumber = Number(operand[1]);
        let result;

        if (operation == "+") {
            result = firstNumber + secondNumber;
        }
        else if (operation == "-") {
            result = firstNumber - secondNumber;
        }
        else if (operation == "*") {
            result = firstNumber * secondNumber;
        }
        else if (operation == "/") {
            result = firstNumber / secondNumber;
        }
        else if (operation == "reminder") {
            result = firstNumber % secondNumber;
        }
        if (result > 9999999999) {
            result = result.toExponential();
        }
        reset();
        displayValue(result);
    }
}

function del() {
    operand[index] = operand[index].substr(0, operand[index].length - 1);
    displayValue(operand[index]);
}

function setOperation(newOperation) {
    if (index == 0) {
        index = 1;
        operation = newOperation;
        displayValue(newOperation);
    }
}

function resetAll() {
    reset();
    displayValue("0");
}

function reset() {
    operand[0] = "";
    operand[1] = "";
    index = 0;
    operation = "";
}

function negateValue() {
    if (operand[index].charAt(0) == "-") {
        operand[index] = operand[index].substr(1);
    }
    else {
        operand[index] = "-" + operand[index];
    }
    displayValue(operand[index]);
}

function putValue(newValue) {
    let isdot = newValue == ".";

    if (operand[index].length < 10) {
        if (isdot && (operand[index].indexOf(".") != -1)) {
            return;
        }
        operand[index] += newValue;
        displayValue(operand[index]);
    }
}

function displayValue(newValue) {
    if (newValue == "") {
        newValue = "0";
    }
    document.getElementById("screen").innerHTML = newValue;
}
