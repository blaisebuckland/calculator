// Display
const calculatorDisplay = document.querySelector(".calculator__display__text");
// Buttons
const zeroButton = document.querySelector("#zero-button");
const oneButton = document.querySelector("#one-button");
const twoButton = document.querySelector("#two-button");
const threeButton = document.querySelector("#three-button");
const fourButton = document.querySelector("#four-button");
const fiveButton = document.querySelector("#five-button");
const sixButton = document.querySelector("#six-button");
const sevenButton = document.querySelector("#seven-button");
const eightButton = document.querySelector("#eight-button");
const nineButton = document.querySelector("#nine-button");
const cancelButton = document.querySelector("#cancel-button");
const bracketsButton =document.querySelector("#brackets-button");
const percentButton =document.querySelector("#percent-button");
const divideButton =document.querySelector("#divide-button");
const multiplyButton =document.querySelector("#multiply-button");
const minusButton =document.querySelector("#minus-button");
const plusButton =document.querySelector("#plus-button");
const positiveNegativeButton =document.querySelector("#positive-negative-button");
const decimalButton =document.querySelector("#decimal-button");
const equalsButton =document.querySelector("#equals-button");

/* MAKE IT SO THAT THE INPUT ONLY ALLOWS MAX 33 CHARACTERS
 if (calculatorDisplay.innerHTML.value.length > 24) {

} */


const cancel = () => {
    calculatorDisplay.innerHTML = "";
}
cancelButton.addEventListener("click", cancel);

zeroButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 0;
})

oneButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 1;
})

twoButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 2;
})

threeButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 3;
})

fourButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 4;
})

fiveButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 5;
})

sixButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 6;
})

sevenButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 7;
})

eightButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 8;
})

nineButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += 9;
})

// brackets button - toggle to add opening or closing bracket

percentButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML = calculatorDisplay.innerHTML/100;
})

divideButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += "/";
})

multiplyButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += "*";
})

minusButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += "-";
})

plusButton.addEventListener("click", () => {
    calculatorDisplay.innerHTML += "+";
})