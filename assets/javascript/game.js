var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-left");
var guessedLetters = document.getElementById("letters-guessed");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var compLetter = "";

var winsDiv = document.getElementById("wins");
winsDiv.textContent = wins;

var lossesDiv = document.getElementById("losses");
lossesDiv.textContent = losses;

var gLeftDiv = document.getElementById("guessesLeft");
gLeftDiv.textContent = guessesLeft;

var gLettDiv = document.getElementById("guessedLetters");
gLettDiv.textContent = guessedLetters;

compLetter = letters[Math.floor(Math.random() * letters.length)];
compLetter = compLetter.toUpperCase();
alert(compLetter);

document.onkeyup = function(event) {
    if(event.keyCode >= 65 && event.keyCode <= 90){
    var userLetter = event.keyCode;
    userLetter = String.fromCharCode(userLetter);

        if(compLetter === userLetter){
            wins += 1;
            winsDiv.textContent = wins;
            guessesLeft = 9;
            gLeftDiv.textContent = guessesLeft;
            guessedLetters = [];
            gLettDiv.textContent = guessedLetters;

            compLetter = letters[Math.floor(Math.random() * letters.length)];
            compLetter = compLetter.toUpperCase();
        }else{
            if(guessesLeft <= 0){
                losses += 1;
                lossesDiv.textContent = losses;
                guessesLeft = 9;
                gLeftDiv.textContent = guessesLeft;
                guessedLetters = [];
                gLettDiv.textContent = guessedLetters;
                compLetter = letters[Math.floor(Math.random() * letters.length)];
                compLetter = compLetter.toUpperCase();
            }else{
                $("#guessedLetters").append(userLetter);
                guessesLeft -= 1
                gLeftDiv.textContent = guessesLeft;
            }
        }
    }
}