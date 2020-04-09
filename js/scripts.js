// Business Logic

function Game() {
  this.player1 = []; //<--- keeps track of what boxes have been checked by X player 
  this.player2 = []; // <--- keeps track of what boxes have been checked by O player
  this.turn = 1; // <---keeps track of whose turn it is
  this.pOneBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  this.pTwoBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

Game.prototype.addBox = function () {
  for (i = 0; i < this.player1.length; i++) {
    this.pOneBoxes.splice(this.player1[i], 1, 1)
  }
  for (i = 0; i < this.player2.length; i++) {
    this.pTwoBoxes.splice(this.player2[i], 1, 1)
  }
}

Game.prototype.checkForWin = function () {
  if (this.pOneBoxes[0] + this.pOneBoxes[1] + this.pOneBoxes[2] === 3) {
    $("#winner").append("It's a WIN for X!")
  }
}

// function winConditions() {
//   this.win1 = ["0", "1", "2"]
//   this.win2 = ["3", "4", "5"]
//   this.win3 = ["6", "7", "8"]
//   this.win4 = ["0", "3", "6"]
//   this.win5 = ["1", "4", "7"]
//   this.win6 = ["2", "5", "8"]
//   this.win7 = ["0", "4", "8"]
//   this.win8 = ["2", "4", "6"]
// }
// winConditions.prototype.checkForWinner = function () {

//   if ((game.player1).includes("0") && (game.player1).includes("1") && (game.player1).includes("2")) {
//     $("#winner").append("X player wins!")
//   }
// else if ((game.player1).includes(win2[i]) && (game.player1).includes(win2[i + 1]) && (game.player1).includes(win2[i + 2])) {
//   $("#winner").append("X player wins!")
// }
// else if ((game.player1).includes(win3[i]) && (game.player1).includes(win3[i + 1])(game.player1).includes(win3[i + 2])) {
//   $("#winner").append("X player wins!")
// }
// else if ((game.player1).includes(win4[i]) && (game.player1).includes(win4[i + 1]) && (game.player1).includes(win4[i])) {
//   $("#winner").append("X player wins!")
// }
// else if ((game.player1).includes(win5[i]) && (game.player1).includes(win5[i + 1]) && (game.player1).includes(win5[i])) {
//   $("#winner").append("X player wins!")
// }
// else if ((game.player1).includes(win6[i]) && (game.player1).includes(win6[i + 1]) && (game.player1).includes(win6[i])) {
//   $("#winner").append("X player wins!")
// }
// else if ((game.player1).includes(win7[i]) && (game.player1).includes(win7[i + 1]) && (game.player1).includes(win7[i])) {
//   $("#winner").append("X player wins!")
// }
// else if ((game.player1).includes(win8[i]) && (game.player1).includes(win8[i + 1]) && (game.player1).includes(win8[i])) {
//   $("#winner").append("X player wins!")
// }
//}


// UI Logic   


$(document).ready(function () {
  var game = new Game();
  // var wins = new winConditions();
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
        //      game.player2.sort();
        // wins.checkForWinner();

        game.addBox();
        game.checkForWin();
        console.log(game.pOneBoxes);
      }
      else if ((game.turn % 2) !== 0) {
        $(this).html("X");
        $("#playerTurn").html("O");
        game.turn += 1;
        game.player1.push(this.id);
        game.addBox();
        game.checkForWin();
        //console.log(game.player1);
        //      game.player1.sort();
        //    wins.checkForWinner();
      }
    }

    // //console.log(wins);
    //console.log(game.player1);
  })


})