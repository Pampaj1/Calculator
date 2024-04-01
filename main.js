let text = document.querySelector(".input");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

const division = document.querySelector(".division");
const multiply = document.querySelector(".multiply");
const substraction = document.querySelector(".subtraction");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");

const reset = document.querySelector(".reset");
const del = document.querySelector(".delete");


function AddToInput() {
    text.innerHTML = "";

    one.addEventListener('click', () => {
        text.innerHTML += "1";
    })

    two.addEventListener('click', () => {
        text.innerHTML += "2";
    })

    three.addEventListener('click', () => {
        text.innerHTML += "3";
    })

    four.addEventListener('click', () => {
        text.innerHTML += "4";
    })

    five.addEventListener('click', () => {
        text.innerHTML += "5";
    })

    six.addEventListener('click', () => {
        text.innerHTML += "6";
    })

    seven.addEventListener('click', () => {
        text.innerHTML += "7";
    })

    eight.addEventListener('click', () => {
        text.innerHTML += "8";
    })

    nine.addEventListener('click', () => {
        text.innerHTML += "9";
    })

    zero.addEventListener('click', () => {
        text.innerHTML += "0";
    })

    division.addEventListener('click', () => {
        text.innerHTML += "/";
    })

    multiply.addEventListener('click', () => {
        text.innerHTML += "*";
    })

    substraction.addEventListener('click', () => {
        text.innerHTML += "-";
    })

    add.addEventListener('click', () => {
        text.innerHTML += "+";
    })

    dot.addEventListener('click', () => {
        text.innerHTML += ".";
    })

    reset.addEventListener('click', () => {
        text.innerHTML = "";
    })

    del.addEventListener('click', () => {
        text.innerHTML = text.innerHTML.slice(0, -1);
    })
}

//Result
equal.addEventListener('click', () => {
    text.innerHTML = eval(text.innerHTML);
})


AddToInput();