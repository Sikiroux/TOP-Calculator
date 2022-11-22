//All buttons on the screen;
const buttonsCont = document.querySelector("#button-cont");

//Select all buttons;
const buttons = buttonsCont.querySelectorAll("button");

//Select all Numbers buttons;
const numberBtns = document.querySelectorAll(".number");

//Operator buttons;
const operatorsBtns = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");

//Clear button;
const clearbtn = document.querySelector(".clear");

//Screen display;
const displayOne = document.querySelector(".numbersOne");
const displayTwo = document.querySelector(".numbersTwo");


/*//////VARIABLES\\\\\\*/



/*/////Values\\\\*/
let value1 = 0;
let value2 = 0;

let operator = "";
let result =  0;
displayOne.textContent = 0;
displayTwo.textContent = 0;


/*/////FUNCTIONS\\\\\*/



//Operations;

function add(a, b) {
    result = a + b;
    return;
}

function substract(a, b) {
    result = a - b;
    return;
}

function multiply(a, b) {
    result = a * b;
    return;
}

function divide(a, b) {
    result =  a / b;
    return;
}


//Operate functions;

function operate(operator, a, b) {
    num1 = a;
    num2 = b;
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            substract(num1, num2);
            break;
        case"x":
            multiply(num1, num2);
            break;
        case "÷":
            divide(num1, num2);
            break;
    }
    return result;
}

operate();
//Populate display function;

function pop() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let vaR = "";
            //console.log(vaR += button.textContent);
        })
    })
}

pop(); 

function populate() {
    numberBtns.forEach(button => {
        button.addEventListener("click", () => {
            displayOne.textContent += button.textContent;
        })
    })
}
populate();

//Create a variable when operator click;

function createValue() {
    operatorsBtns.forEach(button => {
        button.addEventListener("click", () => {
            if(operator === "") {
                value1 = Number(displayOne.textContent);
                displayOne.textContent = 0;
                displayTwo.textContent = value1;
                console.log(value1)
            }
           
        })
    })
}

createValue(); 

//Get the operator when the button is clicked
function getOperator(button) {
    operator = button.textContent;
}

function multiCalcul() {
    operatorsBtns.forEach(button => {
        button.addEventListener("click", () => {
            if(operator === "-") {
                console.log("substract");
                getSecondValue();
                operate(operator, value1, value2); 
                displayTwo.textContent = result;
                value1 = Number(displayTwo.textContent);
                getOperator(button);
                displayOne.textContent = 0;
            } else if(operator === "x") {
                console.log("multiply");
                getSecondValue();
                operate(operator, value1, value2); 
                displayTwo.textContent = result;
                value1 = Number(displayTwo.textContent);
                getOperator(button);
                displayOne.textContent = 0;
            } else if(operator === "+") {
                console.log("add");
                getSecondValue();
                operate(operator, value1, value2); 
                displayTwo.textContent = result;
                value1 = Number(displayTwo.textContent);
                getOperator(button);
                displayOne.textContent = 0;
            } else if(operator === "÷") {
                console.log("divide");
                getSecondValue();
                operate(operator, value1, value2); 
                displayTwo.textContent = result;
                value1 = Number(displayTwo.textContent);
                getOperator(button);
                displayOne.textContent = 0;
            } else {
                console.log("operator");
                getOperator(button);
            }
        })
    })
}

multiCalcul();

//Create the second value;

function getSecondValue() {
    value2 = Number(displayOne.textContent);
}
//Make calcul on equal function;

function calculOnEqual() {
    equal.addEventListener("click", () => {
        getSecondValue();
        operate(operator, value1, value2);
        displayTwo.textContent = result;
        displayOne.textContent = 0;
    })
}

calculOnEqual();

//Make a clear button;

function clearAction() {
    clearbtn.addEventListener("click", () => {
        value1 = 0;
        value2 = 0;
        operator = 0;
        displayOne.textContent = 0;
        displayTwo.textContent = 0;
        
    })
}

clearAction();


/*/////CSS interactions\\\\\*/

//Hovering;

function hover() {
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.classList.add("hover");
        })
    })
    clearbtn.addEventListener("mouseover", () => {
        clearbtn.classList.add("hover");
    })
}

hover();

function hoverEnd() {
    buttons.forEach(button => {
        button.addEventListener("mouseleave", () => {
            button.classList.remove("hover");
        })
    })
    clearbtn.addEventListener("mouseleave", () => {
        clearbtn.classList.remove("hover");
    })
}

hoverEnd();

//Click functions;

function removeTransition(e) {
    if(e.propertyName  !== "transform") return;
    this.classList.remove("clicked")
}

function changeBtnOnClick() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.remove("hover")
            button.classList.add("clicked");
            button.addEventListener("transitionend", removeTransition);
        })
        
    })
    clearbtn.addEventListener("click", () => {
        clearbtn.classList.remove("hover");
        clearbtn.classList.add("clicked");
        clearbtn.addEventListener("transitionend", removeTransition);
    })
}
changeBtnOnClick();