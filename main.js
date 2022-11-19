/////Variables/////

const buttonsCont = document.querySelector("#scnd")
const btns = buttonsCont.querySelectorAll("button")
let screen = document.querySelector(".numbersOne");



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
    }
}

function populate(value) {
    if (screen.textContent.includes(0)) {
        screen.textContent = "";
    }
    screen.textContent += value;
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
function changeBtnOnClick() {
    btns.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.remove("hover")
            button.classList.add("clicked");
        })
    })
}
changeBtnOnClick();