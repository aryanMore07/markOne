var readLineSync = require("readline-sync");
let chalk = require("chalk");

var score = 0;

var myName = "Aryan";
var yourName = readLineSync.question("What is Your Name : ");
console.log(chalk.bgGreen(`Welcome ${yourName}`));

function askQues(ques, answ) {
  var ask1 = readLineSync.question(ques);

  if (ask1 === answ) {
    console.log("---------------------");
    console.log(chalk.bgGreen("You Are Right"));
    ++score;
    console.log(chalk.bgGreen(`Your Current Score : ${score}`));
  } else {
    console.log(chalk.bgRed("You are Wrong"));
    --score  
    console.log(chalk.bgRed(`Your Current Score : ${score}`));
  } 
  console.log("---------------------");
}

askQues(`What is ${myName}'s Favorate Game : `, "Gta5");
askQues(`What is ${myName}'s Favorate Food : `, "SabjiRoti");
askQues(`What is ${myName}'s Bike Color : `, "Blue");
askQues(`What is ${myName}'s Currently Pursuing : `, "Bca");

console.log(chalk.bgGreen(`Your Total Score : ${score}`));

console.log("Here Are Some High Scores");
console.log("---------------------");

console.log("Swapnil : 3");
console.log("Aksh : 2");
