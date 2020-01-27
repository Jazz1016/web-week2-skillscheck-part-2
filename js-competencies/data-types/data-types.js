///////////////////Problem 1//////////////////
//Uncomment the array that contains valid JavaScript datatypes

// var jsDataTypes = ["bool", "string", "object", "integer", "function", "undefined"]
// var jsDataTypes = ["boolean", "string", "object", "int", "function"]
// var jsDataTypes = ["bool", "string", "object", "integer", "function"]
var jsDataTypes = [
  "boolean",
  "string",
  "object",
  "number",
  "function",
  "undefined"
];

///////////////////Problem 2//////////////////
//Change the value of the variable iLikeChocolate from
//null to a boolean - based on whether or not you like
//chocolate!

var iLikeChocolate = true;

///////////////////Problem 3//////////////////
//Create a string, and assign it to a variable
//called myString

let myString = "james";

//Code here

///////////////////Problem 4//////////////////
//Create an integer, and assign it to a variable
//called myInt

let myInt = 0;

//Code here

///////////////////Problem 5//////////////////
//Create a function called myFunction that returns
//the string "I am a function!"

function myFunction() {
  return "I am a function!";
}

//Code here

///////////////////Problem 6//////////////////
//Create an object called myObject that has a
//name property (a string), a team property (a string),
//and a method called whatTeam that returns the team
//property.

let myObject = {
  name: "",
  team: "",
  whatTeam: function whatTeam() {
    return myObject.team;
  }
};

//Code here

///////////////////Problem 7//////////////////
//Create an array called myArray that contains:
//1, "two", { three: 3 }, and as the 4th element
//an array literal that contains 4, 5

let myArray = [1, "two", { three: 3 }, [4, 5]];

//Code here

///////////////////Problem 8//////////////////
//Make a function called whatAmI that takes in one
//parameter, a mystery parameter. whatAmI should
//return the data type of the mystery parameter.

function whatAmI(mystery) {
  if (typeof mystery === "number") {
    return "number";
  } else if (typeof mystery === "string") {
    return "string";
  } else if (typeof mystery === "boolean") {
    return "boolean";
  } else if (typeof mystery === "null") {
    return "null";
  } else if (typeof mystery === "object") {
    return "object";
  }
}

//Code heres

///////////////////Problem 9//////////////////
//Create a variable called theVoid. Make it null.

let theVoid = null;

//Code here

///////////////////Problem 10//////////////////
//Create a function called undefiner that takes in
//an array, and sets the 2nd element of that array
//to undefined. undefiner should return the array.

function undefiner(arr) {
  arr[1] = undefined;
  console.log(arr);
  return arr;
}

//Code here

///////////////////Problem 11//////////////////
//Create a function called nananan that takes in
//a parameter. If the parameter divided by 2 is NaN,
//return "FLYING NOCTURNAL MAMMAL MAN!". Otherwise, return the result of
//the parameter divided by 2.

function nananan(x) {
  if (typeof x !== "number") {
    return "FLYING NOCTURNAL MAMMAL MAN!";
  } else return x / 2;
}

console.log(nananan("hi"));

//Code here

//Now, call nananan with the value NaN, and store the
//result of the function call in a variable called "na".
let na = nananan(NaN);
//Code here

///////////////////Problem 12//////////////////
//Create a function called arrayChecker that takes
//in a parameter. arrayChecker should return true
//if the parameter is an array, and false otherwise.

function arrayChecker(value) {
  if (Array.isArray(value) === true) {
    return true;
  } else return false;
}

//Code here

///////////////////Problem 13//////////////////
//Create a function called numFromString that takes
//in a string. numFromString should use the parseInt
//function to convert the string into a base 10 number.
//Return that base 10 number.

let numFromString = str => {
  return parseInt(str, 10);
};

//Code here

///////////////////Problem 14//////////////////
//Create a function called makeItAString that takes
//in a parameter. makeItAString should use the toString
//function to convert the parameter into a string.
//Return that string.

function makeItAString(notStr) {
  if (typeof notStr !== "string") {
    return notStr.toString();
  } else return notStr;
}

//Code here

///////////////////Problem 15//////////////////
//Uncomment the correct answers below

//What will 100 || 0 be evaluted to?
var answer1 = 100;
// var answer1 = 0

//What will "Hello" && "Goodbye" be evaluted to?
// var answer2 = "Hello";
var answer2 = "Goodbye";

//What will 14 + "" be evaluted to?
var answer3 = "14";
// var answer3 = 14

//What will "14" - 10 be evaluted to?
// var answer4 = "14"
// var answer4 = "1410";
var answer4 = 4;
// var answer4 = 1410;

//What will ["anne", "bob"] + ["charlie"] be evaluted to?
// var answer5 = ["anne", "bob", "charlie"];
// var answer5 = "annebobcharlie"
var answer5 = "anne,bobcharlie";
// var answer5 = "anne,bob,charlie"

///////////////////Problem 16//////////////////
//Uncomment the correct answers below, based the
//following code:

var myArr = [1, 2, 3, 4];
var myStr = "Hello, world!";

var myCopiedArr = myArr;
var myCopiedStr = myStr;

myCopiedArr[1] = 25;
myCopiedStr += " What a beautiful day!";

//What is the value of myArr?
// var valMyArr = [1, 2, 3, 4]
var valMyArr = [1, 25, 3, 4];

//What is the value of myStr?
var valMyStr = "Hello, world!";
// var valMyStr = "Hello, world! What a beautiful day!";

//What is the value of myCopiedArr?
// var valMyCopiedArr = [1, 2, 3, 4]
var valMyCopiedArr = [1, 25, 3, 4];

//What is the value of myCopiedStr?
// var valMyCopiedStr = "Hello, world!"
var valMyCopiedStr = "Hello, world! What a beautiful day!";

//Are arrays copied by reference, or by value?
var arraysCopiedBy = "reference";
// var arraysCopiedBy = "value"

//Are string copied by reference, or by value?
// var stringsCopiedBy = "reference"
var stringsCopiedBy = "value";
