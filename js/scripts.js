// Business Logic -----------
function Game() {
  this.players = [];
  this.currentScore = 0;
  this.currentPlayer = 0;
  this.maxPlayers = 2;
}

function Player(name) {
  this.name = name;
  this.score = 0;
}

Game.prototype.addPlayers = function(...playerObjects) {
  this.players.push(...playerObjects);
}

Game.prototype.switchPlayers = function() {
  if (this.currentPlayer + 1 != this.maxPlayers) {
    this.currentPlayer += 1;
  } else if (this.currentPlayer + 1 == this.maxPlayers) {
    this.currentPlayer = 0;
  }


  console.log("Current player index: ", this.currentPlayer, "Current Player: ", this.players[this.currentPlayer]);
}

function rollD6() {
  return Math.floor(Math.random() * (7 - 1) + 1);
}

// let newGame = new Game();

// let player1 = new Player("Fred");
// let player2 = new Player("Bob");

// newGame.addPlayers(player1, player2);
// newGame.switchPlayers();
// newGame.switchPlayers();
// newGame.switchPlayers();

// console.log(newGame.players);

// User Interface Logic ----------
$(document).ready(function() {
  $("form#game-info").submit(function(event) {
    event.preventDefault();
    const playerName = $("input#name").val();
    console.log(playerName);
  });
});