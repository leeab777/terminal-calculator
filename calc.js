const prompt =require('prompt-sync')({sigint:true});



function displayWelcomeMessage() {
    console.log("==========================");
    console.log("         Welcome                          ");
    console.log("==========================");
   
   
};
displayWelcomeMessage();

function calculate(){
const op ={'+' : add,
                 '-': subtract,
                 '*': multiply,
                 '/': divide
};

let validOperation = false;
let select;

while (!validOperation){
   select = prompt("Please select operation, +, -, * or /......");

   if (op[select]){
    validOperation = true;
   } else {
    calculate();
    console.log("Invalid operation selected. Please choose +, -, /, *")
   }
}
const num = prompt("What is your first number?            ");
const num2 =prompt("What is your second number?         ");
   


function add(num, num1){
    return Number(num) + Number (num1);
}
function subtract(num, num1){
    return num - num1;
}
function multiply(num, num1){
    return num * num1;
}
function divide(num, num1){
    return num / num1;
}

let result;


if (op [select]) {
   result = op[select] (num, num2);
} else{
    console.log("Invaiid operation selected.");
}
if (result !== undefined){
    console.log(`The result is: ${result}`)
};

const repeat = prompt("Do you wish to preform another calculation. y/n?    ")

let yes = "y";
let no = "n";

if (repeat.toLowerCase() === 'y') {
    calculate();
} else {
    console.log("Have a nice day.");
    return;
}
};

