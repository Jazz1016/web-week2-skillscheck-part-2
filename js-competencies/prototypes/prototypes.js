//////////////////PROBLEM 1////////////////////

//Create a prototype for a String called reverse that returns the string but, like, reversed.

String.prototype.reverse = function reverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    newString += str[i];
    console.log(newString);
    return newString;
  }
  return newString;
};

//Code here

//////////////////PROBLEM 2////////////////////

// Based on the constructor below for a Person, create a prototype called drinkCoffee, and readDocumentation

// drinkCoffee should increase energy by 10, increase linesOfCode by 50, and decrease quality of code by 1, and returns Person object.
// readDocumentation should decrease energy by 20, decrease linesOfCode by 30, and increase quality of code by 3, and returns Person object.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.energy = 50;
  this.linesOfCode = 0;
  this.qualityOfCode = 5;
}

Person.prototype.drinkCoffee;

//Code here
