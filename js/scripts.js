// Business Logic

function Game() {
  this.player1 = []; //<--- keeps track of what boxes have been checked by X player 
  this.player2 = []; // <--- keeps track of what boxes have been checked by O player
  this.turn = 1; // <---keeps track of whose turn it is
  this.pOneBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.pTwoBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.Winner = "";
}

function Players() {
  this.pOneWins = 0;
  this.pTwoWins = 0;
  this.draws = 0;
  this.pOneName = "";
  this.pTwoName = "";

}

Game.prototype.addBox = function () {
  for (i = 0; i < this.player1.length; i++) {
    this.pOneBoxes.splice(this.player1[i], 1, 1)
    // this.pOneBoxes[this.player1[i]] = 1;
  }
  for (i = 0; i < this.player2.length; i++) {
    this.pTwoBoxes.splice(this.player2[i], 1, 1)
  }
}

Game.prototype.checkForWin = function () {

  if (this.pOneBoxes[0] + this.pOneBoxes[1] + this.pOneBoxes[2] === 3 || this.pOneBoxes[3] + this.pOneBoxes[4] + this.pOneBoxes[5] === 3 || this.pOneBoxes[6] + this.pOneBoxes[7] + this.pOneBoxes[8] === 3 || this.pOneBoxes[0] + this.pOneBoxes[3] + this.pOneBoxes[6] === 3 || this.pOneBoxes[1] + this.pOneBoxes[4] + this.pOneBoxes[7] === 3 || this.pOneBoxes[2] + this.pOneBoxes[5] + this.pOneBoxes[8] === 3 || this.pOneBoxes[0] + this.pOneBoxes[4] + this.pOneBoxes[8] === 3 || this.pOneBoxes[2] + this.pOneBoxes[4] + this.pOneBoxes[6] === 3) {
    $("#winner").html("It's a WIN for X!");
    $("#winner").fadeIn(3000);
    this.Winner = "yes";
  }

  else if (this.pTwoBoxes[0] + this.pTwoBoxes[1] + this.pTwoBoxes[2] === 3 || this.pTwoBoxes[3] + this.pTwoBoxes[4] + this.pTwoBoxes[5] === 3 || this.pTwoBoxes[6] + this.pTwoBoxes[7] + this.pTwoBoxes[8] === 3 || this.pTwoBoxes[0] + this.pTwoBoxes[3] + this.pTwoBoxes[6] === 3 || this.pTwoBoxes[1] + this.pTwoBoxes[4] + this.pTwoBoxes[7] === 3 || this.pTwoBoxes[2] + this.pTwoBoxes[5] + this.pTwoBoxes[8] === 3 || this.pTwoBoxes[0] + this.pTwoBoxes[4] + this.pTwoBoxes[8] === 3 || this.pTwoBoxes[2] + this.pTwoBoxes[4] + this.pTwoBoxes[6] === 3) {
    $("#winner").html("It's a WIN for O!");
    $("#winner").fadeIn(3000);
    this.Winner = "yes";
    //   console.log('p2 wins');
  }

  else if (this.pOneBoxes[0] + this.pOneBoxes[1] + this.pOneBoxes[2] + this.pOneBoxes[3] + this.pOneBoxes[4] + this.pOneBoxes[5] + this.pOneBoxes[6] + this.pOneBoxes[7] + this.pOneBoxes[8] === 4 && this.pTwoBoxes[0] + this.pTwoBoxes[1] + this.pTwoBoxes[2] + this.pTwoBoxes[3] + this.pTwoBoxes[4] + this.pTwoBoxes[5] + this.pTwoBoxes[6] + this.pTwoBoxes[7] + this.pTwoBoxes[8] === 5 || this.pOneBoxes[0] + this.pOneBoxes[1] + this.pOneBoxes[2] + this.pOneBoxes[3] + this.pOneBoxes[4] + this.pOneBoxes[5] + this.pOneBoxes[6] + this.pOneBoxes[7] + this.pOneBoxes[8] === 5 && this.pTwoBoxes[0] + this.pTwoBoxes[1] + this.pTwoBoxes[2] + this.pTwoBoxes[3] + this.pTwoBoxes[4] + this.pTwoBoxes[5] + this.pTwoBoxes[6] + this.pTwoBoxes[7] + this.pTwoBoxes[8] === 4) {
    $("#winner").html("It's a DRAW!");
    $("#winner").fadeIn(2000);
    $("#winner").fadeOut(2000);
    this.Winner = "draw";
  }

}

// UI Logic   


$(document).ready(function () {

  var game = new Game();
  var players = new Players();

  $("#startGame").click(function (event) {
    event.preventDefault();

    players.pOneName = $("input#xplayer-name").val();
    players.pTwoName = $("input#oplayer-name").val();
    $(".game").fadeIn();
    $("#start-screen").hide();
    $("#winCount").fadeIn();
    $("#xname").text(players.pOneName);
    $("#oname").text(players.pTwoName);
    $("#playerTurn").html("<strong>X</strong>");


  })
  $(".box").click(function () {

    if ($(this).is(":empty")) {

      if ((game.turn % 2) == 0) {
        $(this).html("O");
        $("#playerTurn").html("<strong>X</strong>");
        game.turn += 1;
        game.player2.push(this.id);
        //      game.player2.sort();
        // wins.checkForWinner();

        game.addBox();
        game.checkForWin();
        //       console.log(game.Winner);
        if (game.Winner === "yes") {
          game.pOneBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          game.pTwoBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          game.player1 = [];
          game.player2 = [];
          players.pTwoWins += 1;
          $(".box").empty();
          $("#winner").fadeOut(2000);
          game.Winner = "";
          game.turn = 1;
          $("#twoWinCount").html(players.pTwoWins).val();

        }
        //       console.log(players.pOneWins)
        //       console.log(game.pOneBoxes);
      }
      else if ((game.turn % 2) !== 0) {
        $(this).html("X");
        $("#playerTurn").html("<strong>O</strong>");
        game.turn += 1;
        game.player1.push(this.id);
        //        console.log(game.player1);
        game.addBox();
        game.checkForWin();
        if (game.Winner === "yes") {
          game.pOneBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          game.pTwoBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          game.player1 = [];
          game.player2 = [];
          players.pOneWins += 1;
          $(".box").empty();
          $("#winner").fadeOut(2000);
          console.log(players.pOneWins);
          game.Winner = "";
          game.turn = 1;
          $("#oneWinCount").html(players.pOneWins).val();
          if (game.turn == 1) {
            $("#playerTurn").html("X");
          }
        }
        else if (game.Winner === "draw") {
          game.pOneBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          game.pTwoBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          game.player1 = [];
          game.player2 = [];
          $(".box").empty();
          $("#winner").fadeOut(2000);
          console.log(players.pOneWins);
          game.Winner = "";
          players.draws += 1;
          game.turn = 1;
          $("#drawCount").html(players.draws).val();
          if (game.turn == 1) {
            $("#playerTurn").html("<strong>X</strong>");
          }
        }


        //console.log(game.player1);
        //      game.player1.sort();
        //    wins.checkForWinner();
      }
    }

    // //console.log(wins);
    //console.log(game.player1);
  })


})