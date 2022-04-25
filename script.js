// Selectors
const displayText = document.querySelector(".display__text");
const numberButtons = document.querySelectorAll(".calculator__button--number")
const cancelButton = document.querySelector(".calculator__button--cancel");
const percentButton = document.querySelector(".calculator__button--percent");
const decimalButton = document.querySelector(".calculator__button--decimal");
const operatorButtons =document.querySelectorAll(".calculator__button--operator");
const equalsButton = document.querySelector(".calculator__button--equals");

// Variables
let currentCharacter = "";
let calculation = "";
let calculationResult = "";
let inputLengthBelowMax ="";
const operators = ["+", "-", "x", "÷"];

// Functions
const checkInputLength = () => {
    if (displayText.innerHTML.length < 33) {
        inputLengthBelowMax = true;
    } else {
        inputLengthBelowMax = false;
    }
}
const calculate = () => {
    if (displayText.innerHTML.includes("+")== true) {
        calculation = displayText.innerHTML.split("+");
        calculationResult = Number(calculation[0]) + Number(calculation[1]);
    }
    else if (displayText.innerHTML.includes("-")== true) {
        calculation = displayText.innerHTML.split("-")
        calculationResult = Number(calculation[0]) - Number(calculation[1]);
    }
    else if (displayText.innerHTML.includes("x")== true) {
        calculation = displayText.innerHTML.split("x")
        calculationResult = Number(calculation[0]) * Number(calculation[1]);
    }
    else if (displayText.innerHTML.includes("÷")== true) {
        calculation = displayText.innerHTML.split("÷")
        calculationResult = Number(calculation[0]) / Number(calculation[1]);
    } 
    displayText.innerHTML = calculationResult;  
}
const cancel = () => {
    if (currentCharacter == "c") {
        displayText.innerHTML = "";
        currentCharacter = "c";
    } else {
        displayText.innerHTML = displayText.innerHTML.slice(0, displayText.innerHTML.length-1);
        currentCharacter = "c";
    }
}
const calculatePercentage = () => {
    displayText.innerHTML = displayText.innerHTML/100;
}
const insertDecimal = () => {
    checkInputLength();
    if (inputLengthBelowMax === true && currentCharacter != event.target.innerHTML) {
        currentCharacter = event.target.innerHTML;
        displayText.innerHTML += currentCharacter;
    }
}
const insertNumber = () => {
    checkInputLength();
        if (inputLengthBelowMax === true) {
            currentCharacter = event.target.innerHTML;
            displayText.innerHTML += currentCharacter;
        }
}
const insertOperator = () => {
    checkInputLength();
    if (inputLengthBelowMax === true && operators.includes(currentCharacter) === false) {
        if (displayText.innerHTML.includes("+")== true) {
            calculation = displayText.innerHTML.split("+");
            calculationResult = Number(calculation[0]) + Number(calculation[1]);
            displayText.innerHTML = `${calculationResult}${event.target.innerHTML}`;
        }
        else if (displayText.innerHTML.includes("-")== true) {
            calculation = displayText.innerHTML.split("-")
            calculationResult = Number(calculation[0]) - Number(calculation[1]);
            displayText.innerHTML = `${calculationResult}${event.target.innerHTML}`;
        }
        else if (displayText.innerHTML.includes("x")== true) {
            calculation = displayText.innerHTML.split("x")
            calculationResult = Number(calculation[0]) * Number(calculation[1]);
            displayText.innerHTML = `${calculationResult}${event.target.innerHTML}`;
        }
        else if (displayText.innerHTML.includes("÷")== true) {
            calculation = displayText.innerHTML.split("÷")
            calculationResult = Number(calculation[0]) / Number(calculation[1]);
            displayText.innerHTML = `${calculationResult}${event.target.innerHTML}`;
        } else {
            currentCharacter = event.target.innerHTML;
            displayText.innerHTML += event.target.innerHTML;
        }
    }
}

// Event listeners
equalsButton.addEventListener("click", calculate)
cancelButton.addEventListener("click", cancel)
decimalButton.addEventListener(("click"), insertDecimal)
percentButton.addEventListener("click", calculatePercentage)
numberButtons.forEach(button => {
    button.addEventListener(("click"), insertNumber)
});
operatorButtons.forEach(button => {
    button.addEventListener("click", insertOperator)
});
