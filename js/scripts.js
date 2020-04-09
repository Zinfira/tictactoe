// Business Logic

function Game() {
  this.player1 = []; //<--- keeps track of what boxes have been checked by X player 
  this.player2 = []; // <--- keeps track of what boxes have been checked by O player
  this.turn = 1; // <---keeps track of whose turn it is
  this.pOneBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.pTwoBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.pOneWins = 0;
  this.pTwoWins = 0;
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
  if (this.pOneBoxes[0] + this.pOneBoxes[1] + this.pOneBoxes[2] === 3 || this.pOneBoxes[3] + this.pOneBoxes[4] + this.pOneBoxes[5] === 3 || this.pOneBoxes[6] + this.pOneBoxes[7] + this.pOneBoxes[8] === 3 || this.pOneBoxes[0] + this.pOneBoxes[3] + this.pOneBoxes[6] === 3 || this.pOneBoxes[1] + this.pOneBoxes[4] + this.pOneBoxes[7] === 3 || this.pOneBoxes[2] + this.pOneBoxes[5] + this.pOneBoxes[8] === 3 || this.pOneBoxes[0] + this.pOneBoxes[4] + this.pOneBoxes[8] === 3 || this.pOneBoxes[2] + this.pOneBoxes[4] + this.pOneBoxes[6] === 3) {
    $("#winner").append("It's a WIN for X!");
    this.pOneWins += 1;
    $(".box").empty();
  }
  else if (this.pTwoBoxes[0] + this.pTwoBoxes[1] + this.pTwoBoxes[2] === 3 || this.pTwoBoxes[3] + this.pTwoBoxes[4] + this.pTwoBoxes[5] === 3 || this.pTwoBoxes[6] + this.pTwoBoxes[7] + this.pTwoBoxes[8] === 3 || this.pTwoBoxes[0] + this.pTwoBoxes[3] + this.pTwoBoxes[6] === 3 || this.pTwoBoxes[1] + this.pTwoBoxes[4] + this.pTwoBoxes[7] === 3 || this.pTwoBoxes[2] + this.pTwoBoxes[5] + this.pTwoBoxes[8] === 3 || this.pTwoBoxes[0] + this.pTwoBoxes[4] + this.pTwoBoxes[8] === 3 || this.pTwoBoxes[2] + this.pTwoBoxes[4] + this.pTwoBoxes[6] === 3) {
    $("#winner").append("It's a WIN for O!");
    this.pTwoWins += 1;
    $(".box").empty();
  }

  else if (this.pOneBoxes[0] + this.pOneBoxes[1] + this.pOneBoxes[2] + this.pOneBoxes[3] + this.pOneBoxes[4] + this.pOneBoxes[5] + this.pOneBoxes[6] + this.pOneBoxes[7] + this.pOneBoxes[8] + this.pOneBoxes[9] === 4 && this.pTwoBoxes[0] + this.pTwoBoxes[1] + this.pTwoBoxes[2] + this.pTwoBoxes[3] + this.pTwoBoxes[4] + this.pTwoBoxes[5] + this.pTwoBoxes[6] + this.pTwoBoxes[7] + this.pTwoBoxes[8] + this.pTwoBoxes[9] === 5 || this.pOneBoxes[0] + this.pOneBoxes[1] + this.pOneBoxes[2] + this.pOneBoxes[3] + this.pOneBoxes[4] + this.pOneBoxes[5] + this.pOneBoxes[6] + this.pOneBoxes[7] + this.pOneBoxes[8] + this.pOneBoxes[9] === 5 && this.pTwoBoxes[0] + this.pTwoBoxes[1] + this.pTwoBoxes[2] + this.pTwoBoxes[3] + this.pTwoBoxes[4] + this.pTwoBoxes[5] + this.pTwoBoxes[6] + this.pTwoBoxes[7] + this.pTwoBoxes[8] + this.pTwoBoxes[9] === 4) {
    $("#winner").append("It's a DRAW!")
  }

}

// UI Logic   


$(document).ready(function () {

  var game = new Game();
  var xPlayer = "";
  var oPlayer = "";
  // var wins = new winConditions();
  $("#startGame").click(function (event) {
    event.preventDefault();

    xPlayer = $("input#xplayer-name").val(), ("X");
    oPlayer = $("input#oplayer-name").val(), ("O");

    $(".game").fadeIn();
    $("#start-screen").hide();


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
        console.log(game.player1);
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