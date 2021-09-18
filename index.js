var readLineSync = require("readline-sync");

var score = 0;

var myName = "Aryan";
var yourName = readLineSync.question("What is Your Name : ");
console.log(`Welcome ${yourName}`);

function askQues(ques, answ) {
  var ask1 = readLineSync.question(ques);

  if (ask1 === answ) {
    console.log("You are Right");
    ++score;
  } else {
    console.log("You are Wrong");
  } 
  console.log(`Your Current Score : ${score}`);
  console.log("---------------------");
}

askQues(`What is ${myName}'s Favorate Game : `, "Gta5");
askQues(`What is ${myName}'s Favorate Food : `, "SabjiRoti");
askQues(`What is ${myName}'s Bike Color : `, "Blue");
askQues(`What is ${myName}'s Currently Pursuing : `, "Bca");
askQues(`What is ${myName} Liked The Most  : `, "Learning New Things");

console.log(`Your Total Score : ${score}`);

console.log("Here Are Some High Scores");
console.log("---------------------");

console.log("Allu : 3");
console.log("Malhar" : 2");



