// ? Create two variables containing a number
//! Note: Variables can store all types of data and functions
//! like strings, arrays, objects, HTML elements, etc.

// const num1 = 
// let num2 = 

console.log(num1 + num2)

//? try reassigning these variables to a new value

// num1 = 
// num2 =


console.log(num1 + num2)

//! Did it work? Explain why it did or did not.
/*
TODO: Write Your answer here



*/
//? Now just assign a new value to num2

// num2 = 

console.log(num1 + num2)






//? Create a function that prints out "Hello World to the console"

function greeting(){

}

//? Create a function that takes two numbers as arguments and returns the sum
//? of these two numbers

function sum(num1, num2){
return 
}

console.log(sum(num1, num2))


//! Any variables delcared in a function is only available within that
//! function (local variables). A Global variable is a variable that is
//!  available throughout the program including inside functions

//* num1 and num2 are declared outside any function so it is global 
//* and could be accessed in any line of code AFTER the line where
//* it was delcared and initialized
console.log("num1 :", num1, "num2: ", num2)
console.log("num1 :", num1, "num2: ", num2, "name: ", firstName)
let firstName = "Josh"
// TODO: What happens when we try to log firstName
/* Write your answer here


*/

//! Before moving forward, comment out line 60 or delete firstName from the
//! console.log
//? Create a function that accepts one argument of a name and returns a string:
//* Hello, my name is Josh -- Josh being the name passed as a parameter in the example
function hello(name){
return 
}
console.log(hello())

//! You can also create a function that logs an output to the console,
//! just make sure to call the function like in line 82
function printHello(name){
    console.log(name)
}
printHello("lala")

//* Now we'll declare and initialize a variable inside a function
function myDog(){
    let dog = "Snoopy"
    printHello(dog)
}
//! Note: We can call other functions inside another functions, these are
//! known as callback functions


//! Uncomment line 94 
// console.log(dog)
//TODO: What error do you get and why?
/*


*/

//* Callback Functions
//! A callback function is a function that takes in another function as an
//! argument

function displayMySum(sumFunc){
console.log("The sum is:",sumFunc)
}

displayMySum(sum(5,2))





//! Bonus: Open your HTML in your browser, and navigate to the console

//* Here we access the HTML elements pertaining to a form 
//* in index.html using javascript
const numbersForm = document.getElementById("form")
//! Note: getElementsByName returns an array of nodes or elements that
//! is using the name specified in the parameter, nodes/elements are accessed
//! using bracket notation Ex: document.getElementsByName("age")[0]
//! if you look at the html you'll notice the form has a name attribute
//! associated with the inputs
const firstNumber = document.getElementsByName("firstNum")[0]
const secondNumber = document.getElementsByName("secondNum")[0]

//* Here we create a function that adds the value of two input fields
//* created in the HTML
//! Note: These input fields are ALWAYS considered as text in HTML even
//! if it is a number, therefore we parse our input field into an integer
//! in order to add
function onSubmit(e){
e.preventDefault()
const answer = parseInt(firstNumber.value) + parseInt(secondNumber.value)
console.log(answer)
document.getElementById("answer").innerText = answer
}

//* Here we have an event listener on a form that is inside the HTML
//* the addEventListener function takes in two arguments, one is the 
//* type of event, and the second is the function we want to call when the
//* event is triggered
numbersForm.addEventListener('submit', onSubmit)


//! If you notice the inputs in the form also have an id associated with
//! it
//? Comment out firstNumber and SecondNumber
//? Now instead of getElementsByName try getting the element by its id

/*
const firstNumber = 
const secondNumber = 

function onSubmit(e){
e.preventDefault()
const answer = parseInt(firstNumber.value) + parseInt(secondNumber.value)
console.log(answer)
document.getElementById("answer").innerText = answer
}
numbersForm.addEventListener('submit', onSubmit)


*/