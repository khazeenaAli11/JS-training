/*    // Day 1: Intro to JS, Variables and Data types
// 1. Write a "Hello, World!" program that prints the message to the console.
console.log("Hello Wrorld!")

// 2. Declare three variables with different data types (string, number, boolean) and print them to the console.
let fullName = "Khazeena Ali";
let num = 22;
let isStudent = true;
console.log("Name:", fullName);
console.log("Number:", num);
console.log("Is stduent:", isStudent);

// 3. Experiment with let, const, and var to declare variables and modify their values.
let a = 10;
a = 20;
console.log(a);

var v = 30;
var v = 40;
console.log(v);

const PI = 3.14;
// PI = 3.24;
console.log(PI);

// 4. Create a program that declares a name and age, and prints a greeting like: "Hello, my name is [name] and I am [age] years old."
let name = "Khazeena Ali";
let age = 22;
console.log("Hello, my name is "+ name +" and I am "+ age + "years old.");
*/





// Day 2: Operators and Expressions
// 1. Write a program that performs basic arithmetic operations (addition, subtraction, multiplication, division) with two numbers and prints the results.
// let num1 = 10;
// let num2 = 20;
// console.log("num1 + num2: ", num1+num2);
// console.log("num1 - num2: ", num1-num2);
// console.log("num1 * num2: ", num1*num2);
// console.log("num1 / num2: ", num1/num2);

/*
// 2. Create a program that compares two numbers using comparison operators (==, !=, <, >, etc.) and prints the result.
let comOperator1 = {a: 2, b: 4};
let comOperator2 = {...comOperator1, h: 3};
console.log("comOperator1 == comOperator2",  comOperator1.a == comOperator2.a)// fasle
console.log("comOperator1 === comOperator2", comOperator1.a === comOperator2.a)// fasle
console.log("comOperator1 !== comOperator2", comOperator1 !== comOperator2)// true
console.log("comOperator1 != comOperator2",  comOperator1 != number2)// true
console.log("comOperator1 > comOperator2",   comOperator1 > comOperator2)// fasle
console.log("comOperator1 < comOperator2",   comOperator1 < comOperator2)// true
console.log("comOperator1 <= comOperator2",  comOperator1 <= comOperator2)// true
console.log("comOperator1 >= comOperator2",  comOperator1 >= comOperator2)// fasle

// 3. Write a program using logical operators (&&, ||, !) to combine two boolean conditions and print the outcome.
let a = 10;
let b = 20;
let logOper1 = a < b;
let logOper2 = a === b;
console.log("logOper1 && logOper2", logOper1 && logOper2);
console.log("logOper1 || logOper2", logOper1 || logOper2);
console.log("!(a<b)",!(a<b));

// 4. Create a simple calculator that accepts two numbers and an operator (+, -, *, /) and prints the result to the console.
let num1 = 20;
let num2 = 30;
let operator = prompt("Enter a operator");
let result;

if(operator == '+') {
    result = num1 + num2;
    console.log("Sum of numbers are:", num1 + num2);
} else if(operator == '-') {
    result = num1 - num2;
    console.log("Subtraction of numbers are:", num1 - num2);
} else if(operator == '*') {
    result = num1 * num2;
    console.log("Multiplication of numbers are:", num1 * num2);
} else if(operator == '/') {
    result = num1 / num2;
    console.log("Division of numbers are:", num1 / num2);
} else {
    console.log("Invalid operations");
} 
*/


/*
// Day3: Functions and Loops
// 1. Write a function called greetUser that takes a name as a parameter and prints "Hello, [name]!" to the console.

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
console.log(greetUser("Khazeena Ali"));

// 2. Write a program that calculates the factorial of a number using a loop.
function calFactorial(number) {
    let factorial = 1;
    for (let i=1; i <=number; i++) {
        factorial *= i;
    }
    return factorial;
}
const num = 5;
console.log(`The factorial of ${num} is ${calFactorial(num)}.`);

// 3. Write a program using a while loop that prints all even numbers from 0 to 20.

let number1 = 1;
while (number1 <= 20) {
    if(number1 % 2 === 0){
        console.log(number1);
    }
    number1++;
}


// 4. Write a function that takes an array of numbers and returns the sum of all numbers using a for loop.
function arrSum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
}
const numberArray = [1, 2, 3, 4, 5];
console.log(arrSum(numberArray));
*/

