//alert("Welcome Back!")

// Understanding Data Types
'it is her\'s'; //"it is her's"
"I am at The CANS park"; //'I am at The CANS park'
console.log("I am at The CANS park" + " working"); //I am at The CANS park working
2023; //2023
27 + 73; //100
50 - 30; //20
5 * 10; //50
100 / 10; //10
500 % 3; //2
isMarried = "True";
console.log(isMarried); //True
4 + 27; //31

// Understanding variables
const Name = "Peace";
console.log(Name); //Peace
let sum = 0;
let num1 = 300;
let num2 = 50;
sum = num1 + num2;
console.log(sum); //350

// Understanding Functions
function greeting() {
  console.log("Hello World");
}
greeting(); //Hello World

// Understanding function with  declaration
function sayHello(name){
    return("Hello, " + name + "!")
}
sayHello("name")//'Hello, name!'

//Understanding function with expression
const sayHello = function(name){
    return("Hello, "+ name + "!")
}
sayHello("Theresa")//'Hello, Theresa!'

// Understanding Hoisting
sayHello()

// This function will be hoisted above sayHello()
function sayHello() {
  console.log('Hello world!')
}
// So in reality, JavaScript executes the above code like this: 
function sayHello() {
  console.log('Hello world!')
}

sayHello()

// More practice on functions
function logger(){
    return("I am a logger")
}
logger()//'I am a logger'

// function adding two numbers
const add = function(a,b){
    return a + b
}
const answer= add(2,5)
console.log(answer) //7 

// Function taking in four parameters and returning the product of the four numbers
function multiply(a,b,c,d){
    return a* b * c* d
}
const result = multiply(2,3,4,5)
console.log(result) //120

// Function taking in two parameters and returning the sum of the two numbers
const solution = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};
console.log("result is ", solution(50, 50)) //result is 100


// Write two anonymous functions that take in two parameters and return the product of the two parameters and a third anonymous function that takes in the two functions as parameters and returns the result of the two functions and a string.
//Method 1
const bioData = function(firstName,lastName ){
    return ("My name is  " + firstName + " " + lastName)
}
console.log(bioData("Theresa","Ottah")) //My name is Theresa Ottah


const school = function(schoolName, classInfo){
    return ("The name of my school is " + schoolName + " " + "and i am in " + classInfo)
}
console.log(school("G.SS WUSE", "SS3C")) //The name of my school is G.SS WUSE and i am in SS3C

const student =function(firstName, LastName,schoolName, classInfo){
    return ("My name is " + firstName + " " + lastName + " " + "and i am a student of " + schoolName+ " " + " i am in + " + classInfo)
}
console.log(student("Theresa", "Ottah", "G.SS WUSE", "SS3C")) //My name is Theresa Ottah and i am a student of G.SS WUSE i am in SS3C


//Method 2
const bioData = function (firstName, lastName) {
    return `My name is ${firstName} ${lastName}`;
  };
  
  const school = function (schoolName, classInfo) {
    return `The name of my school is ${schoolName} and i am in ${classInfo}`;
  };
  
  const student = function (
    bioDataFn,
    schoolFn,
    firstName,
    lastName,
    schoolName,
    classInfo
  ) {
    return `${bioDataFn(firstName, lastName)}. ${schoolFn(
      schoolName,
      classInfo
    )}`;
  };
  console.log(student(bioData, school, "Theresa", "Ottah", "G.SS WUSE", "SS3C"));
  

















// JavaScript program to determine the time of day and display a greeting message, using the Date object, if...else statement, and alert() method, respectively.

// Get the current time
/*const currentTime =new Date();

// Get the current hour
let currentHour = currentTime.getHours();

// Display a greeting based on the time of day
if (currentHour < 12) {
    alert("Good Morning!");
}
else if (currentHour < 18) {
    alert("Good Afternoon!");
}
else {
    alert("Good Evening!");
}*/
