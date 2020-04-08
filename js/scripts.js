// Business Logic

function Game() {
  this.player1 = []; //<--- keeps track of what boxes have been checked by X player 
  this.player2 = []; // <--- keeps track of what boxes have been checked by O player
  this.turn = 1; // <---keeps track of whose turn it is

}

function winConditions() {
  this.win1 = ["0", "1", "2"]
  this.win2 = ["3", "4", "5"]
  this.win3 = ["6", "7", "8"]
  this.win4 = ["0", "3", "6"]
  this.win5 = ["1", "4", "7"]
  this.win6 = ["2", "5", "8"]
  this.win7 = ["0", "4", "8"]
  this.win8 = ["2", "4", "6"]
}
// ---> does all of what is in win1[] match anything in player1[] or player2[]?

// winConditions.prototype.checkForWinner = function() {
//  for (var i=0; i<=wins.length; i++) {
//   0
//  }  
// }

// function Board() {
//   this.upperLeft = "1";
//   this.upperMid = "2";
//   this.upperRight = "3";
//   this.centerLeft = "4";
//   this.centerMid = "5";
//   this.centerRight = "6";
//   this.lowerLeft = "7";
//   this.lowerMid = "8";
//   this.lowerRight = "9";
// }

// Board.prototype.checkWinnerConditions = function () {
//   if (this.upperLeft === this.upperMid && this.UppperLeft === this.upperRight) {
//     return
//   } else (this
// })


// 
// UI Logic   


$(document).ready(function () {
  var game = new Game();
  var wins = new winConditions();
  $("#startGame").click(function () {
    $(".game").show();
  })
  $(".box").click(function () {

    if ($(this).is(":empty")) {

      if ((game.turn % 2) == 0) {
        $(this).html("O");
        $("#playerTurn").html("X");
        game.turn += 1;
        game.player2.push(this.id);
        game.player2.sort();

      }
      else if ((game.turn % 2) !== 0) {
        $(this).html("X");
        $("#playerTurn").html("O");
        game.turn += 1;
        game.player1.push(this.id);
        game.player1.sort();

      }
    }

    console.log(wins);
    console.log(game.player1);
  })


})