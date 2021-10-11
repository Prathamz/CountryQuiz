var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score=0
function quiz(question,answer){

  var userAns=readlineSync.question(chalk.bgMagenta("-> "+question))
  if(userAns===answer){
  console.log(chalk.bgGreen("You are right!"))
  score=score+1
}
else{
  console.log(chalk.bgRed("You are wrong!"))
}
}


//start
var userName=readlineSync.question(chalk.bgMagenta("What is your name? \n"))

console.log(chalk.bgYellow("Hi "+userName+" How well do you know our country quiz"))
console.log(chalk.bgMagenta("Rules : Type exact option letter to enter the answer. eg: A"))

var questions=[{
  "ques":'What is the capital city of india \n Options: \n A.Delhi B.Mumbai C.Channai D.Banglore\n >> ',
  "ans":'A'
},
{
  "ques":'India\'s largest city by population \n Options: \n A.Delhi B.Mumbai C.Channai D.Banglore\n >> ',
  "ans":'B'
},
{
  "ques":'What is the name of India\'s National Aquatic Animal? \n Options: \n A.River Dolphin B.Crocodile C.Katla Fish D.Green Frog\n >> ',
  "ans":'A'
},
{
  "ques":'Hindi Divas celebrate in India on \nOptions: \n A.14th December  B. 10th April C.12th April D.14th September\n >> ',
  "ans":'D'
},
{
  "ques":'Which state has the highest literacy rate \n Options: \n A.Manipur  B. Mizoram C.Kerala D.Goa\n >> ',
  "ans":'C'
}
]

for(i=0;i<questions.length;i++){
  console.log("question Number : "+(i+1))
  quiz(questions[i].ques,questions[i].ans)
}

console.log(chalk.bgYellow("----------\n Your score= "+score+"/"+(questions.length)))