/* 
// Day4: Conditionals and Problem Solving
// 1. Write a program that asks the user for their age and prints different messages based on the age:
// "You are a child" (age < 13)
// "You are a teenager" (age 13–19)
// "You are an adult" (age >= 20)

let age = prompt("Enter your age: ");
if (age < 13){
    console.log("You are a child");
} else if(age >= 13 && age <= 19){
    console.log("You are a teenager");
} else if(age >= 20) {
    console.log("You are an adult");
}

// 2. Write a program that asks for a student's grade and prints the corresponding letter grade:
// "A" for grades 90 and above
// "B" for grades 80–89
// "C" for grades 70–79
// "D" for grades 60–69
// "F" for grades below 60

let grade = prompt("Enter your Grade");
console.log(typeof grade);
grade = Number(grade);
if(grade >= 90){
    console.log("Grade: A");
} else if(grade >= 80 && grade <= 89) {
    console.log("Grade: B");
} else if(grade >= 70 && grade <= 79) {
    console.log("Grade: C");
} else if(grade >= 60 && grade <= 69) {
    console.log("Grade: D");
} else if(grade < 60) {
    console.log("Grade: F");
} else {
    console.log("Error: Invalid input")
}

// 3. Write a program using an if-else statement to check if a number is even or odd and print the result.
let number = 333;
    if(number %2 === 0) {
        console.log("Number is even.");
} else {
    console.log("Number is odd.");
}

// 4. Create a switch statement that takes a number (1-7) and prints the corresponding day of the week (1 = Monday, 2 = Tuesday, etc.).
let number = 2;

switch(number) {
    case 1:
    console.log("1 = Monday");
    break;
  case 2:
    console.log("2 = Tuesday");
    break;
  case 3:
    console.log("3 = Wednesday");
    break;
  case 4:
    console.log("4 = Thursday");
    break;
  case 5:
    console.log("5 = Friday");
    break;
  case 6:
    console.log("6 = Saturday");
    break;
  case 7:
    console.log("7 = Sunday");
    break;
  default:
        console.log("Invaild number.");
} 
*/



/*
// Day 5:
// 1. Create an array with 5 of your favorite fruits. Use array methods (push, pop, shift, unshift) to manipulate the array and print the changes.
let fruits = ["Banana", "Apple", "Strawberry", "Avocado", "Pineapple"];

fruits.push("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Mango");
console.log(fruits);

// 2. Create an object called person with the properties name, age, and isStudent. Print each property to the console.
const person = {
    fullName: "Khazeena Ali",
    age: "22",
    isStudent: true
};
console.log(person);


// 3. Create a nested object book with properties title, author, and year, and add a reviews array inside it. Print the entire object.

let book = {
    title: "C++", 
    author: "Bjarne Stroustrup",
    year: "1983",
    reviews: [
        {rating: "3", 
         rating: "5"}
    ]
};
console.log(book.reviews);

// 4. Create a program that asks the user for their name, age, and favorite color, and stores this information in an object. Print a message using the data.
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let favoriteColor = prompt("Enter your favorit color:");

let info = {
    name: name, 
    age: age, 
    favoriteColor: favoriteColor
};
console.log(`Hello, ${info.name}! You are ${info.age} years old and your favorite color is ${info.favoriteColor}.`)
*/



// Day 6:
 // 1. Write a script that selects an HTML element by its id and changes its content.

let par = document.getElementById("js");
console.dir(par);
par.innerHTML = "TS&apos;JS";

// 2. Create a button on the page, and use JavaScript to add an event listener that changes the text content of a paragraph when the button is clicked.

// let button = document.getElementById('myButton');
// let div = document.getElementById('js');

// button.addEventListener('click', () =>{
//     div.textContent = 'Introduction to JS!';
// })

// 3. Create a webpage with a heading <h1> and a paragraph <p>. Write a script that changes the text of the paragraph when a button is clicked.

let firstPara = document.getElementById('fPara');
let changeButton = document.getElementById('button');

changeButton.addEventListener('click', () => {
    firstPara.textContent = 'The text of this paragraph has been updated';
});
 

// 4. Write a script that toggles the visibility of an element (e.g., a paragraph) when a button is clicked (using display: none and display: block).
let myPara = document.getElementById('para');
let myButton = document.getElementById('button');

myButton.addEventListener('click', () =>{
    if (myPara.style.display === 'none') {
        myPara.style.display = 'block';
        myButton.textContent = 'Hide'; 
    } else {
        myPara.style.display = 'none'; 
        myButton.textContent = 'Show';
    }
})


// string ---> collection of characters, objects ---> colection of key values and arrays ----> collection of same data type values

// 1. arrow function    2. array is object