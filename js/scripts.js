// Business Logic

function Game() {
  this.player1 = []; //<--- keeps track of what boxes have been checked by X player 
  this.player2 = []; // <--- keeps track of what boxes have been checked by O player
  this.turn = 1; // <---keeps track of whose turn it is
}



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
  // var win = [012, 345, 678, 036, 147, 258, 048, 246]

  $(".box").click(function () {

    if ($(this).is(":empty")) {

      if ((game.turn % 2) == 0) {
        $(this).html("O");
        game.turn += 1;
        game.player2.push(this.id);
        game.player2.sort();
      }
      else if ((game.turn % 2) !== 0) {
        $(this).html("X");
        game.turn += 1;
        game.player1.push(this.id);
        game.player1.sort();
      }
    }
    console.log(game.player1)
  })


})