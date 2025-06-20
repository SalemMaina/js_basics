/*
Author: Salem Maina
Date: 16/06/2025
This is my learning of JavaScript. Jump in the journey with me.
Metadata: This is a simple and very basic calculator that i 
          wrote in my path of learning JavaScript.
          I will continue to make changes to this code as i learn more.
Here's the miniproject test description:
Simple Calculator
Use: Variables, operators, functions, strings, numbers

Description: Build a calculator that takes two numbers 
and an operator (+, -, *, /) as input and displays the result.
*/

function calculate() {
    let firstNum = Number(prompt("Enter first number:"));
    let secondNum = Number(prompt("Enter second number:"));
    let operator = prompt("Enter the operator symbol:");
    let result = 0;

    switch(operator){
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        default:
            result = "Invalid operator";
        }
    document.getElementById("printResult").innerText = result;
}

calculate();