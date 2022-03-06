// Selectors
const displayText = document.querySelector(".calculator__display__text");
const numberButtons = document.querySelectorAll(".calculator__pad__number")
const cancelButton = document.querySelector(".calculator__pad__cancel");
const percentButton = document.querySelector(".calculator__pad__percent");
const decimalButton = document.querySelector(".calculator__pad__decimal");
const operatorButtons =document.querySelectorAll(".calculator__pad__operator");
const equalsButton = document.querySelector(".calculator__pad__equals");

// Variables
let currentCharacter = "";
let calculation = "";
let calculationResult = "";
let inputLengthBelowMax ="";
const operators = ["+", "-", "x", "÷"];

// Reusable functions
const checkInputLength = () => {
    if (displayText.innerHTML.length < 33) {
        inputLengthBelowMax = true;
    } else {
        inputLengthBelowMax = false;
    }
}

// Number buttons
numberButtons.forEach(button => {
    button.addEventListener(("click"), (event) => {
        checkInputLength();
        if (inputLengthBelowMax === true) {
            currentCharacter = event.target.innerHTML;
            displayText.innerHTML += currentCharacter;
        }
    })
});

// Simple operator buttons

operatorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
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
    })
})

// Cancel - delete last character if pressed once, and delete all if pressed twice

cancelButton.addEventListener("click", () => {
    if (currentCharacter == "c") {
        displayText.innerHTML = "";
        currentCharacter = "c";
    } else {
        displayText.innerHTML = displayText.innerHTML.slice(0, displayText.innerHTML.length-1);
        currentCharacter = "c";
    }
});

// Percent

percentButton.addEventListener("click", () => {
    displayText.innerHTML = displayText.innerHTML/100;
    
})

// Decimal

decimalButton.addEventListener(("click"), () => {
    if (inputLengthBelowMax === true) {
        currentCharacter = event.target.innerHTML;
        displayText.innerHTML += currentCharacter;
    }
})

// Equals

equalsButton.addEventListener("click", () => {
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
        } 
        displayText.innerHTML = calculationResult;  
    })
