var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var wins = 0

var losses = 0

var computerPick

var humanPick

var guess = []

var guessLeft = 9

guessGame()

function guessGame () {
  computerPick = letters[Math.floor(Math.random() * 26)]
  console.log(computerPick)
  getguess()
  function getguess () {
    document.onkeyup = function (event) {
      var humanPick = event.key
      guess.push(humanPick.toUpperCase());
      console.log(humanPick)

      if (humanPick.toUpperCase() === computerPick) {
        guessLeft = 9
        wins++
        document.getElementById('wins').innerHTML = ('Wins: ') + wins
        reset()
      } else calcLosses()
    }
  }

  function calcLosses () {
    document.getElementById('guess').innerHTML = ('Your Guesses:') + guess
    guessLeft--
    document.getElementById('guessLeft').innerHTML = ('Guess left: ') + guessLeft
    if (guessLeft === 0) {
      alert('Computer Letter is ' + computerPick)
      losses++
      document.getElementById('losses').innerHTML = ('Losses: ') + losses
      reset()
    }
    else getguess()
  }

  function reset () {
    guess = [];
    guessLeft = 9
    guessGame()
  }
}

guessGame()
