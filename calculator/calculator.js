var firstNumber ;
var secondNumber ;
var operation ;

let numberOperation ;

operation =prompt("enter the operation you need (just add the number) 1 for addition 2 for subtraction 3 for multiplication 4 for division")
firstNumber = prompt("Enter first number")
secondNumber = prompt (" enter second number")

if (operation == 1 || operation ==3 ){
    numberOperation = prompt("how much numbers  ? ");
//Receiving the family number 
for (let i = 0; i < parseInt(numberOperation); i++) {
 familyMember[i] = prompt("Your Family Members " + (i + 1));
}
}
function addition(a,b){
    return parseInt(a) + parseInt(a)
}

function subtraction(a,b){
    return a - b
}
function multiplication(a,b){
    return a * b
}
function division(a,b){
    return a / b
}

if (operation == 1 )
{
    console.log("your result " + addition(firstNumber,secondNumber))
}
else if (operation == 2 )
{
    console.log("your result " + subtraction(firstNumber,secondNumber))
}
 else if (operation == 3 )
{
    console.log("your result " + multiplication(firstNumber,secondNumber))
}
else if (operation == 4 )
{
    console.log("your result " + division(firstNumber,secondNumber))
}
else{
    console.log("no operation selected " )
}

(function()
{
   // Display the result on console from input 
console.log(addition(firstNumber,secondNumber))
console.log(subtraction(firstNumber,secondNumber))
console.log(multiplication(firstNumber,secondNumber))
console.log(division(firstNumber,secondNumber))

})
()