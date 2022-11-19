/////Variables/////

//All buttons:
const buttonsCont = document.querySelector("#scnd");
const btns = buttonsCont.querySelectorAll("button");

const numberBtns = document.querySelectorAll(".number");

//Buttons operator:
let divideBtn = document.querySelector(".divide");
let multiBtn = document.querySelector(".multiply");
let addBtn = document.querySelector(".add");
let substractBtn = document.querySelector(".substract");
let operators = document.querySelectorAll(".operator")

//Screen where the numbers are shown
let screen = document.querySelector(".numbersOne");
let screen2 = document.querySelector(".numbersTwo");

//the current input
let currentInput = "";

//Value:
let var1 = "";
let var2 = "";
let value1 = "";
let value2 = "";

////FUNCTIONS/////

/*/////Operation\\\\\*/

function add(a, b) {
    let result = a + b;
    return result;
}

function substract(a, b) {
    let result = a - b;
    return result;
}

function multiply(a, b) {
    let result = a * b;
    return result;
}

function divide(a, b) {
    let result = a / b;
    return result;
}

/*////Other Function\\\\*/

function operate(a, b) {
    num1 = a 
    num2 = b
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            substract(num1, num2);
            break;
        case"*":
            add(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}

/*////Function populate screen\\\\*/

function checkValue(value) {
    if(value === undefined) {
        screen.textContent = 0;
        screen2.textContent = 0;
    } 
}

function populate(value) {
    screen.textContent += value;
    if(value === "÷" || value === "x" || value === "-" || value === "+" || value === "=") {
        screen2.textContent += "";
        screen2.textContent -= "";
    } else {
        screen2.textContent += value;
    }
}
populate();   
checkValue();

/*////Hovering function\\\\*/

function hover() {
    btns.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.classList.add("hover");
        })
    })
}
hover();

function hoverEnd() {
    btns.forEach(button => {
        button.addEventListener("mouseleave", () => {
            button.classList.remove("hover");
        })
    })
}
hoverEnd();

/*////CLick function\\\\*/

//Modify the css//

//Function to remove the css after a click
function removeTransition(e) {
    if(e.propertyName  !== "transform") return;
    this.classList.remove("clicked")
}

function changeBtnOnClick() {
    btns.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.remove("hover")
            button.classList.add("clicked");
            button.addEventListener("transitionend", removeTransition);
        })
        
    })
}
changeBtnOnClick();

//Function to return a value when clicked button;

function getButtonValue() {
    btns.forEach(button => {
        button.addEventListener("click", () => {
            currentValue = button.textContent;
            let value = "";
            value += button.textContent
            populate(value);
        })
    })
}
getButtonValue();

//Function deactivate operator button if there's already an operator;
function deactivateOp() {
    if(screen.textContent.endsWith("+")) {
        divideBtn.disable = true;
        multiBtn.disable = true;
        addBtn.disable = true;
        substractBtn.disable = true;
    }
}
deactivateOp();

//Function make calcul variables(value);
/*
function getValue1() {
    numberBtns.forEach(button => {
        button.addEventListener("click", () => {
            value1 += button.textContent;
        })
    })
}
*/

function getValue() {
    numberBtns.forEach(button => {
        button.addEventListener("click", () => {
            var1 = button.textContent;
        })
    }
    )
}


function getValueBis() {
    numberBtns.forEach(button => {
        button.addEventListener("click", getValue1)
    })
    operators.forEach(button => {
        button.addEventListener("click", () => {
            numberBtns.forEach(button => {
                button.removeEventListener("click", getValue1)
            })
        })
    })
}


function getValue1() {
    value1 += var1;
}

/*
function stopValue1() {
    operators.forEach(button => {
        button.addEventListener("click", () => {
            numberBtns.forEach(button => {
                button.removeEventListener("click", getValue1);
            })
        })
    })
}
stopValue1();
*/





getValue1();
getValueBis();
getValue();

//Function make calcul;
