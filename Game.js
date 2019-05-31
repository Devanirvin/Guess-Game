var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
    
var losses = 0;    

var computerPick = letters[Math.floor(Math.random() * 26)] 
console.log  (computerPick);
var humanPick = "";

var guess = 9;

var guessLeft = [];

var reset = [];

function guessGame() {

document.onkeyup = function(event){
    

    
    addLetter(keyPress);
    
personPick = event.key.toUpperCase();

function guess() {
guessLeft--
}

function reset() {
guessLeft = [];
resetGuess  ();
generateRandomLetter ();
console.log(randomLetter);
displayOnScreen("wins", 'Wins: ${String(winCount)}');
displayOnScreen("losses", 'Losses: ${String(lossCount)}');
displayOnScreen("guessleft", 'Guess Left: ${String(guessLeft)}');
}

if (guessLeft === 0) 
guessLeft--;
}


guessGame();
}
