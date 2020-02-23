var firstNumber = "";
var secondNumber = "";
var operationSelected = false;
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
document.getElementById("cancel").onclick = function() {reset()};
document.getElementById("delete").onclick = function() {del()};

function equal() {
    if (operationSelected) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
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
        displayValue(result);
    }
}

function del() {
    if (operationSelected) {
        secondNumber = secondNumber.substr(0, secondNumber.length - 1);
        displayValue(secondNumber);
    }
    else {
        firstNumber = firstNumber.substr(0, firstNumber.length - 1);
        displayValue(firstNumber);
    }
}

function setOperation(newOperation) {
    if (!operationSelected) {
        operation = newOperation;
        operationSelected = true;
        displayValue(newOperation);
    }
}

function reset() {
    firstNumber = "";
    secondNumber = "";
    operationSelected = false;
    operation = "";
    displayValue("0");
}

function negateValue() {
    if (!operationSelected) {
        if (firstNumber[0] == "-") {
            firstNumber = firstNumber.substr(1);
        }
        else {
            firstNumber = "-" + firstNumber;
        }
        displayValue(firstNumber);
    }
    else {
        if (secondNumber[0] == "-") {
            secondNumber = secondNumber.substr(1);
        }
        else {
            secondNumber = "-" + secondNumber;
        }
        displayValue(secondNumber);
    }
}

function putValue(newValue) {
    let isdot = newValue == ".";

    if (!operationSelected) {
        if (firstNumber.length < 10) {
            if (isdot && (firstNumber.indexOf(".") != -1)) {
                return;
            }
            firstNumber += newValue;
            displayValue(firstNumber);
        }
    } else {
        if (secondNumber.length < 10) {
            if (isdot && (secondNumber.indexOf(".") != -1)) {
                return;
            }
            secondNumber += newValue;
            displayValue(secondNumber);
        }
    }
}

function displayValue(newValue) {
    if (newValue == "") {
        newValue = "0";
    }
    document.getElementById("screen").innerHTML = newValue;
}
