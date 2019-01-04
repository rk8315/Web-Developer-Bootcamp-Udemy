// create secret Number
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("Guess a number"));

// check guess
if(guess === secretNumber){
  alert("You got it!")
} else if( guess < secretNumber){
    alert("The secret number is higher than your guess")
} else if(guess > secretNumber){
    alert("The secret number is lower than your guess")
} else {
    alert("Thats not a number!")
}


